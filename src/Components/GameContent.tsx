import Logo from "./Logo";
import Globe from "../assets/img/globe.svg";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import {QuizButton} from "./NextButton";
import React, {FC, useCallback} from "react";
import {useQuiz} from "../Context/quiz-context";

const GameContent: FC = (): JSX.Element => {
  const quizCtx = useQuiz()

  const getButtonText = useCallback((): string => {
    return quizCtx.state.isAnswered && quizCtx.state.isCorrect ? 'Next' : 'End quiz'
  }, [quizCtx.state.isAnswered, quizCtx.state.isCorrect])

  return (
    <>
      <Logo img={Globe}/>
      <Question questionText={quizCtx.state.currentQuestion.text}/>
      <AnswerOptions options={quizCtx.state.currentQuestion.options}/>
      {quizCtx.state.isAnswered && <QuizButton text={getButtonText()}/>}
    </>
  )
}

export default GameContent
