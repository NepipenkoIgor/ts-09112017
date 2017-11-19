const isString = (value: any): value is string => typeof value === 'string';

type ns = number | string;
/*
 * А можно реализовать перегрузку для функций-стрелок?
 */
function summator (...nums: number[]): number;
function summator (...nums: string[]): number;
function summator (...nums: ns[]): number {
  return nums.map((value: ns): number => isString(value) ? parseFloat(value) : value)
    .reduce((a: number, b:number): number => a + b, 0/*Чтобы функция не падала в случае пустого массива*/);
};

console.log(summator());
console.log(summator(1));
console.log(summator(1, 2, 3));
console.log(summator('12', '3', '2.12'));
console.log(summator('not a number', '2'));
