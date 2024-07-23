let vm = new Vue({
        el: "#app",
        data: {
            data: [],
            originData: [],
            sortedData: [],
            dataGenerateType: 'random',
            defaultDataNumber: 50,
            delayTime: 40,
            sound: localStorage.getItem('sound') !== 'false',
            horizon: localStorage.getItem('horizon') === 'true',
            selectSortType: null,
            lastSortType: null,
            allSort: {
                quickSort: {
                    name: "快速排序",
                    nameEn: "Quick Sort",
                    desc: "快速排序(Quick Sort)是对冒泡排序的一种改进，采用分治法，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列",
                    timeCom: "O(nlog₂n)",
                    spaceCom: "O(nlog₂n)",
                    stable: false
                },
                mergeSort: {
                    name: "归并排序",
                    nameEn: "Merge Sort",
                    desc: "归并排序(Merge Sort)是建立在归并操作上的一种有效的排序算法。采用分治法，将n个元素从中间切开，分成两部分，分别进行递归分解，直到所有部分的元素个数都为1，从最底层开始逐步合并两个排好序的数列",
                    timeCom: "O(nlog₂n)",
                    spaceCom: "O(n)",
                    stable: true
                },
                bubbleSort: {
                    name: "冒泡排序",
                    nameEn: "Bubble Sort",
                    desc: "冒泡排序(Bubble Sort)最基础的交换排序，之所以叫做冒泡排序，因为每一个元素都可以像小气泡一样，根据自身大小一点一点向数组的一侧移动",
                    timeCom: "O(n²)",
                    spaceCom: "O(1)",
                    stable: true
                },
                selectionSort: {
                    name: "选择排序",
                    nameEn: "Selection Sort",
                    desc: "选择排序(Selection Sort)选择排序是一种简单直观的排序算法，它的工作原理是每一次从待排序的数据元素中选出最小（最大）的一个元素，存放在序列的起始位置",
                    timeCom: "O(n²)",
                    spaceCom: "O(1)",
                    stable: false
                },
                insertionSort: {
                    name: "插入排序",
                    nameEn: "Insertion Sort",
                    desc: "插入排序(Insertion Sort)每一步将一个待排序的数据插入到前面已经排好序的有序序列中，直到插完所有元素为止",
                    timeCom: "O(n²)",
                    spaceCom: "O(1)",
                    stable: true
                },
                binaryInsertionSort: {
                    name: "折半插入排序",
                    nameEn: "Binary Insertion Sort",
                    stable: true
                },
                shellSort: {
                    name: "希尔排序",
                    nameEn: "Shell Sort",
                    desc: "希尔排序(Shell Sort)是对直接插入排序的一种改进，将待排序的数组元素按下标的一定增量分组，分成多个子序列，然后对各个子序列进行直接插入排序算法排序；然后依次缩减增量再进行排序，直到增量为1时，进行最后一次直接插入排序，排序结束",
                    timeCom: "O(n¹·³)",
                    spaceCom: "O(1)",
                    stable: false
                },
                heapSort: {
                    name: "堆排序",
                    nameEn: "Heap Sort",
                    desc: "堆排序(Heap Sort)是指利用堆这种数据结构所设计的一种排序算法，堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点，移除位在第一个数据的根节点，并做最大堆调整的递归运算，如此往复，最终得到一个递增序列",
                    timeCom: "O(nlog₂n)",
                    spaceCom: "O(1)",
                    stable: false
                },
                countingSort: {
                    name: "计数排序",
                    nameEn: "Counting Sort",
                    desc: "计数排序(Counting Sort)是一个非基于比较的排序算法，是一种牺牲内存空间来换取低时间复杂度的排序算法，优势在于在对一定范围内的整数排序时，快于任何比较排序算法",
                    timeCom: "O(n+k)",
                    spaceCom: "O(n+k)",
                    stable: true
                },
                radixSortLSD: {
                    name: "基数排序(LSD)",
                    nameEn: "Radix Sort(LSD)",
                    desc: "基数排序最低优先(Radix Sort LSD)是一种非比较型整数排序算法，原理是将整数按位数切割成不同的数字，然后按每个位数分别比较，这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列",
                    timeCom: "",
                    spaceCom: "",
                    stable: true,
                    config: {
                        radix: {
                            type: "number",
                            value: 10,
                            min: 2,
                            step: 1,
                            required: true
                        }
                    }
                },
                radixSortMSD: {
                    name: "基数排序(MSD)",
                    nameEn: "Radix Sort(MSD)",
                    desc: "基数排序最低优先(Radix Sort MSD)是一种非比较型整数排序算法，原理是将整数按位数切割成不同的数字，然后按每个位数分别比较，这样从最高位排序一直到最低位排序完成以后, 数列就变成一个有序序列",
                    timeCom: "",
                    spaceCom: "",
                    stable: true,
                    config: {
                        radix: {
                            type: "number",
                            value: 10,
                            min: 2,
                            step: 1,
                            required: true
                        }
                    }
                },
                cocktailSort: {
                    name: "鸡尾酒排序",
                    nameEn: "Cock Tail Sort",
                    desc: "鸡尾酒排序(Cock Tail Sort)是对冒泡排序的一种改进，冒泡排序的的元素比较和交换过程是单向的，而鸡尾酒排序的元素比较和交换过程是双向的",
                    timeCom: "O(n²)",
                    spaceCom: "O(1)",
                    stable: true
                },
                combSort: {
                    name: "梳排序",
                    nameEn: "Comb Sort",
                    desc: "梳排序(Comb Sort)是对冒泡排序、快速排序的一种改进，类似于希尔排序，将相距某个增量的记录组成一个子序列，通过冒泡排序使得这个子序列基本有序，然后减少增量继续排序",
                    timeCom: "O(nlog₂n)",
                    spaceCom: "O(1)",
                    stable: false
                },
                gnomeSort: {
                    name: "地精排序",
                    nameEn: "Gnome Sort",
                    desc: "地精排序(Gnome Sort)类似于插入排序，在发现反序对时，把它往回按，直到排好序，再向前继续走，只需要一重循环",
                    timeCom: "O(n²)",
                    spaceCom: "O(1)",
                    stable: true
                },
                bucketSort: {
                    name: "桶排序",
                    nameEn: "Bucket Sort",
                    desc: "桶排序(Bucket Sort)是计数排序的升级版，采用分治法，思想是我们首先需要知道所有待排序元素的范围，然后需要有在这个范围内的同样数量的桶，接着把元素放到对应的桶中，最后按顺序输出",
                    timeCom: "O(n+k)",
                    spaceCom: "O(n+k)",
                    stable: true,
                    config: {
                        bucketNumber: {
                            type: "number",
                            value: 10,
                            min: 2,
                            step: 1,
                            required: true
                        }
                    }
                },
                bitonicSort: {
                    name: "双调排序",
                    nameEn: "Bitonic Sort",
                },
                // timSort: {
                //     name: "Tim排序",
                //     nameEn: "Tim Sort",
                // },
                stoogeSort: {
                    name: "漂亮排序",
                    nameEn: "Stooge Sort",
                    desc: "漂亮排序(Stooge Sort)排序是一种低效的递归排序算法，甚至慢于冒泡排序，整个排序算法没有任何循环语句。如果最后一个值小于第一个值，则交换它们；如果当前子集元素数量大于等于3：使用Stooge排序前2/3的元素，使用Stooge排序后2/3的元素，再次使用Stooge排序前2/3的元素",
                    timeCom: "O(n²·⁷)",
                    spaceCom: "",
                    stable: false
                },
                bogoSort: {
                    name: "猴子排序",
                    nameEn: "Monkey Sort",
                    desc: "一只猴子随机敲击键盘,只要时间足够久,一定能敲出莎士比亚的诗",
                    timeCom: "O(?)",
                    spaceCom: "O(1)",
                    stable: false
                }
            },
            currentMark: {
                stepMark: [],
                update: {},
                finished: [],
                persistMark: {},
                note: {},
                persistNote: {}
            },
            changeIndexes: new Set(),
            sortConfig: null,
            state: 'idle',
            stateMap: {
                idle: 'idle', sorting: 'sorting', paused: 'paused', finished: 'finished'
            },
            tip: null,
            oscillatorNode: undefined,
            gainNode: undefined,
            title: undefined,
            promise: {
                resolve: undefined,
                reject: undefined
            },
            quickDelayCount: 0,
            delayTimeAmend: [1, 0.9, 0.4, 0.25], // delay时间修正倍率
            uri: location.origin + location.pathname,
            language: localStorage.getItem('language') || (navigator.language.startsWith('zh') ? 'cn' : 'en'),
            colors: ['aqua', 'blueviolet', 'cadetblue', 'cornflowerblue', 'darkblue', 'darkslateblue', 'deepskyblue', 'dodgerblue',
                'mediumslateblue', 'midnightblue', 'royalblue', ''],
            randomColorIndex: 0,
            i18nAll
        },
        methods: {
            sortConfigCheck(config) {
                if (config.value === '' || config.value === undefined) {
                    if (config.required) config.value = config.defaultValue;
                } else if (config.type === 'number') {
                    if (config.step !== undefined && config.value % config.step) {
                        config.value = Math.floor(config.value / config.step) * config.step;
                    }
                    if (config.min !== undefined && config.value < config.min) config.value = config.min
                    else if (config.max !== undefined && config.value > config.max) config.value = config.max
                }
            },
            // 生成随机数据
            generateData() {
                let arr;
                if (this.dataGenerateType === 'fullRandom') {
                    arr = Array.from({length: this.defaultDataNumber}, (v, k) => this.randomNumber(this.defaultDataNumber, 1));
                } else {
                    arr = Array.from({length: this.defaultDataNumber}, (v, k) => k + 1);
                    if (this.dataGenerateType === 'descend') {
                        arr.sort((v1, v2) => v2 - v1);
                    } else if (this.dataGenerateType === 'random') {
                        arr.sort(() => 0.5 - Math.random());
                    }
                }
                this.sortedData = arr.slice().sort((v1, v2) => v1 - v2);
                return arr;
            },
            nextStep(delayTime = this.delayTime) {
                return new Promise((resolve, reject) => {
                    this.promise.resolve = resolve;
                    this.promise.reject = reject;
                    if (this.state !== this.stateMap.paused) {
                        setTimeout(() => {
                            if (this.state !== this.stateMap.paused) {
                                resolve();
                            }
                        }, delayTime);
                    }
                });
            },
            // 添加演示步骤 stepMark: 单步标记集合，update：更新集合
            push(stepNoteMark = [], update = {}, finished = []) {
                let stepMark, note;
                if (stepNoteMark.constructor === Object) {
                    note = stepNoteMark;
                    stepMark = Object.values(stepNoteMark);
                } else {
                    stepMark = stepNoteMark
                }
                return this.pushC({
                    stepMark, update, finished, note
                });
            },
            markNoteRevert(note) {
                let entries = Object.entries(note);
                if (!entries.length) {
                    return note;
                }
                let noteInverse = {};
                entries.forEach(([key, value]) => {
                    if (value.constructor === Number) value = [value];
                    value.forEach(val => {
                        if (!noteInverse[val]) {
                            noteInverse[val] = [key];
                        } else {
                            noteInverse[val].push(key);
                        }
                    })
                })
                return noteInverse; // note: {0:[i,min]}
            },
            async pushC(config = {}) {
                let {stepMark, update, finished, persistMark, note, persistNote} = config;
                if (stepMark) {
                    stepMark = stepMark.map(Number);
                    this.changeIndexes.addAll(stepMark);
                }
                if (this.currentMark.stepMark) {
                    this.changeIndexes.addAll(this.currentMark.stepMark);
                }
                this.currentMark.stepMark = stepMark;

                if (note) {
                    note = this.markNoteRevert(note);
                    this.changeIndexes.addAll(Object.keys(note).map(Number));
                }
                if (this.currentMark.note) {
                    let oldIndexes = Object.keys(this.currentMark.note).map(Number);
                    this.changeIndexes.addAll(oldIndexes);
                }
                this.currentMark.note = note;

                let updateEntries;
                if (update) {
                    updateEntries = Object.entries(update);
                    updateEntries.forEach(([index, value]) => {
                        index = Number(index);
                        this.data[index] = value;
                        this.changeIndexes.add(index);
                    });
                }
                if (this.currentMark.update) {
                    let updateIndexes = Object.keys(this.currentMark.update).map(Number);
                    this.changeIndexes.addAll(updateIndexes);
                }
                this.currentMark.update = update;

                if (finished) {
                    finished.forEach(index => this.setFinished(index));
                }

                if (persistMark) {
                    let indexes = Object.keys(persistMark).map(Number);
                    if (indexes.length) {
                        Object.assign(this.currentMark.persistMark, persistMark);
                        this.changeIndexes.addAll(indexes);
                    }
                }
                if (persistNote) {
                    let indexes = Object.keys(persistNote).map(Number);
                    if (indexes.length) {
                        persistNote = this.markNoteRevert(persistNote);
                        Object.assign(this.currentMark.persistNote, persistNote);
                        this.changeIndexes.addAll(indexes);
                    }
                }
                if (this.delayTime < 1) {
                    if (this.quickDelayCount <= 1) {
                        this.quickDelayCount += this.delayTime;
                        return;
                    }
                    this.quickDelayCount = 0;
                }
                let beepTone;
                if (update && updateEntries.length) {
                    let updateValuesSum = updateEntries[0][1];
                    for (let i = 1; i < updateEntries.length; i++) {
                        updateValuesSum += updateEntries[i][1];
                    }
                    beepTone = updateValuesSum / updateEntries.length;
                } else if (config.markBeep) {
                    beepTone = stepMark[0];
                }
                if (beepTone) {
                    this.playBeep(beepTone);
                } else {
                    this.stopBeep();
                }
                this.refreshChangeDataStyle();
                await this.nextStep(config.delayTime || this.delayTime);
            },
            setFinished(index) {
                this.currentMark.finished[index] = true;
                this.changeIndexes.add(index);
            }
            ,
            async showFinished(start = 0, end = this.data.length - 1, showTime = 200) {
                await this.push(); // 清除标记
                let dataAmount = end - start + 1;
                let delayTime = showTime * this.delayTimeAmend[Math.round(Math.log10(dataAmount))] / dataAmount;
                for (let i = start; i <= end; i++) {
                    let mark = [i];
                    this.playBeep(i);
                    await this.pushC({
                        stepMark: mark,
                        finished: mark,
                        delayTime,
                        markBeep: true
                    })
                }
                await this.push();
                this.refreshChangeDataStyle();
            }
            ,
            async start(pause = false) {
                let name = this.selectSortType;
                if (name !== this.lastSortType) {
                    this.lastSortType = name;
                    this.stop();
                    this.state = pause ? this.stateMap.paused : this.stateMap.sorting;
                    let sortFunction = this[name];
                    if (sortFunction) {
                        this.data = this.originData.slice()
                        try {
                            await sortFunction(this.data);
                            this.state = this.stateMap.finished;
                            await this.showFinished();
                        } catch (e) {
                            if (e !== undefined) {
                                this.end();
                                alert("Error!" + e);
                                throw e;
                            }
                        }
                        this.end();
                    } else {
                        alert("Error: Not found sort:" + this.lastSortType);
                    }
                    this.state = this.stateMap.idle;
                }
            },
            // 手动停止调用
            stop() {
                this.end();
                this.lastSortType = null;
                this.clearDataStyle();
                this.data = this.originData;
            }
            ,
            pause() {
                this.state = this.stateMap.paused;
                this.stopBeep();
            }
            ,
            play() {
                this.state = this.stateMap.sorting;
                this.promise.resolve();
            }
            ,
            next() {
                if (this.state === this.stateMap.paused) {
                    this.promise.resolve();
                } else {
                    this.start(true);
                }
            }
            ,
            // 排序完成调用
            end() {
                if (this.promise.reject) {
                    this.promise.reject();
                }
                this.stopBeep();
                this.currentMark.stepMark = [];
                this.currentMark.update = {};
                this.state = this.stateMap.idle;
                this.title = undefined;
            }
            ,
            saveConfig(key, value) {
                localStorage.setItem(key, value)
            }
            ,
            redrawSortDiv() {
                let childNodes = this.$refs.sort.childNodes;
                for (let i = childNodes.length; i < this.data.length; i++) {
                    this.$refs.sort.appendChild(document.createElement("div"))
                }
                for (let i = childNodes.length - 1; i >= this.data.length; i--) {
                    childNodes[i].remove();
                }
                for (let i = 0; i < childNodes.length; i++) {
                    let childNode = childNodes[i];
                    childNode.style.width = childNode.style.height = null;
                    this.refreshDataStyle(i, childNode)
                }
                if (childNodes.length > 0) {
                    let node = childNodes[0];
                    this.$nextTick(() => {
                        let fontSize = this.horizon ? node.clientHeight - 1 : node.clientWidth - 2;
                        if (fontSize < 4) fontSize = null;
                        else if (fontSize > 18) fontSize = 18;
                        if (fontSize) fontSize += 'px';
                        this.$refs.sort.style.fontSize = fontSize;
                    })
                }
            },
            clearPersist() {
                let indexes = Object.keys(this.currentMark.persistMark).concat(
                    Object.keys(this.currentMark.persistNote)
                ).map(Number);
                this.changeIndexes.addAll(indexes);
                this.currentMark.persistMark = {};
                this.currentMark.persistNote = {};

            },
            clearDataStyle() {
                this.currentMark.stepMark = []
                this.currentMark.update = {}
                this.currentMark.finished = []
                this.currentMark.persistMark = {};
                this.currentMark.note = {};
                this.currentMark.persistNote = {};
                this.changeIndexes.clear();
                let nodes = this.$refs.sort.childNodes;
                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].style.backgroundColor = null;
                    nodes[i].innerText = null;
                }
            },
            refreshDataStyle(i, node) {
                let sortDom = this.$refs.sort;
                if (!node) node = sortDom.childNodes[i];
                if (!node) {
                    console.warn("Node not found:", i);
                    return;
                }
                let style = node.style;
                let size = this.data[i] / this.data.length * 100 + '%';
                if (this.horizon) style.width = size;
                else style.height = size;
                // style.width = this.dataWidth;
                let backgroundColor = '';
                let {stepMark, update, finished, persistMark, note, persistNote} = this.currentMark;
                if (stepMark?.includes(i)) {
                    backgroundColor = 'dodgerblue';
                } else if (finished && finished[i]) {
                    backgroundColor = 'green';
                } else if (persistMark && persistMark[i]) {
                    backgroundColor = persistMark[i];
                }
                if (update && update[i]) {
                    backgroundColor = 'red';
                }
                style.backgroundColor = backgroundColor;
                let notes = [];
                if (note && note[i]) notes.push(...note[i]);
                if (persistNote && persistNote[i]) notes.push(...persistNote[i]);
                if (notes.length) {
                    let title = notes.join(" , ");
                    node.title = title;
                    if (sortDom.style.fontSize) {
                        node.innerText = title;
                    } else {
                        node.innerText = '';
                    }
                } else {
                    node.removeAttribute('title');
                    node.innerText = '';
                }
                return style;
            }
            ,
            refreshChangeDataStyle() {
                this.changeIndexes.forEach(index => this.refreshDataStyle(index));
                this.changeIndexes.clear();
            }
            ,
            getInputStep(val) {
                let step = 1;
                while (val >= 30) {
                    val /= 10;
                    step *= 10
                }
                return step;
            }
            ,
            initBeap() {
                // The browser will limit the number of concurrent audio contexts
                // So be sure to re-use them whenever you can
                const myAudioContext = new AudioContext();
                let oscillatorNode = myAudioContext.createOscillator();
                let gainNode = myAudioContext.createGain();

                // oscillatorNode.detune.value=10
                // Set the type of oscillator
                oscillatorNode.detune.value = 1000;
                oscillatorNode.type = "square";
                gainNode.connect(myAudioContext.destination);

                // Set the gain to the volume
                gainNode.gain.value = 1;
                this.oscillatorNode = oscillatorNode;
                this.gainNode = gainNode;
            }
            ,
            playBeep(val) {
                if (this.sound) {
                    let frequency = 20 + 300 * val / this.defaultDataNumber;
                    let isInit;
                    if (!(isInit = this.oscillatorNode)) {
                        this.initBeap();
                    }
                    this.oscillatorNode.frequency.value = frequency;
                    this.oscillatorNode.connect(this.gainNode);
                    if (!isInit) {
                        this.oscillatorNode.start();
                    }
                    if (this.state === this.stateMap.paused) {
                        setTimeout(this.stopBeep, 50);
                    }
                }
            }
            ,
            stopBeep() {
                if (this.oscillatorNode) {
                    this.oscillatorNode.disconnect();
                    if (!this.sound) {
                        this.oscillatorNode = null;
                    }
                }
            }
            ,
            randomNumber(max = this.data.length - 1, min = 0) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            ,
            randomColor(index = this.randomColorIndex) {
                let red = (index * 17) % 180;
                let green = 160 - (index * 25) % 160;
                let blue = 255 - (index * 47 % 130);
                this.randomColorIndex += this.randomNumber(5, 1);
                return `rgb(${red}, ${green}, ${blue})`;
            }
            ,
            checkIsSorted(data) {
                for (let i = 0; (i < data.length - 1); i++) {
                    if ((data[i] > data[i + 1])) {
                        return false;
                    }
                }
                return true;
            }
            ,
            sortSwap(data, i, j, update) {
                if (data === this.data) {
                    if (!update) update = {};
                    update[i] = data[j];
                    update[j] = data[i];
                } else {
                    let temp = data[i];
                    update[i] = data[i] = data[j];
                    update[j] = data[j] = temp;
                }
                return update;
            }
            ,
            async findMinMaxIndex(data, findMin = true, findMax = true, start = 0, end = data.length - 1) {
                let minIndex = start;
                let maxIndex = start;
                let push = data === this.data;
                let stepMark;
                for (let i = start + 1; i <= end; i++) {
                    if (push) stepMark = {i, start, end};
                    if (findMin) {
                        if ((data[i] < data[minIndex])) {
                            minIndex = i;
                        }
                        stepMark.min = minIndex
                    }
                    if (findMax) {
                        if ((data[i] > data[maxIndex])) {
                            maxIndex = i;
                        }
                        stepMark.max = maxIndex
                    }
                    if (push) {
                        await this.push(stepMark);
                    }
                }
                if (findMin && findMax) return [minIndex, maxIndex];
                else if (findMin) return minIndex;
                return maxIndex;
            }
            ,
            async arrayCopy(source, sourcePos, dest, destPos, len) {
                if (len <= 0) return;
                let start = 0, end = len, increment = 1;
                if (source === dest) {
                    if (sourcePos === destPos) return;
                    if (sourcePos < destPos) {
                        start = len - 1;
                        end = -1;
                        increment = -1;
                    }
                }
                for (let i = start; i !== end; i += increment) {
                    if (dest === this.data) {
                        await this.push([destPos], {
                            [destPos + i]: source[sourcePos + i]
                        })
                    }
                }
            }
            ,
// 冒泡排序
            async bubbleSort(data) {
                for (let i = 0; (i < data.length); i++) {
                    for (let j = 0; (j < data.length - i - 1); j++) {
                        let update = {};
                        if ((data[j] > data[j + 1])) {
                            this.sortSwap(data, j, j + 1, update);
                        }
                        await this.push([j, j + 1], update);
                    }
                    this.setFinished(data.length - i - 1, true);
                }
                return data;
            }
            ,
            async selectionSort(data) {
                for (let i = 0; (i < data.length); i++) {
                    let min = i;
                    this.title = "Min:" + data[min];
                    for (let j = i + 1; (j < data.length); j++) {
                        if ((data[j] < data[min])) {
                            min = j;
                            this.title = "Min:" + data[min];
                        }
                        await this.push({i, j, min});
                    }
                    const update = this.sortSwap(data, i, min);
                    await this.push([], update, [i]);
                }
                return data;
            }
            ,
            async insertionSort(data, show = true) {
                show && this.setFinished(0);
                for (let i = 1; (i < data.length); i++) {
                    show && this.setFinished(i);
                    this.title = this.i18n.move;
                    let temp = data[i];
                    let j = i;
                    for (; (j > 0) && temp < data[j - 1]; j--) {
                        show && await this.push([j - 1], {
                            [j]: data[j - 1] // 将前一个数复制到后一个数上
                        });
                    }
                    this.title = this.i18n.insert;
                    show && await this.push([], {
                        [j]: temp // 找到考察的数应处于的位置
                    });
                }
                return data;
            }
            ,
//折半插入排序
            async binaryInsertionSort(data) {
                this.setFinished(0);
                for (let i = 1; (i < data.length); i++) {
                    let temp = data[i];
                    let left = 0, right = i;
                    this.title = this.i18n.binarySearchInsertPosition;
                    while ((left < right)) {
                        let mid = Math.floor((left + right) / 2);
                        if ((temp <= data[mid])) right = mid
                        else left = mid + 1;
                        await this.push({i, left, right})
                    }
                    this.setFinished(i);
                    this.title = this.i18n.move;
                    let j = i;
                    for (; (j > left); j--) {
                        await this.push({left}, {
                            [j]: data[j - 1] //将前一个数复制到后一个数上
                        });
                    }
                    this.title = this.i18n.insert;
                    await this.push({target: j}, {
                        [j]: temp //找到考察的数应处于的位置
                    });
                }
                return data;
            }
            ,
            async quickSort(data) {
                let dg = async (data, i, j, title) => {
                    if ((i >= j)) {
                        return;
                    }
                    this.title = title;
                    let left = i;
                    let right = j;
                    let middle = Math.floor((left + right) / 2);
                    let update = this.sortSwap(data, left, middle);
                    await this.push({left, right, i, j, middle}, update, []);
                    let pivot = data[left];
                    while ((i < j)) {
                        while ((data[j] >= pivot) && (i < j)) { // 从后往前找比基准小的数
                            j--;
                        }
                        await this.push({i, j, left, right});
                        if ((i < j)) {
                            await this.push({i, j, left, right}, {
                                [i]: data[j]
                            }, i === j - 1 ? [i] : []);
                            i++;
                        }

                        while ((data[i] <= pivot) && (i < j)) { // 从前往后找比基准大的数
                            i++;
                            await this.push({i, left, j, right});
                        }
                        if ((i < j)) {
                            await this.push({left, right, i, j}, {
                                [j]: data[i]
                            }, i === j - 1 ? [j] : []);
                            j--;
                        }
                    }
                    let finished = [i];
                    if (left === i - 1) finished.push(left);
                    if (i + 1 === right) finished.push(right);
                    await this.push({left, right, i}, {
                        [i]: pivot
                    }, finished);
                    await dg(data, left, i - 1, title + 'L');
                    await dg(data, i + 1, right, title + 'R');
                };
                await dg(data, 0, data.length - 1, '');
            }
            ,
            async shellSort(data) {
                let len = data.length, temp, gap = 1;
                // 动态定义间隔序列，也可以手动定义，如 gap = 5；
                while ((gap < len / 5)) {
                    gap = gap * 5 + 1;
                }
                for (gap; (gap > 0); gap = Math.floor(gap / 5)) {
                    this.title = "Gap:" + gap;
                    for (let i = gap; (i < len); i++) {
                        temp = data[i];
                        await this.push({i});
                        let j;
                        for (j = i - gap; (j >= 0) && (data[j] > temp); j -= gap) {
                            await this.push({j, i}, {
                                [j + gap]: data[j]
                            }, gap === 1 ? [j + gap] : []);
                        }
                        await this.push({i}, {
                            [j + gap]: temp
                        }, gap === 1 ? [j + gap] : [])
                    }
                }
                return data;
            }
            ,
// 归并排序
            async mergeSort(data) {
                let sort = async (data, left, right, temp, title) => {
                    if ((left < right)) {
                        this.title = title;
                        const mid = parseInt((left + right) / 2);
                        await sort(data, left, mid, temp, title + 'L'); //左边归并排序，使得左子序列有序
                        await sort(data, mid + 1, right, temp, title + 'R'); //右边归并排序，使得右子序列有序
                        this.title = title + ' ' + this.i18n.merge;
                        await merge(data, left, mid, right, temp); //将两个有序子数组合并操作
                    }
                }

                let merge = async (arr, start, mid, end, temp) => {
                    let left = start; //左序列指针
                    let right = mid + 1; //右序列指针
                    let t = 0; //临时数组指针
                    while ((left <= mid) && (right <= end)) {
                        await this.push({left, right});
                        if ((arr[left] <= arr[right])) {
                            temp[t++] = arr[left++];
                        } else {
                            temp[t++] = arr[right++];
                        }
                    }
                    while ((left <= mid)) { //将左边剩余元素填充进temp中
                        await this.push({left});
                        temp[t++] = arr[left++];
                    }
                    while ((right <= end)) { //将右序列剩余元素填充进temp中
                        await this.push({right});
                        temp[t++] = arr[right++];
                    }
                    t = 0;
                    let color = this.randomColor();
                    //将temp中的元素全部拷贝到原数组中
                    while ((start <= end)) {
                        await this.pushC({
                            stepMark: [], update: {
                                [start]: temp[t++]
                            }, persistMark: {[start]: color}
                        });
                        start++;
                    }
                }

                await sort(data, 0, data.length - 1, new Array(data.length), '');
            }
            ,
            async heapSort(data) {//堆排序
                let len = data.length; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
                let heapify = async (i) => { // 堆调整
                    this.title = this.i18n.heapAdjust;
                    let left = 2 * i + 1,
                        right = 2 * i + 2,
                        largest = i;
                    if ((left < len) && (data[left] > data[largest])) {
                        largest = left;
                    }

                    if ((right < len) && (data[right] > data[largest])) {
                        largest = right;
                    }
                    if ((largest !== i)) {
                        let update = this.sortSwap(data, i, largest);
                        await this.push([i, largest], update);
                        await heapify(largest);
                    } else {
                        await this.push([i, largest]);
                    }
                }
                for (let i = Math.floor(data.length / 2); (i >= 0); i--) {
                    await heapify(i);
                }
                for (let i = data.length - 1; (i > 0); i--) {
                    this.title = this.i18n.sort;
                    let update = this.sortSwap(data, 0, i);
                    await this.push([i], update, [i]);
                    len--;
                    await heapify(0);
                }
                return data;
            }
            ,
            async countingSort(arr) {//计数排序
                let maxValue = arr[await this.findMinMaxIndex(arr, false)];
                await this.radixCountingSort(arr, 1, 0, arr.length - 1, maxValue + 1, true);
                return arr;
            }
            ,
            async radixSortLSD(arr, radix = this.sortConfig.radix.value) {//基数排序
                this.title = this.i18n.computeMaxValue;
                let maxValue = arr[await this.findMinMaxIndex(arr, false)];
                for (let exp = 1; (maxValue >= exp); exp *= radix) {
                    await this.radixCountingSort(arr, exp, 0, arr.length - 1, radix, exp * radix > maxValue);
                }
                return arr;
            }
            ,
            async radixSortMSD(arr, radix = this.sortConfig.radix.value) {
                let dg = async function (start, end, exp) {
                    let count = await this.radixCountingSort(arr, exp, start, end, radix, exp <= 1)
                    for (let i = 0; i < radix; i++) {
                        let dgStart = start + count[i];
                        let dgEnd = (i + 1 < radix) ? start + count[i + 1] - 1 : end;
                        if ((dgStart <= dgEnd) && (exp > 1)) {
                            await dg(dgStart, dgEnd, exp / radix);
                        }
                    }
                }.bind(this);
                this.title = this.i18n.computeMaxValue;
                let maxValue = arr[await this.findMinMaxIndex(arr, false)];
                let exp = 1;
                while ((exp * radix <= maxValue)) {
                    exp *= radix;
                }
                await dg(0, arr.length - 1, exp);
            }
            ,
            radixGetDigit(number, exp, radix) {
                return Math.floor(number / exp) % radix;
            }
            ,
            async radixCountingSort(arr, exp, left = 0, right = arr.length - 1, radix, finished = false) {
                let count = Array(radix);
                // 填充0
                for (let i = 0; (i < radix); i++) {
                    count[i] = 0;
                }
                // 统计每个桶中的计数
                this.title = this.i18n.bucketCounting + ":" + exp;
                for (let i = left; (i <= right); i++) {
                    let bucketIndex = this.radixGetDigit(arr[i], exp, radix);
                    count[bucketIndex]++;
                    await this.pushC({
                        stepMark: [i, left, right],
                        note: {left, right},
                        persistNote: {[bucketIndex]: i}
                        // persistMark: {[i]: this.randomColor(exp + bucketIndex)},
                    });
                }

                // 计算下标
                for (let i = 1; (i < radix); i++) {
                    count[i] += count[i - 1];
                }

                let originData = arr.slice(left, right + 1);
                this.title = this.i18n.bucketsToOriginArray
                // 将排序后的数组复制回原数组
                for (let i = originData.length - 1; (i >= 0); i--) {
                    let digit = this.radixGetDigit(originData[i], exp, radix);
                    let index = count[digit] - 1 + left;
                    await this.pushC({
                        update: {
                            [index]: originData[i]
                        },
                        persistNote: {[digit]: index},
                        // persistMark: {[i]: this.randomColor(exp + digit)},
                        finished: finished ? [index] : []
                    });
                    count[digit]--;
                }
                this.clearPersist();
                return count;
            }
            ,
            async cocktailSort(data) {//鸡尾酒排序
                let left = 0,
                    right = data.length - 1;
                while ((left < right)) {
                    for (let i = left; (i < right); i++) {
                        let update = {};
                        if ((data[i] > data[i + 1])) {
                            //交换数组中两个数字的位置
                            this.sortSwap(data, i, i + 1, update);
                        }
                        await this.pushC({
                            stepMark: [left, right, i, i + 1],
                            update, note: {
                                left, right
                            }
                        });
                    }
                    this.setFinished(right, true);
                    right--;
                    for (let i = right; (i > left); i--) {
                        let update = {};
                        if ((data[i] < data[i - 1])) {
                            //交换数组中两个数字的位置
                            this.sortSwap(data, i, i - 1, update);
                        }
                        await this.pushC({
                            stepMark: [left, right, i, i - 1],
                            update, note: {
                                left, right
                            }
                        });
                    }
                    this.setFinished(left, true);
                    left++;
                }
                return data;
            }
            ,
            async combSort(array) {//梳排序
                let gap = array.length;
                let swapped = true;
                while ((gap > 1) || (swapped)) {
                    if ((gap > 1)) {
                        gap = parseInt(gap / 1.3);
                    }
                    this.title = "Gap:" + gap;
                    let i = 0;
                    swapped = false;
                    while ((i + gap < array.length)) {
                        let update = {};
                        if ((array[i] > array[i + gap])) {
                            this.sortSwap(array, i, i + gap, update);
                            swapped = true;
                        }
                        await this.push([i + gap, i], update, !swapped && gap === 1 ? [i] : []);
                        i++;
                    }
                    if (!swapped && gap === 1) this.setFinished(i, true);
                }
                return array;
            }
            ,
            async gnomeSort(a) { //地精排序
                let length = a.length;
                let i = 0;
                this.setFinished(0, true);
                while ((i < length)) {
                    if ((i > 0) && (a[i - 1] > a[i])) {
                        this.title = '<-- ' + this.i18n.swap
                        //交换
                        let update = this.sortSwap(a, i, i - 1);
                        await this.push([], update);
                        i--;
                    } else {
                        this.title = '--> ' + this.i18n.move
                        await this.push([i], {}, [i]);
                        i++;
                    }
                }
            }
            ,
            async bucketSort(arr) { // 桶排序
                let bucketCount = this.sortConfig.bucketNumber.value; // 设置桶的默认数量为5
                let dg = async (start, end) => {
                    if (start >= end) {
                        return;
                    }
                    this.title = this.i18n.findMaxMinValue; // 寻找最大最小值
                    let minMaxIndex = await this.findMinMaxIndex(arr, true, true, start, end);
                    let minValue = arr[minMaxIndex[0]];
                    let maxValue = arr[minMaxIndex[1]];
                    if (minValue === maxValue) {
                        for (let i = start; i <= end; i++) {
                            this.setFinished(i);
                        }
                        return;
                    }
                    this.title = this.i18n.initBuckets;// 初始化桶
                    //桶的初始化
                    let bucketSize = Math.floor((maxValue - minValue) / bucketCount) + 1; // 计算每个桶的大小
                    let buckets = new Array(bucketCount);
                    for (let i = 0; (i < buckets.length); i++) {
                        buckets[i] = [];
                    }

                    this.title = this.i18n.allocateDataToBuckets; // 将数据分配到各个桶中
                    //利用映射函数将数据分配到各个桶中
                    for (let i = start; (i <= end); i++) {
                        let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
                        buckets[bucketIndex].push(arr[i]);
                        await this.pushC({stepMark: [i], persistNote: {[bucketIndex]: i}});
                    }

                    let index = start;
                    let bucketIndexes = [index];
                    for (let i = 0; (i < buckets.length); i++) {
                        this.title = this.i18n.bucketsToOriginArray + i; // 将桶中的数据保存到原数组
                        let bucket = buckets[i];
                        for (let j = 0; (j < bucket.length); j++) {
                            await this.pushC({
                                update: {
                                    [index]: bucket[j]
                                }, finished: bucket.length === 1 ? [index] : [],
                                persistNote: {[i]: index}
                            });
                            index++;
                        }
                        if (bucketIndexes[bucketIndexes.length - 1] !== index) {
                            bucketIndexes.push(index)
                        }
                    }
                    buckets = null; // 清除引用，方便垃圾回收
                    // 递归对桶数据继续排序
                    for (let i = 0; i < bucketIndexes.length - 1; i++) {
                        this.clearPersist();
                        await dg(bucketIndexes[i], bucketIndexes[i + 1] - 1)
                    }
                }
                await dg(0, arr.length - 1);
                return arr;
            }
            ,
            async bitonicSort(data) {
                let greatestPowerOfTwoLessThan = (n) => {
                    let k = 1;
                    while (k < n) k <<= 1;
                    return k >> 1;
                }
                let merge = async (left, right, dir) => {
                    if (right > 1) {
                        let m = greatestPowerOfTwoLessThan(right);
                        for (let i = left; i < left + right - m; i++) {
                            let update = {}
                            let j = i + m;
                            if (dir === (data[i] > data[j])) {
                                this.sortSwap(data, i, j, update);
                            }
                            await this.push([i], update);
                        }
                        await merge(left, m, dir);
                        await merge(left + m, right - m, dir);
                    }
                }
                let sort = async (left, right, dir) => {
                    if (right > 1) {
                        let m = Math.floor(right / 2);
                        await sort(left, m, !dir);
                        await sort(left + m, right - m, dir)
                        await merge(left, right, dir);
                    }
                }
                await sort(0, data.length, true);
            }
            ,
            async stoogeSort(data) { // 漂亮排序
                let dg = async (data, i, j) => {
                    await this.push([i, j]);
                    if ((data[i] > data[j])) {
                        let update = this.sortSwap(data, i, j);
                        await this.push([], update);
                    }
                    if ((j - i + 1 >= 3)) {
                        let t = parseInt((j - i + 1) / 3)
                        await this.push([]);
                        await dg(data, i, j - t)
                        await dg(data, i + t, j)
                        await dg(data, i, j - t)
                    }
                }
                await dg(data, 0, data.length - 1);
            },
            // 猴子排序
            async bogoSort(data) {
                while (!this.checkIsSorted(data)) {
                    let i = this.randomNumber();
                    let j;
                    do {
                        j = this.randomNumber();
                    } while ((i === j)); // 下标一样重新生成
                    let update = this.sortSwap(data, i, j);
                    await this.push([], update);
                }
            }

        },
        computed: {
            dataWidth: function () {
                return 100 / this.data.length + '%';
            }
            ,
            speed: {
                get: function () {
                    return Math.round(2000 / this.delayTime);
                }
                ,
                set: function (speed) {
                    if (speed < 1)
                        speed = 1;
                    if (speed > 100000)
                        speed = 100000;
                    this.delayTime = 2000 / speed;
                }
            }
            ,
            i18n() {
                let i18n = this.i18nAll[this.language];
                document.title = i18n.title;
                return i18n;
            }
            ,
            selectSort() {
                return this.allSort[this.selectSortType];
            }
        }
        ,
        watch: {
            data(val, oldVal) {
                this.redrawSortDiv();
            }
            ,
            originData(val) {
                this.lastSortType = null;
                this.clearDataStyle();
                this.data = val.slice();
            }
            ,
            defaultDataNumber(val) {
                if (val < 1)
                    this.defaultDataNumber = "";
                if (val > 1000)
                    this.defaultDataNumber = 1000;
                this.speed = val;
                this.stop();
                this.originData = this.generateData();
            }
            ,
            dataGenerateType() {
                this.stop();
                this.originData = this.generateData();
            }
            ,
            selectSortType(val) {
                this.sortConfig = this.allSort[val].config;
                this.stop();
            }
            ,
            sound(val) {
                if (!val) {
                    this.stopBeep();
                }
            },
            horizon() {
                this.redrawSortDiv();
            }
        }
        ,
        mounted() {
            this.originData = this.generateData();
            this.data = this.originData.slice();
            this.selectSortType = Object.keys(this.allSort)[0];
            Object.values(this.allSort).forEach(sort => {
                if (!sort.config) return;
                Object.values(sort.config).forEach(config => {
                    config.defaultValue = config.value;
                })
            })
            Set.prototype.addAll = function (elements) {
                elements.forEach(element => this.add(element));
                return this;
            }

            // setTimeout( async ()=>{
            //     for (let i = 0; i < 50; i++) {
            //         this.playBeep(i);
            //         await new Promise((resolve)=>{
            //             setTimeout(resolve, 50);
            //         })
            //     }
            // }, 2000)
        }
    })
;
