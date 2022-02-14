import {createContext, useContext, useReducer} from "react";
import {IQuiz, QuizAction, QuizActionsEnum, QuizDispatch, QuizProviderProps, QuizTypesEnum} from "../models/quiz";

export const QuizContext = createContext<{state: IQuiz, dispatch: QuizDispatch} | undefined>(undefined)

function quizReducer(state: IQuiz, action: QuizAction) {
  switch (action.type) {
    case QuizActionsEnum.INCREMENT_RECORD: {
      return {...state, record: state.record + 1}
    }
    case QuizActionsEnum.SET_ANSWERED: {
      return {...state, isAnswered: true}
    }
    case QuizActionsEnum.RESET_ANSWERED: {
      return {...state, isAnswered: false}
    }
    case QuizActionsEnum.SET_CORRECT: {
      return {...state, isCorrect: true}
    }
    case QuizActionsEnum.RESET_CORRECT: {
      return {...state, isCorrect: false}
    }
    case QuizActionsEnum.SET_FINISHED: {
      return {...state, isFinished: true}
    }
    case QuizActionsEnum.RESET_FINISHED: {
      return {...state, isFinished: false}
    }
    case QuizActionsEnum.RESET_GAME: {
      return {...state, isFinished: false, isCorrect: false, isAnswered: false, record: 0, isStarted: false}
    }
    case QuizActionsEnum.START_GAME: {
      return {...state, isStarted: true, quizType: action.payload}
    }
    case QuizActionsEnum.SET_QUESTION: {
      return {...state, currentQuestion: {...action.payload}}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const initQuizSate: IQuiz = {
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

function QuizProvider({children}: QuizProviderProps) {
  const [state, dispatch] = useReducer(quizReducer, initQuizSate)
  const value = {state, dispatch}
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error('seems like useQuiz is being used not within a QuizProvider')
  }
  return context
}

export {QuizProvider, useQuiz}
