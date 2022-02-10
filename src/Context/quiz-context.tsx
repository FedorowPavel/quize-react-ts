import {createContext, useContext, useReducer} from "react";
import {IQuiz, QuizAction, QuizActionsEnum, QuizDispatch, QuizProviderProps} from "../models/quiz";

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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const initQuizSate: IQuiz = {
  currentQuestion: {
    text: "Minsk",
    options: [
      {value: "First", isCorrect: false},
      {value: "Second", isCorrect: true},
      {value: "Third", isCorrect: false},
      {value: "Fourth", isCorrect: false},
    ]
  },
  isAnswered: false,
  isCorrect: false,
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
    throw new Error('useCount must be used within a QuizProvider')
  }
  return context
}

export {QuizProvider, useQuiz}
