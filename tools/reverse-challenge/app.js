// 创建AudioContext对象
const audioContext = new AudioContext();
let chunks = [];
new Vue({
    el: "#app",
    data: {
        state: "inactive",
        mediaRecorder: null,
        records: [],
        recordingSec: 0,
        recordStartTime: null,
        recordInterval: null
    },
    methods: {
        record() {
            if (this.state === "recording") {
                this.mediaRecorder.stop();
                console.log("录音结束");
                clearInterval(this.recordInterval);
            } else {
                this.mediaRecorder.start();
                console.log("录音中...");
                this.recordStartTime = Date.now();
                this.recordInterval = setInterval(() => {
                    this.recordingSec = ((Date.now() - this.recordStartTime) / 1000).toFixed(2);
                }, 10)
            }
            this.state = this.mediaRecorder.state;
            console.log("录音器状态：", this.mediaRecorder.state);
        },
        onStop() {
            let blob = new Blob(chunks, {type: "audio/ogg; codecs=opus"});
            chunks = [];
            blob.arrayBuffer()
                .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
                .then(audioBuffer => this.records.push(audioBuffer))
        },
        play(audioBuffer) {
            // 创建AudioBufferSourceNode节点
            const sourceNode = audioContext.createBufferSource();
            sourceNode.buffer = audioBuffer;
            // 连接音频源到音频输出节点
            sourceNode.connect(audioContext.destination);
            // 播放音频
            sourceNode.start();
        },
        reversePlay(buffer) {
            // 创建新的音频数据
            const reversedBuffer = audioContext.createBuffer(buffer.numberOfChannels, buffer.length, buffer.sampleRate);

            // 倒放每个音频通道的数据
            for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
                const sourceData = buffer.getChannelData(channel);
                const destinationData = reversedBuffer.getChannelData(channel);

                for (let i = 0, j = buffer.length - 1; i < buffer.length; i++, j--) {
                    destinationData[i] = sourceData[j];
                }
            }
            this.play(reversedBuffer);
        },
        deleteRecord(index) {
            this.records.splice(index, 1);
        }
    },
    created() {
        if (navigator.mediaDevices.getUserMedia) {
            const constraints = {audio: true};
            navigator.mediaDevices.getUserMedia(constraints).then(
                stream => {
                    console.log("授权成功！");

                    this.mediaRecorder = new MediaRecorder(stream);

                    this.mediaRecorder.ondataavailable = e => {
                        chunks.push(e.data);
                    };

                    this.mediaRecorder.onstop = this.onStop;
                },
                () => {
                    console.error("授权失败！");
                }
            );
        } else {
            console.error("浏览器不支持 getUserMedia");
        }
    }
})