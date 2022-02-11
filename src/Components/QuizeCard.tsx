import {Card} from "@mui/material";
import React, {FC, useCallback} from "react";
import Logo from "./Logo";
import Globe from "../assets/img/globe.svg"
import Tittle from "./Tittle";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import {QuizButton} from "./NextButton";
import {useQuiz} from "../Context/quiz-context";

const cardStyles = {
  width: 400,
  padding: "52px 32px 32px 32px",
  borderRadius: "24px",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column"
}

const QuizeCard: FC = () => {
  const quizCtx = useQuiz()

  const getButtonText = useCallback((): string => {
    return quizCtx.state.isAnswered && quizCtx.state.isCorrect ? 'Next' : 'End quiz'
  }, [quizCtx.state.isAnswered, quizCtx.state.isCorrect])

  return (
    <Card sx={cardStyles}>
      <Tittle title={"Country Quize"}/>
      <Logo img={Globe}/>
      <Question questionText={quizCtx.state.currentQuestion.text}/>
      <AnswerOptions options={quizCtx.state.currentQuestion.options}/>
      {quizCtx.state.isAnswered && <QuizButton text={getButtonText()}/>}
    </Card>
  )
}

export  default QuizeCard
