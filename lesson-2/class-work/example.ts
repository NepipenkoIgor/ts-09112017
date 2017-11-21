// function getAverage(a: number, b: number, c: number): string {
//     let total = a + b + c;
//     let average = total / 3;
//     return `The average is ${average}`
// }

// getAverage('asda', 1, 1);
// getAverage(1, 1, 1);
// getAverage(2, 1, 1, 3);

// function getAverage(a: number, b: number, c?: number,d?: number): string {
//     let total = a;
//     let count = 1;
//     total += b;
//     count++;
//     if (typeof c !== 'undefined') {
//         total += c;
//         count++;
//     }
//     let average = total / count;
//     return `The average is ${average}`
// }


// getAverage( 1, 1, null, 12);
// getAverage(1, 1,'asd');
// getAverage(2, 1, 1, 3);

// function getAverage(a: number, b: number, c: number = 0): string {
//     let total = a + b + c;
//     let average = total / 3;
//     return `The average is ${average}`
// }

// getAverage(1, 1);
// getAverage(1, 1, 3);
// getAverage(2, 1, 1, 3);

// function getAverage(...num: number[]): string {
//     let total = 0;
//     let count = 0;
//     for (let i = 0; i < num.length; i++) {
//         total += num[i];
//         count++;
//     }
//     let average = total / count;
//     return `The average is ${average}`
// }
// getAverage(2, 1, 1, 3,3,4,657,4574,45747,45456,23423);
type ns = string | number;
function isString(a: ns): a is string {
    return typeof a === 'string'
}



// function getAverage(a: number, b: number, c: number): string;
// function getAverage(a: string, b: string): number;
// function getAverage(a: ns, b: ns, c?: ns): string | number {
//     if (isString(a)) {
//         parseInt(a, 10)
//     } else {
//         a
//     }
//     let total = parseInt(a, 10) + parseInt(a, 10) + parseInt(a, 10);
//     let average = total / 3;
//     if (true) {
//         return 2;
//     }
//     //return `The average is ${average}`
// }
//getAverage('asd', 'asd', 'asd')

// type classMark = 'open' | 'close' | 'pending';
// function listAction(classMark: classMark) {

// }
// listAction('close')
// function f(a: asd) {
//     switch (a) {
//         case 'asd': {

//         }
//         case 'qwe': {

//         }
//     }
// }

// interface IPoint {
//     sum(): number;
// }

// class Point implements IPoint  {

//     private _x: number;
//     private _y: number;

//     public constructor(
//         _x: number,
//         _y: number
//     ) {
//         this._x = _x;
//         this._y = _y;

//     }
//     public sum(): number {
//         return this._x + this._y;
//     }
// }

// let point = new Point(45, 54);
// point.sum();
// point.

// class Singleton {
//     private static _instance: Singleton;
//     private constructor() { }
//     public static getInstance() {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
// }

// let inst = Singleton.getInstance();

// class A {
//     public readonly x: number = 1;
//     private y: number;
//     protected z: number;

//     constructor() {

//     }

//     public getValue(){
//         this.x = 3;
//     }
// }

// let a = new A();


// class B extends A {
//     constructor() {
//         super();
//         this.z;
//         this.x;
//     }
// }


// abstract class A {
//     sum(): number {
//         return 2;
//     }
//     protected abstract getValue(): string;
// }

// class B extends A {
//     protected getValue() {
//         return `some text`;
//     }
// }

// class E extends B {
//     constructor() {
//         super();
//         this.getValue();
//     }
// }

// const acc: {
//     readonly name: string,
//     readonly age: number
// } = { name: 'Igor', age: 30 };

// acc.name = 'Nikita'
