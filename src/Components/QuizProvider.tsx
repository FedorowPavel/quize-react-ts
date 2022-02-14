import {QuizProviderProps} from "../models/quiz";
import {useReducer} from "react";
import {quizReducer} from "../Store/quizReducer";
import {QuizContext} from "../Store/quizContext";
import {initQuizSate} from "../constants";

function QuizProvider({children}: QuizProviderProps) {
  const [state, dispatch] = useReducer(quizReducer, initQuizSate)
  const value = {state, dispatch}
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export {QuizProvider};
