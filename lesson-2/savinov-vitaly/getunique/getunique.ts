/* Vitaly Savinov
Написать функцию getUnique(arr), которая принимает аргументом неограниченное число аргументов,
и возвращает массив уникальных элементов. Аргумент не должен изменяться.
Порядок элементов результирующего массива должен совпадать с порядком,
в котором они встречаются в оригинальной структуре. */

type ns = number | string;

function getUnique(...args: ns[]): ns[] {
  return args.reduce((result: ns[], current: ns) => {
    if (result.indexOf(current) !== -1) {
      return result;
    }
    return [...result, current];
  }, []);
}

console.log(getUnique(1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 3, 4, 5, 3, 4, 5, 6));
console.log(getUnique(22, 34, 14, 5, 6, 14, 22, 34, 43, 56, 66, 34, 44, 56));
console.log(getUnique("Гога", "Вова", "Петя", "Федя", "Гога", "Гоша", "Георгий Иванович", "Вова"));
