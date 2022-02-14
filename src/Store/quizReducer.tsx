import {IQuiz, QuizAction, QuizActionsEnum} from "../models/quiz";

export function quizReducer(state: IQuiz, action: QuizAction) {
  switch (action.type) {
    case QuizActionsEnum.INCREMENT_RECORD: return {...state, record: state.record + 1}
    case QuizActionsEnum.SET_ANSWERED: return {...state, isAnswered: true}
    case QuizActionsEnum.RESET_ANSWERED: return {...state, isAnswered: false}
    case QuizActionsEnum.SET_CORRECT: return {...state, isCorrect: true}
    case QuizActionsEnum.RESET_CORRECT: return {...state, isCorrect: false}
    case QuizActionsEnum.SET_FINISHED: return {...state, isFinished: true}
    case QuizActionsEnum.RESET_FINISHED: return {...state, isFinished: false}
    case QuizActionsEnum.RESET_GAME: return {...state, isFinished: false, isCorrect: false, isAnswered: false, record: 0, isStarted: false}
    case QuizActionsEnum.START_GAME: return {...state, isStarted: true, quizType: action.payload}
    case QuizActionsEnum.SET_QUESTION: return {...state, currentQuestion: {...action.payload}}
    default: throw new Error(`Unhandled action type: ${action.type}`)
  }
}
