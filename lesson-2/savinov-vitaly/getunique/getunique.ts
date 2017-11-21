/* Vitaly Savinov
Написать функцию getUnique(arr), которая принимает аргументом неограниченное число аргументов,
и возвращает массив уникальных элементов. Аргумент не должен изменяться.
Порядок элементов результирующего массива должен совпадать с порядком,
в котором они встречаются в оригинальной структуре. */

type ns = number | string;

function getUnique(...args: ns[]): ns[] {
  let retArr: ns[] = [];
    
  for (let i=0; i < args.length; i++) {
     if ( retArr.indexOf(args[i]) === -1 ) {
      retArr.push(args[i]);
     }
  }
  
  return retArr;
}

function uniq(): string {
  let result: ns[] = [];
  
  result = getUnique( 22, 34, 65, 567, 45, 34, 567, 34, 22, 689, 65 );

  return result.join(' ');
}
