import {IQuestion} from "./question";
import {ReactNode} from "react";

export interface IQuiz {
  currentQuestion: IQuestion,
  isAnswered: boolean,
  isCorrect: boolean,
  record: number
}

export enum QuizActionsEnum {
  INCREMENT_RECORD = 'incrementRecord',
  SET_ANSWERED = 'setAnswered',
  RESET_ANSWERED = 'resetAnswered',
  SET_CORRECT = 'setCorrect',
  RESET_CORRECT = 'resetCorrect',
  SET_QUESTION = 'setQuestion'
}
export type QuizAction = {type: QuizActionsEnum}
export type QuizDispatch = (action: QuizAction) => void
export type QuizProviderProps = {children: ReactNode}
