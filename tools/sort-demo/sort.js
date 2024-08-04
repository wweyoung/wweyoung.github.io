{
    let quickSortConfig = {
        PivotRule: {
            type: 'select',
            value: 'middle',
            options: {
                'first': 'First Item',
                'last': 'Last Item',
                'middle': 'Middle Item',
                'median3': 'Median of Three',
                'random': 'Random Item'
            },
            required: true
        }
    }
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
                quickSortLR: {
                    name: "快速排序(左右指针)",
                    nameEn: "Quick Sort(LR ptrs)",
                    desc: "快速排序(Quick Sort)是对冒泡排序的一种改进，采用分治法，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列；",
                    timeCom: "O(nlog₂n)",
                    spaceCom: "O(nlog₂n)",
                    stable: false,
                    config: quickSortConfig
                },
                quickSortLL: {
                    name: "快速排序(左左指针)",
                    nameEn: "Quick Sort(LL ptrs)",
                    desc: "快速排序(Quick Sort)是对冒泡排序的一种改进，采用分治法，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列",
                    timeCom: "O(nlog₂n)",
                    spaceCom: "O(nlog₂n)",
                    stable: false,
                    config: quickSortConfig
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
                            value: 5,
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
                oddEvenSort: {
                    name: "奇偶排序",
                    nameEn: "Odd-Even Sort",
                },
                smoothSort: {
                    name: "平滑排序",
                    nameEn: "Smooth Sort",
                },
                cycleSort: {
                    name: "圈排序",
                    nameEn: "Cycle Sort",
                },
                slowSort: {
                    name: "慢排序",
                    nameEn: "Slow Sort",
                },
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
                    nameEn: "Bogo Sort",
                    desc: "一只猴子随机敲击键盘,只要时间足够久,一定能敲出莎士比亚的诗",
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
            delayTimeAmend: [1, 0.9, 0.3, 0.25], // delay时间修正倍率
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
                    if (value === undefined || value === null) return;
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
                    stepMark = stepMark.filter(a => Number.isInteger(a)).map(Number);
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
                    let indexes = Object.values(persistNote).map(Number);
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
                let childNodes = this.$refs.sort?.childNodes;
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
                if (persistNote && persistNote[i]) notes.push(...persistNote[i]);
                if (note && note[i]) notes.push(...note[i]);
                let title = "Value: " + this.data[i] + "\nIndex: " + i;
                if (notes.length) {
                    let noteText = notes.join(" , ");
                    if (sortDom.style.fontSize) {
                        node.innerText = noteText;
                    } else {
                        node.innerText = '';
                    }
                    title += "\n" + noteText;
                } else {
                    node.innerText = '';
                }
                node.title = title;
                return style;
            }
            ,
            refreshChangeDataStyle() {
                this.changeIndexes.forEach(index => this.refreshDataStyle(index));
                this.changeIndexes.clear();
            },
            getInputStep(val) {
                let step = 1;
                while (val >= 20) {
                    val /= 10;
                    step *= 10
                }
                return step;
            },
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
                gainNode.gain.value = 0.2;
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
                let red = (index * 80) % 170;
                let green = Math.floor(index / 2) * 43 % 140;
                let blue = 230 - (Math.floor(index / 3) * 47 % 170);
                this.randomColorIndex++;
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
            },
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
            },
            // 冒泡排序
            async bubbleSort(data) {
                for (let i = 0; (i < data.length); i++) {
                    for (let j = 0; (j < data.length - i - 1); j++) {
                        let update = {};
                        if ((data[j] > data[j + 1])) {
                            this.sortSwap(data, j, j + 1, update);
                        }
                        await this.push({'': j, max: j + 1}, update);
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
                    this.title = this.i18n.swap;
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
            },
            // some quicksort variants use hi inclusive and some exclusive, we require it
            quickSortSelectPivot(A, left, right) {
                let pivotSelect = this.selectSort.config.PivotRule.value;
                if (pivotSelect === 'first') return left;
                if (pivotSelect === 'last') return right;
                if (pivotSelect === 'random') return this.randomNumber(right, left);
                let middle = Math.floor((left + right) / 2);
                if (pivotSelect === 'middle') return middle;
                if (pivotSelect === 'median3') {
                    // cases if two are equal
                    if (A[left] === A[middle]) return left;
                    if (A[left] === A[right] || A[middle] === A[right]) return right;

                    // cases if three are different
                    return A[left] < A[middle]
                        ? (A[middle] < A[right] ? middle : (A[left] < A[right] ? right : left))
                        : (A[middle] > A[right] ? middle : (A[left] < A[right] ? left : right));
                }
                return left;
            },
            // ****************************************************************************
            // *** Quick Sort LR (in-place, pointers at left and right, pivot is middle element)
            // by Timo Bingmann, based on Hoare's original code
            async quickSortLR(A, left = 0, right = A.length - 1) {
                if (left >= right) {
                    if (left >= 0 && left < A.length) {
                        this.pushC({finished: [left]})
                    }
                    return;
                }

                // pick pivot and watch
                let pivot = this.quickSortSelectPivot(A, left, right);
                let i = left, j = right;
                while (i <= j) {
                    while (A[i] < A[pivot]) {
                        i++;
                        await this.push({left, right, pivot, i, j})
                    }

                    while (A[j] > A[pivot]) {
                        j--;
                        await this.push({left, right, pivot, i, j})
                    }

                    let update;
                    if (i <= j) {
                        update = this.sortSwap(A, i, j);
                        let finished = [];
                        // follow pivot if it is swapped
                        if (pivot === i) pivot = j;
                        else if (pivot === j) pivot = i;
                        if (A[pivot] === A[i] && A[pivot] === A[j]) finished.push(pivot)
                        await this.push({left, right, pivot, i, j}, update, finished)
                        i++;
                        j--;
                        if (i === right) finished.push(right);
                    } else {
                        await this.push({left, right, pivot, i, j})
                    }
                }
                await this.quickSortLR(A, left, j);
                await this.quickSortLR(A, i, right);
            },
            async quickSortLL(A, left = 0, right = A.length - 1) {
                if (left < right) {
                    // pick pivot and move to back
                    let pivot = this.quickSortSelectPivot(A, left, right);
                    await this.push({left, right, pivot});
                    let update = this.sortSwap(A, pivot, right);
                    pivot = right;
                    let i = left;
                    await this.push({left, right, pivot, i}, update);
                    for (let j = left; j < right; ++j) {
                        let update;
                        let stepNoteMark = {left, right, pivot, i, j};
                        if (A[j] < A[pivot]) {
                            update = this.sortSwap(A, i, j);
                            ++i;
                        }
                        await this.push(stepNoteMark, update);
                    }
                    update = this.sortSwap(A, i, right);
                    let mid = i;
                    await this.push({left, right, pivot, i, mid}, update, [mid]);
                    await this.quickSortLL(A, left, mid - 1);
                    await this.quickSortLL(A, mid + 1, right);
                } else if (left < A.length) {
                    this.pushC({
                        finished: [left],
                    })
                }
            },
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
                let heapify = async (node) => { // 堆调整
                    this.title = this.i18n.heapAdjust;
                    let left = 2 * node + 1,
                        right = 2 * node + 2,
                        largest = node;
                    if (left < len) {
                        if (data[left] > data[largest]) {
                            largest = left;
                        }
                    } else {
                        left = null;
                    }

                    if (right < len) {
                        if (data[right] > data[largest]) {
                            largest = right;
                        }
                    } else {
                        right = null;
                    }
                    await this.push({node, left, right, largest});
                    if ((largest !== node)) {
                        let update = this.sortSwap(data, node, largest);
                        await this.push({node, largest}, update);
                        await heapify(largest);
                    }
                }
                for (let i = 0; i < data.length; i++) {
                    let level = Math.floor(Math.log2(i + 1)) + 1;
                    console.log(i)
                    this.pushC({
                        persistMark: {
                            [i]: this.randomColor(level),
                        },
                        persistNote: {
                            [i + 1]: i
                        }
                    })
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
            },
            // from http://en.wikipediA.org/wiki/Odd%E2%80%93even_sort
            async oddEvenSort(data) {
                let sorted = false;
                let titleOE = [this.i18n.evenNumber, this.i18n.oddNumber];
                while (!sorted) {
                    sorted = true;
                    for (let oe = 0; oe <= 1; oe++) { // oe [0, 1]
                        this.title = titleOE[oe];
                        for (let i = oe; i < data.length - 1; i += 2) {
                            let update;
                            if (data[i] > data[i + 1]) {
                                update = this.sortSwap(data, i, i + 1);
                                sorted = false;
                            }
                            await this.pushC({
                                stepMark: [i, i + 1], update,
                                note: {i},
                                persistMark: {
                                    [i]: this.randomColor(oe),
                                },
                                persistNote: {[i]: i}
                            })
                        }
                        this.clearPersist();
                    }
                }
            },
            async smoothSort(A) {
                const LP = [
                    1, 1, 3, 5, 9, 15, 25, 41, 67, 109,
                    177, 287, 465, 753, 1219, 1973, 3193, 5167, 8361, 13529, 21891,
                    35421, 57313, 92735, 150049, 242785, 392835, 635621, 1028457,
                    1664079, 2692537, 4356617, 7049155, 11405773, 18454929, 29860703,
                    48315633, 78176337, 126491971, 204668309, 331160281, 535828591,
                    866988873 // the next number is > 31 bits.
                ];
                const sift = async (A, pshift, head) => {
                    // we do not use Floyd's improvements to the heapsort sift, because we
                    // are not doing what heapsort does - always moving nodes from near
                    // the bottom of the tree to the root.

                    let val = A[head];

                    while (pshift > 1) {
                        let rt = head - 1;
                        let lf = head - 1 - LP[pshift - 2];

                        if (val >= A[lf] && val >= A[rt]) {
                            await this.push({lf, rt, head})
                            break;
                        }
                        if (A[lf] >= A[rt]) {
                            // A[head] = A[lf];
                            await this.push({'*lf': lf, rt, head}, {
                                [head]: A[lf]
                            })
                            head = lf;
                            pshift -= 1;
                        } else {
                            // A[head] = A[rt];
                            await this.push({lf, '*rt': rt, head}, {
                                [head]: A[rt]
                            })
                            head = rt;
                            pshift -= 2;
                        }

                    }

                    // A[head] = val;
                    await this.push({head}, {
                        [head]: val
                    })
                }
                const __builtin_ctz = (num) => {
                    if (!num) return 32;
                    let result = 0;
                    while (num && (num & 1) === 0) {
                        result++;
                        num >>= 1;
                    }
                    return result;
                }
                const trinkle = async (A, p, pshift, head, isTrusty) => {
                    let val = A[head];
                    while (p !== 1) {
                        let stepson = head - LP[pshift];

                        if (A[stepson] <= val) {
                            await this.push({stepson})
                            break;
                        }
                        // current node is greater than head. sift.
                        // no need to check this if we know the current node is trusty,
                        // because we just checked the head (which is val, in the first
                        // iteration)
                        if (!isTrusty && pshift > 1) {
                            let rt = head - 1;
                            let lf = head - 1 - LP[pshift - 2];
                            if (A[rt] >= A[stepson] || A[lf] >= A[stepson]) {
                                await this.push({rt, lf, stepson, head})
                                break;
                            }
                        }
                        // A[head] = A[stepson];
                        await this.push({stepson, head}, {
                            [head]: A[stepson]
                        }, [head, stepson])

                        head = stepson;
                        //int trail = Integer.numberOfTrailingZeros(p & ~1);
                        let trail = __builtin_ctz(p & ~1);
                        p >>= trail;
                        pshift += trail;
                        isTrusty = false;
                    }

                    if (!isTrusty) {
                        // A[head] = val;
                        await this.push({head}, {
                            [head]: val
                        })
                        await sift(A, pshift, head);
                    } else {
                        await this.push({head}, null, [head])
                    }
                }
                const sort = async (A, lo, hi) => {
                    let head = lo; // the offset of the first element of the prefix into m

                    // These variables need a little explaining. If our string of heaps
                    // is of length 38, then the heaps will be of size 25+9+3+1, which are
                    // Leonardo numbers 6, 4, 2, 1.
                    // Turning this into a binary number, we get b01010110 = 0x56. We represent
                    // this number as a pair of numbers by right-shifting all the zeros and
                    // storing the mantissa and exponent as "p" and "pshift".
                    // This is handy, because the exponent is the index into L[] giving the
                    // size of the rightmost heap, and because we can instantly find out if
                    // the rightmost two heaps are consecutive Leonardo numbers by checking
                    // (p&3)==3

                    let p = 1; // the bitmap of the current standard concatenation >> pshift
                    let pshift = 1;

                    while (head < hi) {
                        if ((p & 3) === 3) {
                            // Add 1 by merging the first two blocks into a larger one.
                            // The next Leonardo number is one bigger.
                            await sift(A, pshift, head);
                            p >>= 2;
                            pshift += 2;
                        } else {
                            // adding a new block of length 1
                            if (LP[pshift - 1] >= hi - head) {
                                // this block is its final size.
                                await trinkle(A, p, pshift, head, false);
                            } else {
                                // this block will get merged. Just make it trusty.
                                await sift(A, pshift, head);
                            }

                            if (pshift === 1) {
                                // LP[1] is being used, so we add use LP[0]
                                p <<= 1;
                                pshift--;
                            } else {
                                // shift out to position 1, add LP[1]
                                p <<= (pshift - 1);
                                pshift = 1;
                            }
                        }
                        p |= 1;
                        head++;
                    }

                    await trinkle(A, p, pshift, head, false);

                    while (pshift !== 1 || p !== 1) {
                        if (pshift <= 1) {
                            // block of length 1. No fiddling needed
                            //int trail = Integer.numberOfTrailingZeros(p & ~1);
                            let trail = __builtin_ctz(p & ~1);
                            p >>= trail;
                            pshift += trail;
                        } else {
                            p <<= 2;
                            p ^= 7;
                            pshift -= 2;

                            // This block gets broken into three bits. The rightmost bit is a
                            // block of length 1. The left hand part is split into two, a block
                            // of length LP[pshift+1] and one of LP[pshift].  Both these two
                            // are appropriately heapified, but the root nodes are not
                            // necessarily in order. We therefore semitrinkle both of them

                            await trinkle(A, p >> 1, pshift + 1, head - LP[pshift] - 1, true);
                            await trinkle(A, p, pshift, head - 1, true);
                            this.pushC({finished: [head]})
                        }

                        head--;
                    }
                };
                await sort(A, 0, A.length - 1);
            },
            async cycleSort(arr) {
                let n = arr.length;
                for (let start = 0; start <= n - 2; start++) {
                    // initialize item as starting point
                    let item = start;
                    // Find position where we put the item. We basically count all smaller elements on right side of item.
                    let pos = start;
                    for (let i = start + 1; i < n; i++) {
                        if (arr[i] < arr[start])
                            pos++;
                        await this.push({start, '': i, pos})
                    }

                    // If item is already in correct position
                    if (pos === start)
                        continue;

                    // ignore all duplicate elements
                    while (arr[start] === arr[pos]) {
                        pos += 1;
                        await this.push({start, pos})
                    }

                    let itemValue = arr[item];
                    // put the item to it's right position
                    if (pos !== start) {
                        let temp = arr[item];
                        itemValue = arr[pos];
                        await this.push({start, pos}, {
                            [pos]: temp
                        })
                    }

                    // Rotate rest of the cycle
                    while (pos !== start) {
                        pos = start;

                        // Find position where we put the element
                        for (let i = start + 1; i < n; i++) {
                            if (arr[i] < itemValue)
                                pos += 1;
                            await this.pushC({
                                stepMark: [start, i, pos],
                                note: {pos, start}
                            })
                        }

                        // ignore all duplicate elements
                        while (itemValue === arr[pos]) {
                            pos += 1;
                            await this.push({start, pos})
                        }
                        // put the item to it's right position
                        if (itemValue !== arr[pos]) {
                            let temp = itemValue;
                            itemValue = arr[pos];
                            await this.push({start, pos}, {
                                [pos]: temp
                            })
                        }
                    }
                }
            },
            async slowSort(data, left = 0, right = data.length - 1) {
                if (left >= right) return;
                let middle = Math.floor((left + right) / 2);

                await this.slowSort(data, left, middle);
                await this.slowSort(data, middle + 1, right);

                let update;
                if (data[middle] > data[right]) {
                    update = this.sortSwap(data, middle, right);
                }
                await this.push({left, right, middle}, update);
                await this.slowSort(data, left, right - 1);
            },
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
            },
            cssSortNodeTransition() {
                let duration;
                if (this.state === this.stateMap.paused) duration = 0.3;
                else if (this.delayTime < 40) return null;
                else duration = Math.floor(this.delayTime / 2) / 1000;
                let property = this.horizon ? 'width' : 'height';
                return property + ' ' + duration + 's steps(1)';
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
            },
            defaultDataNumber(val) {
                if (val < 1)
                    this.defaultDataNumber = "";
                if (val > 1000)
                    this.defaultDataNumber = 1000;
                this.speed = val;
                this.stop();
                this.originData = this.generateData();
            },
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
    });
}