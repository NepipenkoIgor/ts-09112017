//---------------------------------------------------------------------------
// TASK 1
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.

function isInArray(arr: any[], ...vars: any[]): boolean {
    for(let i = 0; i < vars.length; i ++) {
        let v = vars[i];
        if(arr.indexOf(v) === -1) return false;
    }
    return true;
}

//---------------------------------------------------------------------------
// TASK 2
// Написать функцию summator(), которая сумирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

type numstr = number | string;

function getNumValue(val: numstr): number {
    if(typeof val === 'number') return val;
    return parseInt(val);
}

function summator(...arr: numstr[]): number {
    let res: numstr = 0;

    res = arr.reduce(function(res: numstr, val: numstr): number {
        return getNumValue(res) + getNumValue(val);
    });

    return getNumValue(res);
}

//---------------------------------------------------------------------------
// TASK 3
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.

function getUnique(...vars: any[]): any[] {

    let res: any[] = [];

    for(let v of vars) {
        if(res.indexOf(v) === -1) {
            res.push(v);
        }
    }

    return res;
}

//---------------------------------------------------------------------------
// TASK 4
// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
//    s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//    s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//    s1tar3t 2   low5  ->  t1rat3s 2   wol5


function swapLetters(str: string): string {
    
        let res: string = '';
        let pos: number = 0;
        let nonSwapped: string = '0123456789~!@#$%^&*()[]/';

        let arr: string[] = str.split( /[\.!\?,\t:;\s]+/g );

        for(let s of arr) {
            let posOfWord = str.indexOf(s, pos);

            res += str.substring(pos, posOfWord);

            let letters: string[] = s.split('');
            let lettersResult: string[] = letters.slice();

            let i = 0;
            let iReverse = lettersResult.length - 1;
            for(; i < lettersResult.length && iReverse >= 0; i ++) {
                if(nonSwapped.indexOf(lettersResult[i], 0) === -1) {
                    while(nonSwapped.indexOf(letters[iReverse], 0) !== -1 && iReverse >= 0) {
                        iReverse --;
                    }
                    if(iReverse >= 0) {
                        lettersResult[i] = letters[iReverse];
                    }
                    iReverse --;
                }
            }

            res += lettersResult.reduce((s: string, n: string): string => s += n);

            pos = posOfWord + s.length;
        }
    
        return res;
    }
    

/////////////////////////////////////////////////////////////////////////////
// TESTS for TASK 1
console.log('----------------------------------------------------------------');
console.log('// TESTS for TASK 1', 'isInArray()');

let arr1 = [1, 2, 3, '4', '5', 6, 7, 8, 'str'];
let arr2 = [1, 3, 'str'];
let arr3 = [1, 3, 4, 5, 'str'];

console.log('Source array: ', JSON.stringify(arr1));
console.log('Compared array: ', JSON.stringify(arr2));
console.log(isInArray(arr1, ...arr2), 'Expected: true');
console.log('Compared array: ', JSON.stringify(arr3));
console.log(isInArray(arr1, ...arr3), 'Expected: false');

//---------------------------------------------------------------------------
// TESTS for TASK 2
console.log('----------------------------------------------------------------');
console.log('// TESTS for TASK 2', 'summator()');

let arr5: numstr[] = [1, 2, 3, '4', '5', 6, 7, 8];
console.log('Source array: ', JSON.stringify(arr5));
console.log(summator(...arr5), 'Expected:', 36);


//---------------------------------------------------------------------------
// TESTS for TASK 3
console.log('----------------------------------------------------------------');
console.log('// TESTS for TASK 3', 'getUnique()');

let arr7: any[] = [1, 2, 3, 3, 4, '4', '4', null, '5', 5, null, 6, 6, 4, 5, 6, 6, 7, 8, '8', '8'];
console.log('Source array: ', JSON.stringify(arr7));
console.log('Resulting array: ', JSON.stringify(getUnique(...arr7)));

//---------------------------------------------------------------------------
// TESTS for TASK 4
console.log('----------------------------------------------------------------');
console.log('// TESTS for TASK 4', 'swapLetters()');

let str: string = 's1tar3t 2 hellow    s1ta$%r3t 2 hel^low s1tar3t 2   low5';
console.log('Source string:    ', str);
console.log('Resulting string: ', swapLetters(str));


