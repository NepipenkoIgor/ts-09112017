const getUnique = (...arr: any[]): any[] => arr.reduce((res: any[], ell: any): any[] => {
  if (!~res.indexOf(ell)) {
    res.push(ell);
  }

  return res;
}, []);

console.log(getUnique(1, 2, 'str', '3', 3, 2, 4, 1, 'str'));
console.log(getUnique({ a: 1 }, { a: 1 }));

const a = {
  a: 2
};
const b = [1, 2, 3];

console.log(getUnique(a, b, { a: 1 }, { a: 2 }, b, a, 3, a));
