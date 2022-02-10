import {Card} from "@mui/material";
import React, {FC} from "react";
import Logo from "./Logo";
import Globe from "../assets/img/globe.svg"
import Tittle from "./Tittle";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import {QuizButton} from "./NextButton";
import {useQuiz} from "../Context/quiz-context";
import ReactConfetti from "react-confetti";

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

  return (
    <Card sx={cardStyles}>
      <span>Record: {quizCtx.state.record}</span>
      <Tittle title={"Country Quize"}/>
      <Logo img={Globe}/>
      <Question questionText={quizCtx.state.currentQuestion.text}/>
      <AnswerOptions options={quizCtx.state.currentQuestion.options}/>
      {quizCtx.state.isAnswered && <QuizButton text={'Next'}/>}
    </Card>
  )
}

export  default QuizeCard
