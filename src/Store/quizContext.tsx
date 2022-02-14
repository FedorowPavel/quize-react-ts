import {createContext} from "react";
import {IQuiz, QuizDispatch} from "../models/quiz";

export const QuizContext = createContext<{state: IQuiz, dispatch: QuizDispatch} | undefined>(undefined)
