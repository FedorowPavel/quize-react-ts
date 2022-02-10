import {Card} from "@mui/material";
import React, {FC} from "react";
import Logo from "./Logo";
import Globe from "../assets/img/globe.svg"
import Tittle from "./Tittle";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import {QuizButton} from "./NextButton";
import {useQuiz} from "../Context/quiz-context";
import {Country} from "../models/country";
import {IOption, IQuestion} from "../models/question";
import {QuizActionsEnum} from "../models/quiz";

const cardStyles = {
  width: 400,
  padding: "52px 32px 32px 32px",
  borderRadius: "24px",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column"
}

const QuizeCard: FC<{question: IQuestion}> = ({question}) => {
  const quizCtx = useQuiz()


  return (
    <Card sx={cardStyles}>
      <span>Record: {quizCtx.state.record}</span>
      <Tittle title={"Country Quize"}/>
      <Logo img={Globe}/>
      <Question questionText={question.text}/>
      <AnswerOptions options={question.options}/>
      {quizCtx.state.isAnswered && <QuizButton text={'Next'}/>}
    </Card>
  )
}

export  default QuizeCard
