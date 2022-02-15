import React, {FC} from "react";
import {Button, Typography} from "@mui/material";
import {generateQuestion} from "../utils";
import {queryClient} from "../index";
import {Country} from "../models/country";
import {COUNTRIES_QUERY_KEY, quizTypes} from "../constants";
import {QuizActionsEnum, QuizTypesEnum} from "../models/quiz";
import {useQuiz} from "../CustomHooks/useQuiz";

const btnStyles = {
  marginBottom: '40px',
  color: 'rgba(96, 102, 208, 0.7)',
  border: '2px solid rgba(96, 102, 208, 0.7)',
  height: '56px',
  borderRadius: '12px',
  ':hover': {
    border: '2px solid rgba(249, 168, 38, 1)',
    backgroundColor: 'rgba(249, 168, 38, 1)',
    color: 'white',
    cursor: 'pointer'
  }
}

const titleStyles = {
  marginBottom: '40px',
  color: 'rgba(47, 82, 123, 1)',
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: 'bold',
}

const QuizTypeSelector: FC = (): JSX.Element => {
  const {dispatch} = useQuiz()
  const countries = queryClient.getQueryData(COUNTRIES_QUERY_KEY)

  const startGame = (quizType: QuizTypesEnum): void => {
    dispatch({type: QuizActionsEnum.START_GAME, payload: quizType})
    dispatch({type: QuizActionsEnum.SET_QUESTION, payload: generateQuestion(countries as Country[], 4, quizType)})
  }

  return (
    <>
      <Typography variant={"h4"} sx={titleStyles}>Choose quiz type</Typography>
      {quizTypes.map((type) => {
        return (
          <Button
            variant='outlined'
            key={type}
            size='large'
            sx={btnStyles}
            onClick={() => startGame(type)}
          >
            {type}
          </Button>
        )
      })}
    </>
  )
}

export default QuizTypeSelector
