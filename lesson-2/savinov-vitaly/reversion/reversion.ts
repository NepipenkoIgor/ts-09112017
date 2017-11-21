function isLetter(char: string): boolean {
  let reg = /^[а-яА-ЯёЁa-zA-Z]+$/;
  let result = reg.test(char);
  return result;
}

function reverseIt(source: string): string {
  let result: string = '';
  let arr: string[] = source.split(' ');
  
  arr.forEach( (item) => {
    let tmp: string ='';
    let char_A: string ='';
    let char_B: string ='';
    let i: number =0;
    let j: number =-1;

    while (i < item.length) {
      char_A = item.substr(i, 1);
      char_B = item.substr(j, 1);
      if ( isLetter(char_A) ) {
        if ( isLetter(char_B) ) {
          tmp += char_B;
          i++;
          j--;
        } else {
          j--;
          continue;
        }
      } else {
        tmp += char_A;
        i++;
        continue;
      }
    }

    result += tmp + ' ';
  } );
  
  return result.trim();
}