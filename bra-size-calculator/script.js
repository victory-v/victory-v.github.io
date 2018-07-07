(function(){
    document.addEventListener("DOMContentLoaded", function(){

        const braSizeCalculator = {

            inputs: document.querySelectorAll('.bra-size-input'),

            underBreast: {
                input: document.querySelector('.bra-under-breast'),
                min: 63,
                max: 122,
            },

            onBreast: {
                input: document.querySelector('.bra-on-breast'),
                letters: ['AA', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
            },

            get sizesTable() {
                let sizes = {};
                for (let i = this.underBreast.min; i <= this.underBreast.max; i+=5) {
                    let maxTopSize;
                    let firstTopSize = i + 12;

                    sizes[i] = [];

                    if(i === 63) maxTopSize = firstTopSize + 6;
                    if(i >= 68 && i < 98) maxTopSize = firstTopSize + 22;
                    if(i >= 98 ) maxTopSize = firstTopSize + 16;

                    for (let k = firstTopSize; k <= maxTopSize; k=k+2) {
                        sizes[i].push(k);
                    }
                }

                /***
                 * returns object of *lowest values of under-breast ranges* as keys
                 * and *array of suitable on-breast values* as values
                 ***/
                return sizes;
            },

            calculateSize() {
                let underBreastValue = +this.underBreast.input.value;
                let onBreastValue = +this.onBreast.input.value;

                if(underBreastValue && onBreastValue) {
                    if(underBreastValue > this.underBreast.max || underBreastValue < this.underBreast.min) {
                        this.resetResults();
                        this.error.showIncorrect();
                        return;
                    }

                    let underBreastSize = null;
                    let onBreastKey = null; //key for on-breast-letter value

                    /***
                     * find the suitable size for under-breast value
                     * and the key for on-breast value
                     ***/
                    for (let i in this.sizesTable) {
                        if (underBreastValue >= +i && underBreastValue < +i + 5) {
                            onBreastKey = +i; //the lowest value of the range (is the key for on-breast value)
                            underBreastSize = +i + 2; //the middle value of the range
                            break;
                        }
                    }

                    this.result.size.num = underBreastSize;

                    let onBreastValuesArray = this.sizesTable[onBreastKey];
                    let onBreastSizeIndexPart = null;

                    for (let i = 0; i < onBreastValuesArray.length; i++) {
                        if (onBreastValue >= onBreastValuesArray[i] && onBreastValue < onBreastValuesArray[i] + 2) {
                            onBreastSizeIndexPart = onBreastValuesArray[i]; //the lowest value of the range
                            break;
                        }
                    }

                    if(onBreastSizeIndexPart === null) {
                        this.resetResults();
                        this.error.showIncorrect();
                    } else {
                        let letterIndex = (onBreastSizeIndexPart - underBreastSize - 10)/2;

                        this.result.size.letterIndex = letterIndex;
                        this.result.size.letter = this.onBreast.letters[letterIndex];

                        this.error.hide();
                        this.result.setValue();
                        this.result.show();

                        this.calculateAdditionalSizes();
                    }

                } else {
                    this.result.hide();
                    this.additionalSizes.hide();
                    this.error.showEmpty();
                }
            },

            result: {
                element: document.querySelector('.bra-size-result'),
                valueElement: document.querySelector('.bra-size-result-value'),
                size: {
                    num: null,
                    letterIndex: null,
                    letter: null
                },
                show() {
                    this.element.classList.add('active');
                },
                hide(){
                    this.element.classList.remove('active');
                },
                setValue() {
                    this.valueElement.innerHTML = this.size.num + this.size.letter;
                }
            },

            calculateAdditionalSizes() {
                let parallelFirst = '',
                    parallelSec = '';
                if(this.result.size.letterIndex !== 0 && this.result.size.num !== 120) {
                    let parallelFirstNum = this.result.size.num + 5;
                    let parallelFirstLetter = this.onBreast.letters[this.result.size.letterIndex - 1];
                    parallelFirst = parallelFirstNum+parallelFirstLetter;
                }

                if(this.result.size.letterIndex !== this.onBreast.letters.length && this.result.size.num !== 65) {
                    let parallelSecNum = this.result.size.num - 5;
                    let parallelSectLetter = this.onBreast.letters[this.result.size.letterIndex + 1];
                    parallelSec = ' и ' + parallelSecNum + parallelSectLetter;
                }

                if(parallelFirst || parallelSec) {
                    this.additionalSizes.show();
                    this.additionalSizes.setValue(parallelFirst + parallelSec);
                } else {
                    this.additionalSizes.hide();
                }
            },

            additionalSizes: {
                element: document.querySelector('.bra-additional'),
                valueElement: document.querySelector('.bra-additional-value'),
                show(){
                    this.element.classList.add('active');
                },
                hide(){
                    this.element.classList.remove('active');
                },
                setValue(val) {
                    this.valueElement.innerHTML = val;
                }
            },

            validateInputValue(_this, e) {
                let strInitial = _this.value,
                    reg = /[\d\.]/,
                    str = strInitial.replace(",", ".").replace(/^\./, "0.").replace(/^0(\d)/, "$1"),
                    len = 15 < str.length ? 15 : str.length,
                    b = 0;
                for (; b < len && reg.test(str.charAt(b)); b++) "." === str.charAt(b) && (reg = /\d/, len = b + 3);
                e.type === "blur" && (str = str.replace(/\.$/, ""));
                _this.value = str.slice(0, b);
            },

            resetResults() {
                this.result.size.letterIndex = this.result.size.letter = this.result.size.num = null;
                this.result.hide();
                this.additionalSizes.hide();
            },

            error: {
                element: document.querySelector('.bra-error'),
                showEmpty() {
                    this.element.innerHTML = 'Введите оба значения';
                    this.show();
                },
                showIncorrect() {
                    this.element.innerHTML = 'Попробуйте ввести более точные измерения объемов';
                    this.show();
                },
                show(){
                    this.element.classList.add('active');
                },
                hide(){
                    this.element.classList.remove('active');
                }
            },
        };

        braSizeCalculator.calculateSize();

        braSizeCalculator.inputs.forEach(function (item) {
            item.addEventListener('change', function () {
                braSizeCalculator.calculateSize();
            });
        });

        braSizeCalculator.inputs.forEach(function (item) {
            item.addEventListener('keyup', function (e) {
                braSizeCalculator.validateInputValue(this, e);
            });
        });

    });

})();


