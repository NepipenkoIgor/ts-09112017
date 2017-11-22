/* Vitaly Savinov
Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.*/

function isInArray(first: any[], ...args: any[]): boolean {
  let ret: boolean = true;
  
  if (args.length > 0) {
    args.forEach( ( item ) => {
      if ( first.indexOf(item) === -1 ) ret = false;
    } );
  } else {
    return false;
  }
  
  return ret;
}

console.log( isInArray([1,2,3,4,5,6],1,19,2,3,4,5,6,3,4,5,3,4,5,6,11) );
console.log( isInArray([22,34,14,44,56],22,34,44,56) );
console.log( isInArray(["Гога","Вова","Петя","Федя"],"Гога","Гоша","Георгий Иванович","Вова") );
