import React, {FC} from "react";
import {Button} from "@mui/material";
import {generateQuestion} from "../utils";
import {queryClient} from "../index";
import {Country} from "../models/country";
import {ANSWER_OPTIONS_COUNT, COUNTRIES_QUERY_KEY} from "../constants";
import {QuizActionsEnum} from "../models/quiz";
import {useQuiz} from "../CustomHooks/useQuiz";

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
  const countries = queryClient.getQueryData(COUNTRIES_QUERY_KEY)

  const nextHandler = () => {
    if(quizCtx.state.isCorrect) {
      quizCtx.dispatch({type: QuizActionsEnum.INCREMENT_RECORD})
      quizCtx.dispatch({type: QuizActionsEnum.RESET_ANSWERED})
      quizCtx.dispatch({type: QuizActionsEnum.RESET_CORRECT})
      quizCtx.dispatch({type: QuizActionsEnum.SET_QUESTION, payload: generateQuestion(countries as Country[], ANSWER_OPTIONS_COUNT, quizCtx.state.quizType)})
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
