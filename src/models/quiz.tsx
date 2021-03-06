import {IQuestion} from "./question";
import {ReactNode} from "react";
import {QuizTheme} from '@mui/material/styles';

export interface IQuiz {
  currentQuestion: IQuestion,
  isAnswered: boolean,
  isCorrect: boolean,
  isFinished: boolean,
  isStarted: boolean,
  quizType: QuizTypesEnum,
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
  RESET_GAME = 'resetGame',
  START_GAME = 'startGame'
}

export enum QuizTypesEnum {
  CAPITAL = 'capital',
  FLAG = 'flag',
}

export type QuizAction = {type: QuizActionsEnum, payload?: any}
export type QuizDispatch = (action: QuizAction) => void
export type QuizProviderProps = {children: ReactNode}
export type ThemeProviderProps = {children: ReactNode, theme: QuizTheme}
