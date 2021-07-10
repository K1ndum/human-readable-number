module.exports = function toReadable (number) {
  
    const value = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }

    if (number >= 1 && number <= 20) {
        for (let key in value) {
            if (key == number) {
                return value[key];
            }
        }

    } else if (number > 20 && number <= 99) {
        let str = '';
        let num = number / 10;
        let num3 = (num - Math.floor(num)).toFixed(1)*10;
        let num2 = number - num3; 
        console.log(num2, num3);
        for (let key in value) {
            if (key == num2) {
                str += value[key];
            }
        }
        for (let key in value) {
            if (key == num3) {
                str += " " + value[key];
            }   
        }
        return str;

    } else if (number > 100 && number <= 999) {
        let str = '';
        let num1 = Math.floor(number / 100);
        let num = number / 10;
        let num3 = (num - Math.floor(num)).toFixed(1)*10;
        let num2 = number - num3 - num1*100; 
        console.log(num1, num2, num3);
        if ( (num2 + num3) >= 20 ) {
            for (let key in value) {
                if (key == num1) {
                    str += value[key] + " hundred";
                }
            }
            for (let key in value) {
                if (key == num2) {
                    str += " " + value[key];
                }
            }
            for (let key in value) {
                if (key == num3) {
                    str += " " + value[key];
                }   
            }
        } else if ((num2 + num3) < 20) {
            for (let key in value) {
                if (key == num1) {
                    str += value[key] + " hundred";
                }
            }
            for (let key in value) {
                if (key == (num2 + num3) ) {
                    str += " " + value[key];
                }
            }
        }
        return str;
    } else if (number == 0) {
        return 'zero';
    } else if (number == 100) {
        return 'one hundred';
    }

}