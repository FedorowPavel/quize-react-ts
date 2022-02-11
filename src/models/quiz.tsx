import {IQuestion} from "./question";
import {ReactNode} from "react";

export interface IQuiz {
  currentQuestion: IQuestion,
  isAnswered: boolean,
  isCorrect: boolean,
  isFinished: boolean
  record: number
}

export enum QuizActionsEnum {
  INCREMENT_RECORD = 'incrementRecord',
  SET_ANSWERED = 'setAnswered',
  RESET_ANSWERED = 'resetAnswered',
  SET_CORRECT = 'setCorrect',
  RESET_CORRECT = 'resetCorrect',
  SET_QUESTION = 'setQuestion',
  SET_FINISHED = 'setFinished',
  RESET_FINISHED = 'resetFinished',
}
export type QuizAction = {type: QuizActionsEnum, payload?: any}
export type QuizDispatch = (action: QuizAction) => void
export type QuizProviderProps = {children: ReactNode}
