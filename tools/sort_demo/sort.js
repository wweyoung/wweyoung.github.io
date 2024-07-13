let vm = new Vue({
    el: "#app",
    data: {
        data: [],
        originData: [],
        sortedData: [],
        dataGenerateType:'random',
        defaultDataNumber: 50,
        delayTime: 50,
        playStep: 0,
        sound: true,
        selectSortType: null,
        lastSortType: null,
        allSortType: {
            quickSort:{
                name: "快速排序",
                desc:"快速排序(Quick Sort)是对冒泡排序的一种改进，采用分治法，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列",
                timeCom:"O(nlog₂n)",
                spaceCom:"O(nlog₂n)",
                stable:false
            },
            mergeSort:{
                name: "归并排序",
                desc:"归并排序(Merge Sort)是建立在归并操作上的一种有效的排序算法。采用分治法，将n个元素从中间切开，分成两部分，分别进行递归分解，直到所有部分的元素个数都为1，从最底层开始逐步合并两个排好序的数列",
                timeCom:"O(nlog₂n)",
                spaceCom:"O(n)",
                stable:true
            },
            bubbleSort: {
                name:"冒泡排序",
                desc:"冒泡排序(Bubble Sort)最基础的交换排序，之所以叫做冒泡排序，因为每一个元素都可以像小气泡一样，根据自身大小一点一点向数组的一侧移动",
                timeCom:"O(n²)",
                spaceCom:"O(1)",
                stable: true
            },
            selectionSort: {
                name:"选择排序",
                desc:"选择排序(Selection Sort)选择排序是一种简单直观的排序算法，它的工作原理是每一次从待排序的数据元素中选出最小（最大）的一个元素，存放在序列的起始位置",
                timeCom:"O(n²)",
                spaceCom:"O(1)",
                stable:false
            },
            insertionSort:{
                name: "直接插入排序",
                desc:"直接插入排序(Straight Insertion Sort)每一步将一个待排序的数据插入到前面已经排好序的有序序列中，直到插完所有元素为止",
                timeCom:"O(n²)",
                spaceCom:"O(1)",
                stable:true
            },
            shellSort:{
                name: "希尔排序",
                desc:"希尔排序(Shell Sort)是对直接插入排序的一种改进，将待排序的数组元素按下标的一定增量分组，分成多个子序列，然后对各个子序列进行直接插入排序算法排序；然后依次缩减增量再进行排序，直到增量为1时，进行最后一次直接插入排序，排序结束",
                timeCom:"O(n¹·³)",
                spaceCom:"O(1)",
                stable:false
            },
            heapSort:{
                name: "堆排序",
                desc:"堆排序(Heap Sort)是指利用堆这种数据结构所设计的一种排序算法，堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点，移除位在第一个数据的根节点，并做最大堆调整的递归运算，如此往复，最终得到一个递增序列",
                timeCom:"O(nlog₂n)",
                spaceCom:"O(1)",
                stable:false
            },
            countingSort:{
                name: "计数排序",
                desc:"计数排序(Counting Sort)是一个非基于比较的排序算法，是一种牺牲内存空间来换取低时间复杂度的排序算法，优势在于在对一定范围内的整数排序时，快于任何比较排序算法",
                timeCom:"O(n+k)",
                spaceCom:"O(n+k)",
                stable:true
            },
            radixSort:{
                name: "基数排序",
                desc:"基数排序(Radix Sort)是一种非比较型整数排序算法，原理是将整数按位数切割成不同的数字，然后按每个位数分别比较，这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列",
                timeCom:"",
                spaceCom:"",
                stable:true
            },
            cocktailSort:{
                name: "鸡尾酒排序",
                desc:"鸡尾酒排序(Cock Tail Sort)是对冒泡排序的一种改进，冒泡排序的的元素比较和交换过程是单向的，而鸡尾酒排序的元素比较和交换过程是双向的",
                timeCom:"O(n²)",
                spaceCom:"O(1)",
                stable:true
            },
            combSort:{
                name: "梳排序",
                desc:"梳排序(Comb Sort)是对冒泡排序、快速排序的一种改进，类似于希尔排序，将相距某个增量的记录组成一个子序列，通过冒泡排序使得这个子序列基本有序，然后减少增量继续排序",
                timeCom:"O(nlog₂n)",
                spaceCom:"O(1)",
                stable:false
            },
            gnomeSort:{
                name: "地精排序",
                desc:"地精排序(Gnome Sort)类似于插入排序，在发现反序对时，把它往回按，直到排好序，再向前继续走，只需要一重循环",
                timeCom:"O(n²)",
                spaceCom:"O(1)",
                stable:true
            },
            bucketSort:{
                name: "桶排序",
                desc:"桶排序(Bucket Sort)是计数排序的升级版，采用分治法，思想是我们首先需要知道所有待排序元素的范围，然后需要有在这个范围内的同样数量的桶，接着把元素放到对应的桶中，最后按顺序输出",
                timeCom:"O(n+k)",
                spaceCom:"O(n+k)",
                stable:true
            },
            stoogeSort:{
                name: "漂亮排序",
                desc:"漂亮排序(Stooge Sort)排序是一种低效的递归排序算法，甚至慢于冒泡排序，整个排序算法没有任何循环语句。如果最后一个值小于第一个值，则交换它们；如果当前子集元素数量大于等于3：使用Stooge排序前2/3的元素，使用Stooge排序后2/3的元素，再次使用Stooge排序前2/3的元素",
                timeCom:"O(n²·⁷)",
                spaceCom:"",
                stable:false
            },
            bogoSort:{
                name: "猴子排序",
                desc:"一只猴子随机敲击键盘,只要时间足够久,一定能敲出莎士比亚的诗",
                timeCom:"O(?)",
                spaceCom:"O(1)",
                stable:false
            }
        },
        compareTimes: 0,
        currentTarget: [],
        currentUpdated: {},
        startTime: null,
        endTime: null,
        state: "空闲",
        tip: null,
        oscillatorNode: undefined,
        gainNode: undefined,
        title: undefined,
        promise: {
            resolve: undefined,
            reject: undefined
        }
    },
    methods: {
        // 生成随机数据
        generateData() {
            let arr;
            if(this.dataGenerateType =='fullRandom'){
                arr = Array.from({length: this.defaultDataNumber}, (v, k) => Math.ceil(Math.random()*this.defaultDataNumber));
            }else{
                arr = Array.from({length: this.defaultDataNumber}, (v, k) => k + 1);
                if(this.dataGenerateType=='reverse'){
                    arr.sort((v1,v2)=> v2 - v1);
                } else {
                    arr.sort(() => 0.5 - Math.random());
                }
            }
            this.sortedData = arr.slice().sort((v1, v2)=> v1 - v2);
            return arr;
        },
        // 添加演示步骤 target: 比较集合，update：更新集合
        async push(target = [], update = {}) {
            this.currentUpdated = update;
            this.currentTarget = target;
            this.playStep++;
            this.endTime = Date.now();
            let updateValues = Object.values(this.currentUpdated);
            if(updateValues.length > 0) {
                let updateValuesSum = updateValues[0];
                for (let i = 1; i < updateValues.length; i++) {
                    updateValuesSum += updateValues[i];
                }
                this.playBeep(updateValuesSum / updateValues.length);
            } else {
                this.stopBeep();
            }
            await new Promise((resolve, reject)=>{
                this.promise.resolve = resolve;
                this.promise.reject = reject;
                setTimeout(()=>{
                    if (this.state === '排序中') {
                        resolve();
                    }
                }, this.delayTime);
            });

        },
        // 比较并记录比较次数
        compare(result) {
            this.compareTimes++;
            return result;
        },
        async start(name = this.selectSortType) {
            if (name != this.lastSortType) {
                this.lastSortType = name;
                this.stop();
                this.state = "排序中";
                this.startTime = this.endTime = Date.now();
                let sortFunction = this[name];
                if(sortFunction){
                    this.data = this.originData.slice()
                    await sortFunction(this.data);
                    this.end();
                } else {
                    alert("排序方法不存在！");
                }
                this.state = "空闲";
            }
        },
        // 手动停止调用
        stop() {
            this.end();
            this.playStep = 0; 
            this.startTime = this.endTime = 0;
            this.lastSortType = null;
            this.compareTimes = 0;
            this.setValueTimes = 0;
            this.clearDataStyle();
            this.data = this.originData;
        },
        pause(){
            this.state = "已暂停";
            this.stopBeep();
        },
        play(){
            this.state = "排序中";
            this.promise.resolve();
        },
        // 排序完成调用
        end() {
            if(this.promise.reject){
                this.promise.reject('end');
            }
            this.stopBeep();
            this.currentTarget = [];
            this.currentUpdated = {};
            this.state = "空闲";
            this.title = undefined;
        },
        clearDataStyle() {
            this.currentTarget = []
            this.currentUpdated = {}
            var nodes = this.$refs.sort.childNodes;
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].style.backgroundColor = null;
            }
        },
        getDataStyle(item, i){
            let style = {
                height:item/this.data.length*100+'%',
                width:this.dataWidth
            };
            if(this.currentUpdated[i]){
                style.backgroundColor = 'red';
            } else if(this.currentTarget.includes(i)){
                style.backgroundColor = 'blue';
            } else if(item === this.sortedData[i]){
                style.backgroundColor = 'green';
            }
            return style;
        },
        getInputStep (val) {
            var step = 1;
            while (val > 20) {
                val /= 10;
                step *= 10
            }
            return step;
        },
        initBeap(){
            // The browser will limit the number of concurrent audio contexts
            // So be sure to re-use them whenever you can
            const myAudioContext = new AudioContext();
            let oscillatorNode = myAudioContext.createOscillator();
            let gainNode = myAudioContext.createGain();
            
            // oscillatorNode.detune.value=10
            // Set the type of oscillator
            oscillatorNode.detune.value = 1000;
            oscillatorNode.type= "square";
            gainNode.connect(myAudioContext.destination);

            // Set the gain to the volume
            gainNode.gain.value = 1;
            this.oscillatorNode = oscillatorNode;
            this.gainNode = gainNode;
        },
        playBeep(val) {
            if (this.sound) {
                let frequency = 20 + 3 * val*(100/this.defaultDataNumber);
                let isInit;
                if(!(isInit = this.oscillatorNode)){
                    this.initBeap();
                }
                this.oscillatorNode.frequency.value = frequency;
                this.oscillatorNode.connect(this.gainNode);
                if(!isInit){
                    this.oscillatorNode.start();
                }
            }
        },
        stopBeep(){
            if(this.oscillatorNode){
                this.oscillatorNode.disconnect();
                // this.oscillatorNode = null;
            }
        },
        checkIsSorted(data){
            for (let i = 0; this.compare(i < data.length - 1); i++) {
                if(this.compare(data[i] > data[i + 1])){
                    return false;
                }
            }
            return true;
        },
        sortSwap(data, i, j, update){
            let temp = data[i];
            update[i] = data[i] = data[j];
            update[j] = data[j] = temp;
        },
        // 冒泡排序
        async bubbleSort(data) {
            for (var i = 0; this.compare(i < data.length); i++) {
                for (var j = 0; this.compare(j < data.length - i - 1); j++) {
                    var update = {};
                    if (this.compare(data[j] > data[j + 1])) {
                        this.sortSwap(data, j, j+1, update);
                    }
                    await this.push([j, j + 1], update);
                }
            }
            return data;
        },
        async selectionSort(data) {
            for (var i = 0; this.compare(i < data.length); i++) {
                for (var j = i + 1; this.compare(j < data.length); j++) {
                    var update = {};
                    if (this.compare(data[i] > data[j])) {
                        this.sortSwap(data, i, j, update);
                    }
                    await this.push([i, j], update);
                }
            }
            return data;
        },
        async insertionSort(data, push = true) {
            for (var i = 1; this.compare(i < data.length); i++) {
                var temp = data[i];
                var j = i;
                push && await this.push([j]);
                for (; this.compare(j > 0); j--) {
                    if (this.compare(temp >= data[j - 1])) {
                        break; // 当前考察的数大于前一个数，证明有序，退出循环
                    }
                    push && await this.push([j - 1], {
                        [j]: data[j - 1]
                    });
                    data[j] = data[j - 1]; // 将前一个数复制到后一个数上
                }
                push && await this.push([], {
                    [j]: temp
                });
                data[j] = temp; // 找到考察的数应处于的位置
            }
            return data;
        },
        async quickSort(data) {
            let dg = async (data, i, j, title) => {
                if (this.compare(i < j)) {
                    this.title = title;
                    var left = i;
                    var right = j;
                    var mid = Math.floor((left + right) / 2);
                    var update = {};
                    this.sortSwap(data, left, mid, update);
                    await this.push([left, right, i, j], update);
                    var pivot = data[left];
                    while (this.compare(i < j)) {
                        while (this.compare(data[j] >= pivot) && this.compare(i < j)) { // 从后往前找比基准小的数
                            j--;
                        }
                        await this.push([i, j, left, right]);
                        if (this.compare(i < j)) {
                            await this.push([i, j, left, right], {
                                [i]: data[j]
                            });
                            data[i++] = data[j];
                        }
                        while (this.compare(data[i] <= pivot) && this.compare(i < j)) { // 从前往后找比基准大的数
                            i++;
                            await this.push([i, left, j, right]);
                        }
                        if (this.compare(i < j)) {
                            await this.push([left, right, i, j], {
                                [j]: data[i]
                            });
                            data[j--] = data[i];
                        }
                    }
                    await this.push([left, right, i], {
                        [i]: pivot
                    });
                    data[i] = pivot;
                    await dg(data, left, i - 1, title+'左');
                    await dg(data, i + 1, right, title+'右');
                    return data;
                }
            };
            await dg(data, 0, data.length - 1, '排序');
        },
        async shellSort(data) {
            var len = data.length,
                temp,
                gap = 1;
            // 动态定义间隔序列，也可以手动定义，如 gap = 5；
            while (this.compare(gap < len / 5)) {
                gap = gap * 5 + 1;
            }
            for (gap; this.compare(gap > 0); gap = Math.floor(gap / 5)) {
                for (var i = gap; this.compare(i < len); i++) {
                    temp = data[i];
                    await this.push([i]);
                    for (var j = i - gap; this.compare(j >= 0) && this.compare(data[j] > temp); j -= gap) {
                        await this.push([j, i], {
                            [j + gap]: data[j]
                        })
                        data[j + gap] = data[j];
                    }
                    await this.push([i], {
                        [j + gap]: temp
                    })
                    data[j + gap] = temp;
                }
            }
            return data;
        },
        // 归并排序
        async mergeSort(data) {
            var v = this;
            async function sort(data, left, right, temp, title) {
                if (v.compare(left < right)) {
                    v.title = title;
                    var mid = parseInt((left + right) / 2);
                    await sort(data, left, mid, temp, title+'左'); //左边归并排序，使得左子序列有序
                    await sort(data, mid + 1, right, temp, title+'右'); //右边归并排序，使得右子序列有序
                    v.title = title+'归并';
                    await merge(data, left, mid, right, temp); //将两个有序子数组合并操作
                }
            }

            async function merge(arr, left, mid, right, temp) {
                var i = left; //左序列指针
                var j = mid + 1; //右序列指针
                var t = 0; //临时数组指针
                while (v.compare(i <= mid) && v.compare(j <= right)) {
                    if (v.compare(arr[i] <= arr[j])) {
                        temp[t++] = arr[i++];
                    } else {
                        temp[t++] = arr[j++];
                    }
                }
                while (v.compare(i <= mid)) { //将左边剩余元素填充进temp中
                    temp[t++] = arr[i++];
                }
                while (v.compare(j <= right)) { //将右序列剩余元素填充进temp中
                    temp[t++] = arr[j++];
                }
                t = 0;
                //将temp中的元素全部拷贝到原数组中
                var oLeft = left;
                var target = [];
                while (left <= right) {
                    target.push(left++);
                }
                left = oLeft;
                while (v.compare(left <= right)) {
                    await v.push(target, {
                        [left]: temp[t]
                    });
                    arr[left++] = temp[t++];
                }
            }
            await sort(data, 0, data.length - 1, new Array(data.length), '');
        },
        async heapSort(data) {//堆排序
            let len; // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量
            let buildMaxHeap = async (arr)=> { // 建立大顶堆
                len = arr.length;
                for (let i = Math.floor(len / 2); this.compare(i >= 0); i--) {
                    await heapify(arr, i);
                }
            }

            let heapify = async (arr, i) => { // 堆调整
                var left = 2 * i + 1,
                    right = 2 * i + 2,
                    largest = i;
                if (this.compare(left < len) && this.compare(arr[left] > arr[largest])) {
                    largest = left;
                }

                if (this.compare(right < len) && this.compare(arr[right] > arr[largest])) {
                    largest = right;
                }

                if (this.compare(largest != i)) {
                    let update = {};
                    this.sortSwap(arr, i, largest, update);
                    await this.push([], update);
                    await heapify(arr, largest);
                }
                else {
                    await this.push([i, largest]);
                }
            }
            this.title = '建立大顶堆';
            await buildMaxHeap(data);
            this.title = '排序';
            for (let i = data.length - 1; this.compare(i > 0); i--) {
                let update = {};
                this.sortSwap(data, 0, i, update);
                await this.push([], update);
                len--;
                await heapify(data, 0);
            }
            return data;
        },
        async countingSort(arr) {//计数排序
            var maxValue = arr[0];
            for (var i = 1; this.compare(i < arr.length); i++) {
                if (this.compare(arr[i] > maxValue))
                    maxValue = arr[i];
            }
            var bucket = new Array(maxValue + 1),
                sortedIndex = 0,
                arrLen = arr.length,
                bucketLen = maxValue + 1;

            for (var i = 0; this.compare(i < arrLen); i++) {
                await this.push([i]);
                if (this.compare(!bucket[arr[i]])) {
                    bucket[arr[i]] = 0;
                }
                bucket[arr[i]]++;
            }

            for (var j = 0; this.compare(j < bucketLen); j++) {
                while (this.compare(bucket[j] > 0)) {
                    await this.push([], {
                        [sortedIndex]: j
                    })
                    arr[sortedIndex++] = j;
                    bucket[j]--;
                }
            }

            return arr;
        },
		async radixSort(arr) {//基数排序
			// 获得每位的数字
			function getDigit(x, d) {
				var a = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000];
				return (Math.floor(x / a[d]) % 10);
			}
			var maxValue = arr[0];
			for (var i = 1; this.compare(i < arr.length); i++) {
				if (this.compare(arr[i] > maxValue))
					maxValue = arr[i];
			}
			var digit = 1;
			while (this.compare(maxValue >= 10)) { //求最大数的位数
				maxValue /= 10;
				digit++;
			}
			const radix = 10; // 基数,以10进制来进行排序
			var i = 0,
				j = 0,
				count = Array(radix), // 0~9的桶
				len = arr.length;
			// 利用LSD,也就是次位优先
			for (var d = 0; this.compare(d < digit); d++) {
                let originArr = arr.slice();
				for (i = 0; this.compare(i < radix); i++) {
					count[i] = 0;
				}
				// 向各个桶中添加元素,并统计出每个桶中装的个数
				for (i = 0; this.compare(i < len); i++) {
					j = getDigit(arr[i], d);
					count[j]++;
				}
				// count的越往后值最大,最大值为arr.length
				// count数组的值为,该位数值为该索引的数字总数
				for (i = 1; this.compare(i < radix); i++) {
					count[i] = count[i] + count[i - 1];
				}
				// 按照桶的顺序将导入temp中
				for (i = len - 1; this.compare(i >= 0); i--) {
					j = getDigit(originArr[i], d);
					await this.push([], {
						[count[j] - 1]: originArr[i]
					});
					arr[count[j] - 1] = originArr[i];
					count[j]--;
				}
			}
			return arr;
		},
        async cocktailSort(data) {//鸡尾酒排序
            var m = 0,
                n = data.length - 1;
            while (this.compare(m < n)) {
                for (var i = m; this.compare(i < n); i++) {
                    if (this.compare(data[i] > data[i + 1])) {
                        var update = {};
                        //交换数组中两个数字的位置
                        this.sortSwap(data, i, i+1, update);
                        await this.push([m, n], update);
                    }
                }
                n--;
                for (var i = n; this.compare(i > m); i--) {
                    if (this.compare(data[i] < data[i - 1])) {
                        var update = {};
                        //交换数组中两个数字的位置
                        this.sortSwap(data, i, i-1, update);
                        await this.push([m, n], update);
                    }
                }
                m++;
            }
            return data;
        },
        async combSort(array) {//梳排序
            var gap = array.length;
            var swapped = true;
            while (this.compare(gap > 1) || this.compare(swapped)) {
                if (this.compare(gap > 1)) {
                    gap = parseInt(gap / 1.3);
                }
                var i = 0;
                swapped = false;
                while (this.compare(i + gap < array.length)) {
                    var update = {};
                    if (this.compare(array[i] > array[i + gap])) {
                        this.sortSwap(array, i, i+gap, update);
                        swapped = true;
                    }
                    await this.push([i + gap, i], update);
                    i++;
                }
            }
            return array;
        },
        async gnomeSort(a) { //地精排序
            var length = a.length;
            var i = 0;
            while (this.compare(i < length)) {
                var update = {};
                var target = [];
                if (this.compare(i > 0) && this.compare(a[i - 1] > a[i])) {
                    this.title = '<-左交换'
                    //交换
                    this.sortSwap(a, i, i-1, update);
                    i--;
                } else {
                    this.title = '右移动->'
                    await target.push(i);
                    i++;
                }
                await this.push(target, update);
            }
        },
        async bucketSort(arr, bucketSize=5) { // 桶排序
            if (this.compare(arr.length === 0)) {
              return arr;
            }
            var i;
            var minValue = arr[0];
            var maxValue = arr[0];
            for (i = 1;this.compare(i < arr.length); i++) {
                await this.push([i]);
                if (this.compare(arr[i] < minValue)) {
                    minValue = arr[i];                // 输入数据的最小值
                } else if (this.compare(arr[i] > maxValue)) {
                    maxValue = arr[i];                // 输入数据的最大值
                }
            }
        
            //桶的初始化
            var DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
            bucketSize = this.compare(bucketSize || DEFAULT_BUCKET_SIZE);
            var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;  
            var buckets = new Array(bucketCount);
            for (i = 0; this.compare(i < buckets.length); i++) {
                buckets[i] = [];
            }
        
            //利用映射函数将数据分配到各个桶中
            for (i = 0;this.compare( i < arr.length); i++) {
                await this.push([i]);
                buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
            }
        
            arr.length = 0;
            for (i = 0;this.compare( i < buckets.length); i++) {
                await this.insertionSort(buckets[i], false);     // 对每个桶进行排序，这里使用了插入排序
                for (var j = 0; this.compare(j < buckets[i].length); j++) {
                    await this.push([], {[arr.length]: buckets[i][j]});
                    arr.push(buckets[i][j]);                      
                }
            }
            return arr;
        },
        async stoogeSort(data){ // 漂亮排序
            let dg = async (data, i, j)=>{
                await this.push([i, j]);
                if (this.compare(data[i] > data[j])){
                    let update = {}
                    this.sortSwap(data, i, j, update);
                    await this.push([], update);
                }
                if (this.compare(j - i + 1 >= 3)){ 
                    let t = parseInt((j - i + 1) / 3)
                    await this.push([]);
                    await dg(data, i  , j-t) 
                    await dg(data, i+t, j  ) 
                    await dg(data, i  , j-t) 
                }
            }
            await dg(data, 0, data.length - 1);
        },
        // 猴子排序
        async bogoSort(data){
            while(!this.checkIsSorted(data)){
                let i = Math.floor(Math.random() * data.length);
                let j;
                do {
                    j = Math.floor(Math.random() * data.length);
                } while(this.compare(i === j)); // 下标一样重新生成
                let update = {}
                this.sortSwap(data, i, j, update);
                await this.push([], update);
            }
        }
        
    },
    computed: {
        dataWidth: function () {
            return 100 / this.data.length + '%';
        },
        speed: {
            get: function () {
                return Math.round(2000 / this.delayTime);
            },
            set: function (speed) {
                if (speed < 1)
                    speed = 1;
                this.delayTime = 2000 / speed;
            }
        },
        spendTime: function () {
            if (!this.startTime || !this.endTime)
                return 0;
            return (this.endTime - this.startTime)/1000;
        }
    },
    watch: {
        originData (val) {
            this.lastSortType = null;
            this.clearDataStyle();
            this.data = val.slice();
        },
        // data:{
        //     handler(newVal, oldVal){
        //         console.log(newVal, oldVal, newVal == oldVal)
        //     },
        //     deep: true
        // },
        defaultDataNumber (val) {
            if (val < 1)
                this.defaultDataNumber = 1;
            if (val > 1000)
                this.defaultDataNumber = 1000;
            this.tip = val >= 500 ? "数据量大，可能会造成卡顿。" : null;
            this.stop();
            this.originData = this.generateData();
        },
        dataGenerateType(){
            this.stop();
            this.originData = this.generateData();
        },
        selectSortType(){
            this.stop();
        },
        sound(val){
            if(!val){
                this.stopBeep();
            }
        }
    },
    mounted() {
        this.originData = this.generateData();
        this.data = this.originData.slice();
        this.selectSortType = Object.keys(this.allSortType)[0];
        // setTimeout( async ()=>{
        //     for (let i = 0; i < 50; i++) {
        //         this.playBeep(i);
        //         await new Promise((resolve)=>{
        //             setTimeout(resolve, 50);
        //         })
        //     }
        // }, 2000)
    }
});
