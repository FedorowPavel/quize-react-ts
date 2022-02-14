import {IQuiz, QuizTypesEnum} from "./models/quiz";

export const ANSWER_OPTIONS_COUNT = 4
export const COUNTRIES_QUERY_KEY = 'countries'

export const quizTypes: QuizTypesEnum[] = [QuizTypesEnum.CAPITAL, QuizTypesEnum.FLAG]

export const initQuizSate: IQuiz = {
  currentQuestion: {
    text: "Minsk",
    flag: '',
    options: [
      {value: "Germany", isCorrect: false},
      {value: "Belarus", isCorrect: true},
      {value: "Poland", isCorrect: false},
      {value: "Russia", isCorrect: false},
    ]
  },
  isAnswered: false,
  isCorrect: false,
  isFinished: false,
  isStarted: false,
  quizType: QuizTypesEnum.CAPITAL,
  record: 0
}
