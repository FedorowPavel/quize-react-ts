import Logo from "./Logo";
import Globe from "../assets/img/globe.svg";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import {QuizButton} from "./NextButton";
import React, {FC, useCallback} from "react";
import {useQuiz} from "../CustomHooks/useQuiz";

const GameContent: FC = (): JSX.Element => {
  const {state} = useQuiz()

  const getButtonText = useCallback((): string => {
    return state.isAnswered && state.isCorrect ? 'Next' : 'End quiz'
  }, [state.isAnswered, state.isCorrect])

  return (
    <>
      <Logo img={Globe}/>
      <Question questionText={state.currentQuestion.text}/>
      <AnswerOptions options={state.currentQuestion.options}/>
      {state.isAnswered && <QuizButton text={getButtonText()}/>}
    </>
  )
}

export default GameContent
