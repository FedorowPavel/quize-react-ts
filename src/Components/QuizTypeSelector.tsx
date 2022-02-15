import React, {FC} from "react";
import {Button, Typography} from "@mui/material";
import {generateQuestion} from "../utils";
import {queryClient} from "../index";
import {Country} from "../models/country";
import {COUNTRIES_QUERY_KEY, quizTypes} from "../constants";
import {QuizActionsEnum, QuizTypesEnum} from "../models/quiz";
import {useQuiz} from "../CustomHooks/useQuiz";
import quizTheme from "../Mui/theme";

const btnStyles = {
  marginBottom: '40px',
  color: quizTheme.txtColors.regular,
  border: `2px solid ${quizTheme.txtColors.regular}`,
  height: '56px',
  borderRadius: '12px',
  ':hover': {
    border: `2px solid ${quizTheme.bgColors.orange}`,
    backgroundColor: quizTheme.bgColors.orange,
    color: quizTheme.txtColors.white,
    cursor: 'pointer'
  }
}

const titleStyles = {
  marginBottom: '40px',
  color: quizTheme.txtColors.dark,
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
