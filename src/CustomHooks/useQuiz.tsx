import {useContext} from "react";
import {QuizContext} from "../Store/quizContext";

function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error('seems like useQuiz is being used not within a QuizProvider')
  }
  return context
}

export {useQuiz};
