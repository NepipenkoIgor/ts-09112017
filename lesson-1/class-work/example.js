"use strict";
// Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", writable: false });
// function deliveryMethod() {
//     // TODO
//     return "overnight";
// }
// function shipWeight() {
//     return parseInt((document.getElementById('weight') as HTMLDivElement).innerHTML);
// }
// /*
//  * @param {(string | string[])} emailAddr - An email address of array of email addresses
//  */
// function sendUpdates(emailAddr: string | string[]) {
//     function sendEmail(addr) {
//         // Default to standard delivery if empty
//         console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);
//         if (shipWeight() > 100) {
//             console.log("WARNING: Oversize package");
//         }
//     }
//     // If it's an array, loop over it
//     if (Array.isArray(emailAddr)) {
//         emailAddr.forEach((val, idx) => {
//             sendEmail(val.trim());
//         });
//     } else {
//         sendEmail(emailAddr.trim());
//     }
// }
// interface Account {
//     firstName: string;
//     age: number;
// }
// let account = Account;
// let person = {
//     firstName: 'Igor',
//     age: 30
// }
// let myPerson: typeof person;
// myPerson = {
//     firstName: 'Igor',
//     age: 30
// }
// class Person {
//     firstName: string;
//     age: number;
// }
// let myPerson1:  Person;
// let a: number | null;
// a = null;
// let account: { [data: string]: boolean };
// account = {
//     male: true,
// }
// let obj: Object = {};
// obj['a'] = 1;
// let obj: { [key: string]: any } = {};
// obj = {};
// let letters: string[] = ['name', 'age'];
// let letters: Array<string> = ['name', 'age'];
// let fun: { (index: number): void }
//interface F { (): void, num: number }
// function count() {
//     if (!(<F>count).num) {
//         (count as F).num = 0;
//     }
//     console.log((count as F).num);
//     (count as F).num++;
// }
// count();
// count();
// count();
// count();
// count();
// interface A {
//     name: string;
// }
// class B implements A {
//     public name: string;
// }
// let gettext = (a: string): string => { return a };
// let asd: string[] = []
// asd.push('someText')
// interface Mover {
//     move(): void;
//     getStatus(): { speed: number }
// }
// type Shaker = {
//     shake(): void;
//     getStatus: () => { speed: string }
// }
// type MyCustomType = { speed: number & string };
// interface MoverShaker extends Mover, Shaker {
//     move(): number;
//     someProp: number
//     // { speed: number } +  { frequency: number };
//     getStatus: () => MyCustomType
// }
// let mover: MoverShaker = {
//     move: () => 5,
//     someProp: 10,
//     shake: () => { },
//     getStatus: () => ({ speed: 10, frequency: 15 })
// }
// type A = { name: string };
// type B = { age: number };
// let a: A | B = { age: 50 };
// let b: A & B = { age: 50, name: 'Igor' };
// interface IBase {
//     id: number
// }
// let base1: IBase = { id: 1, name: 'Igor', age: 1 }
// interface IBase {
//     name: string
// }
// interface IBase {
//     age: number
// }
// function someFunc<T>(a: T): T {
//     return a;
// };
// someFunc<string>('sdas');
// someFunc<number>(1);
// interface Action<T> {
//     type: string,
//     payload: T
// }
// let action: Action<{ name: string, age: number }> = {
//     type: 'GET_ACCOUNT',
//     payload: { name: 'Igor', age: 30 }
// }
//type g = { x: g };
//var g: { x: typeof g } 
