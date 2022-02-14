import React, {FC} from "react";
import {COUNTRIES_QUERY_KEY, QuizActionsEnum, quizTypes, QuizTypesEnum} from "../models/quiz";
import {useQuiz} from "../Context/quiz-context";
import {Button, Typography} from "@mui/material";
import {generateQuestion} from "../utils";
import {queryClient} from "../index";
import {Country} from "../models/country";

const btnStyles = {
  marginBottom: '40px',
  backgroundColor: 'rgba(47, 82, 123, 1)',
}

const titleStyles = {
  marginBottom: '20px',
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
            variant='contained'
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
