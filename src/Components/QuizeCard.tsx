import {Card} from "@mui/material";
import React, {FC} from "react";
import Tittle from "./Tittle";
import QuizCardContent from "./QuizCardContent";
import {useQuiz} from "../Context/quiz-context";
import {QuizActionsEnum, QuizTypesEnum} from "../models/quiz";
import QuizTypeSelector from "./QuizTypeSelector";

const cardStyles = {
  width: 400,
  padding: "32px 32px 32px 32px",
  borderRadius: "24px",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column"
}

const QuizeCard: FC = () => {
  const {state} = useQuiz()

  return (
    <Card sx={cardStyles}>
      <Tittle title={"Country Quize"}/>
      {!state.isStarted && <QuizTypeSelector/>}
      {state.isStarted && <QuizCardContent/>}
    </Card>
  )
}

export  default QuizeCard
