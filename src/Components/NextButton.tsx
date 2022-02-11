import React, {FC, useContext} from "react";
import {Button} from "@mui/material";
import {useQuiz} from "../Context/quiz-context";
import {QuizActionsEnum} from "../models/quiz";
import {generateQuestion} from "../utils";
import {queryClient} from "../index";
import {Country} from "../models/country";

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
  const countries = queryClient.getQueryData('countries')

  const nextHandler = () => {
    if(quizCtx.state.isCorrect) {
      quizCtx.dispatch({type: QuizActionsEnum.INCREMENT_RECORD})
      quizCtx.dispatch({type: QuizActionsEnum.RESET_ANSWERED})
      quizCtx.dispatch({type: QuizActionsEnum.RESET_CORRECT})
      quizCtx.dispatch({type: QuizActionsEnum.SET_QUESTION, payload: generateQuestion(countries as Country[], 4)})
      return
    }
    quizCtx.dispatch({type: QuizActionsEnum.SET_FINISHED})
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
