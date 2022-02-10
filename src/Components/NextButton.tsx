import React, {FC} from "react";
import {Button} from "@mui/material";
import {useQuiz} from "../Context/quiz-context";
import {QuizActionsEnum} from "../models/quiz";

const buttonStyles = {
  alignSelf: "flex-end"
}

export const QuizButton: FC<{text: string}> = ({ text}) => {
  const quizCtx = useQuiz()

  const nextHandler = () => {
    quizCtx.dispatch({type: QuizActionsEnum.INCREMENT_RECORD})
    quizCtx.dispatch({type: QuizActionsEnum.RESET_ANSWERED})
    quizCtx.dispatch({type: QuizActionsEnum.RESET_CORRECT})
  }

  return (
    <Button
      variant="contained"
      color="warning"
      sx={buttonStyles}
      onClick={nextHandler}
    >
      {text}
    </Button>
  )
}
