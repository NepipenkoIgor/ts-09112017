const rLetter: RegExp = /[a-zA-Zа-яёА-ЯЁ]/;

const revertCharsinWord = (word: string): string => {
  const chars: string[] = word.split('');
  const revertedChars = chars.filter((char: string): boolean => rLetter.test(char)).reverse();

  let index: number = 0;

  return chars.map((char: string): string => rLetter.test(char) ? revertedChars[index++] : char).join('');
};

const revertWodrs = (str: string): string => str.split(/\s/).map(revertCharsinWord).join(' ');

console.log(revertWodrs('s1tar3t 2 hellow'));
console.log(revertWodrs('s1ta$%r3t 2 hel^low'));
console.log(revertWodrs('s1tar3t 2   low5'));
console.log(revertWodrs('мама мыла рам9у'));
