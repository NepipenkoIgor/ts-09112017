/* Vitaly Savinov
писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено */
{
  type ns = number | string;
  
  function summator(...args: number[]): number;
  function summator(...args: string[]): string;
  function summator(...args: any[]): any {
    let result: any;
    
    if ( args.length > 0) {
      result = args.reduce( (sum, item) : any => {
        return sum + item;
      } ); 
      return result;
    } else {
      return '';
    }
    
  }

  console.log( summator(1,2,3,4,5,6,1,2,3,4,5,6,3,4,5,3,4,5,6) );
  console.log( summator(22,34,14,5,6,14,22,34,43,56,66,34,44,56) );
  console.log( summator("Гога","Вова","Петя","Федя","Гога","Гоша","Георгий Иванович","Вова") );
}