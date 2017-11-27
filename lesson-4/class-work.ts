// // declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// // declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// // declare type MethodDecorator =
// // <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) =>
// // TypedPropertyDescriptor<T> | void;
// // declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;


// class MathLib {

//     @logMethod('test method')
//     public areaOfCircle(r: number): number {
//         return Math.PI * r ** 2;
//     }
// }

// // tslint:disable-next-line
// function logMethod(name: string) {
//     // tslint:disable-next-line
//     return (target: any, key: string, descriptor: any) => ({
//         ...descriptor,
//         // tslint:disable-next-line
//         value: (...args: any[]): any => {
//             // tslint:disable-next-line
//             const argsStr: string = args.map((value: any) => JSON.stringify(value)).join();
//             // tslint:disable-next-line
//             const r = descriptor.value(args);
//             const result: string = JSON.stringify(r);
//             // tslint:disable-next-line
//             console.log(`${name}  Call: ${key}(${argsStr}) => ${result}`);
//             return r;
//         }
//     });
// }

// const math: MathLib = new MathLib();


// console.log('first', math.areaOfCircle(10));
// console.log('second', math.areaOfCircle(21));


// @logClass
// class User {
//     public constructor(
//         public firstName: string,
//         public lastName: string,
//     ) {

//     }
// }

// // tslint:disable-next-line
// function logClass(target: any): any {
//     return () => {
//         console.log(`New instance of ${target.name}`);
//         return target;
//     };
// }

// let person1: User = new User('Igor', 'Nepipenko');
// let person2: User = new User('Vova', 'Loban');


// class Person {
//     @logProperty
//     public firstName: string;

//     @logProperty
//     public age: number;

//     public constructor(
//         firstName: string,
//         age: number,
//     ) {
//         this.firstName = firstName;
//         this.age = age;
//     }
// }
// // tslint:disable-next-line
// function logProperty(target: any, key: string) {
//     // tslint:disable-next-line
//     let val: any = target[key];
//     const get: () => typeof val = (): typeof val => {
//         // tslint:disable-next-line
//         console.log(`Get: ${key} => ${JSON.stringify(val)}`);
//         return val;
//     };
//     // tslint:disable-next-line
//     const set: (newValue: any) => void = (newValue: any): void => {
//         // tslint:disable-next-line
//         console.log(`Set: ${key} => ${JSON.stringify(newValue)}`);
//         val = newValue;
//     };

//     Object.defineProperty(
//         target, key, {
//             configurable: true,
//             enumerable: true,
//             get,
//             set
//         }
//     );
// }

// const me: Person = new Person('Igor', 32);
// const myName: string = me.firstName;
// me.firstName = 'Vova';


// class Account {
//     public constructor(
//         public firstName: string,
//         public lastName: string,
//     ) {

//     }

//     @readMetadata
//     public sayMessage( @setMetadata msg: string): string {
//         return `${this.firstName} ${this.lastName} : ${msg}`;
//     }
// }
// // tslint:disable-next-line
// function setMetadata(target: any, key: string, index: number): void {
//     const metadataKey: string = `___log_${key}_parametres`;
//     if (Array.isArray(target[metadataKey])) {
//         target[metadataKey].push(index);
//         return;
//     }
//     target[metadataKey] = [index];
// }
// // tslint:disable-next-line
// function readMetadata(target: any, key: string, desc: any): any {
//     const metadataKey: string = `___log_${key}_parametres`;
//     const indices: number = target[metadataKey];
//     return {
//         ...desc,
//         // tslint:disable-next-line
//         value: (...args: any[]): any => {
//             console.log(`${key} args[${indices}]: ${args[indices]}`);
//             return desc.value(args);
//         }
//     };
// }

// let person: Account = new Account('Vova', 'Loban');
// person.sayMessage(`Typescript is awesome`);
// person.sayMessage(`JavaScript the best`);
