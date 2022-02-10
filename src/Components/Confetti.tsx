import ReactConfetti from "react-confetti";
import React, {FC} from "react";
import {useQuiz} from "../Context/quiz-context";

export const Confetti: FC = (): JSX.Element | null => {
  const {state} = useQuiz()
  if (!(state.isAnswered && state.isCorrect)) {
    return null
  }
  return (
    <ReactConfetti recycle={false}/>
  )
}
