const isInArray: (arr: any[], ...rest: any[]) => boolean = (arr: any[], ...rest: any[]): boolean => rest.every((elem: any): boolean => !!~arr.indexOf(elem));

console.log(isInArray([1, 2, 3]));
console.log(isInArray([1, 2, 3], 2, 3));
console.log(isInArray([1, 2, 3], 0));
console.log(isInArray([1, 2, 3], 1, 2, 3, 4));
console.log(isInArray([]));
