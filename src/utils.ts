import {IOption, IQuestion} from "./models/question";
import {Country} from "./models/country";
import {QuizTypesEnum} from "./models/quiz";

export const getPrefix = (index: number, isNumeric: boolean = false) => {
  return isNumeric ? index+1 : String.fromCharCode(65+index)
}

export const generateQuestion = (data: Country[], countOfOptions: number, quizType: QuizTypesEnum): IQuestion => {
  const countryIndexes = getRandomNumbers(0, data!.length - 1, countOfOptions)
  return {
    text: getQuestionText(data, quizType, countryIndexes),
    flag:  data[countryIndexes[0]].flags.png,
    options: mixArray(countryIndexes.map((countyIndex) => {
      return {
        value: data[countyIndex].name.common,
        isCorrect: countyIndex === countryIndexes[0]
      }
    }))
  }
}

const getQuestionText = (data: Country[], quizType: QuizTypesEnum, countryIndexes: number[]): string => {
  switch (quizType) {
    case QuizTypesEnum.CAPITAL: return data[countryIndexes[0]].capital + ' is the capital of'
    case QuizTypesEnum.FLAG: return 'Which country does this flag belong to?'
  }
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

const mixArray = (arr: IOption[]): IOption[] => {
  return arr.sort(() => Math.random() - 0.5);
}


