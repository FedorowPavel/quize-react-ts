import React, {FC} from "react";
import {Button} from "@mui/material";
import {useQuiz} from "../Context/quiz-context";
import {QuizActionsEnum} from "../models/quiz";

const buttonStyles = {
  alignSelf: "flex-end",
  backgroundColor: 'rgba(249, 168, 38, 1)',
  boxShadow: 'none',
  fontSize: '16px',
  lineHeight: '27px',
  padding: '12px 20px',
  borderRadius: '12px'
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
      sx={buttonStyles}
      onClick={nextHandler}
    >
      {text}
    </Button>
  )
}
