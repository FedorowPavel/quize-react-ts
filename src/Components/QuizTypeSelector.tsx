import React, {FC} from "react";
import {Button, Typography} from "@mui/material";
import {generateQuestion} from "../utils";
import {queryClient} from "../index";
import {Country} from "../models/country";
import {COUNTRIES_QUERY_KEY, quizTypes} from "../constants";
import {QuizActionsEnum, QuizTypesEnum} from "../models/quiz";
import {useQuiz} from "../CustomHooks/useQuiz";
import {makeStyles} from "@mui/styles";
import {QuizTheme} from "@mui/material/styles";

const useStyles = makeStyles((theme: QuizTheme) => ({
  button: {
    marginBottom: '40px',
    color: theme.txtColors.regular,
    border: `2px solid ${theme.txtColors.regular}`,
    height: '56px',
    borderRadius: '12px',
    ':hover': {
      border: `2px solid ${theme.bgColors.orange}`,
      backgroundColor: theme.bgColors.orange,
      color: theme.txtColors.white,
      cursor: 'pointer'
    }
  },
  tittle: {
    marginBottom: '40px',
    color: theme.txtColors.dark,
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 'bold',
  }
}));


const QuizTypeSelector: FC = (): JSX.Element => {
  const {dispatch} = useQuiz()
  const countries = queryClient.getQueryData(COUNTRIES_QUERY_KEY)
  const classes = useStyles();

  const startGame = (quizType: QuizTypesEnum): void => {
    dispatch({type: QuizActionsEnum.START_GAME, payload: quizType})
    dispatch({type: QuizActionsEnum.SET_QUESTION, payload: generateQuestion(countries as Country[], 4, quizType)})
  }

  return (
    <>
      <Typography variant={"h4"} className={classes.tittle}>Choose quiz type</Typography>
      {quizTypes.map((type) => {
        return (
          <Button
            variant='outlined'
            key={type}
            size='large'
            className={classes.button}
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
