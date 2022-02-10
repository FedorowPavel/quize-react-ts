import {IOption} from "./models/question";

export const getPrefix = (index: number, isNumeric: boolean = false) => {
  return isNumeric ? index+1 : String.fromCharCode(65+index)
}

export const getRandomNumbers = (min: number, max: number, countOfUniqNumbers: number): number[] => {
  let uniqRandomNumbers = []
  while (uniqRandomNumbers.length < countOfUniqNumbers) {
    const randomNumber = Math.floor(Math.random()*(max - min + 1) + min);
    if(uniqRandomNumbers.indexOf(randomNumber) == -1) {
      uniqRandomNumbers.push(randomNumber)
    }
  }
  return uniqRandomNumbers
}

export const mixArray = (arr: IOption[]): IOption[] => {
  return arr.sort(() => Math.random() - 0.5);
}
