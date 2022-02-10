import React, {FC} from "react";
import {Button} from "@mui/material";
import {useQuiz} from "../Context/quiz-context";
import {QuizActionsEnum} from "../models/quiz";

const buttonStyles = {
  alignSelf: "flex-end"
}

export const QuizButton: FC<{isDisabled: boolean, text: string}> = ({isDisabled, text}) => {
  const quizCtx = useQuiz()

  const nextHandler = () => {
    quizCtx.dispatch({type: QuizActionsEnum.INCREMENT_RECORD})
    quizCtx.dispatch({type: QuizActionsEnum.RESET_ANSWERED})
    quizCtx.dispatch({type: QuizActionsEnum.RESET_CORRECT})
  }

  return (
    <Button
      variant="contained"
      disabled={isDisabled}
      color="success"
      sx={buttonStyles}
      onClick={nextHandler}
    >
      {text}
    </Button>
  )
}
