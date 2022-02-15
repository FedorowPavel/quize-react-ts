import {Card} from "@mui/material";
import React, {useCallback, useState} from "react";
import {IOption} from "../models/question";
import {getPrefix} from "../utils";
import {QuizActionsEnum} from "../models/quiz";
import {CorrectnessIndicatorIcon} from "./CorrectnessIndicatorIcon";
import {useQuiz} from "../CustomHooks/useQuiz";
import {makeStyles} from "@mui/styles";
import {QuizTheme} from "@mui/material/styles";

const useStyles = makeStyles((theme: QuizTheme) => ({
  card: {
    padding: '14px',
    marginBottom: '24px',
    borderRadius: '12px',
    border: `2px solid ${theme.bgColors.regular}`,
    boxShadow: 'none',
    color: `${theme.txtColors.regular}`,
    fontSize: '18px',
    display: 'flex',
    columnGap: '40px',
    "&:hover": {
      backgroundColor: `${theme.bgColors.orange}`,
      color: `${theme.txtColors.white}`,
      border: `2px solid ${theme.bgColors.orange}`,
      cursor: 'pointer'
    },
    "& span:nth-of-type(2)": {
      flexGrow: '1'
    }
  },
  cardCorrect: {
    backgroundColor: theme.bgColors.correct,
    color: `${theme.txtColors.white}`,
    border: `2px solid ${theme.bgColors.correct}`
  },
  cardNotCorrect: {
    backgroundColor: theme.bgColors.notCorrect,
    color: `${theme.txtColors.white}`,
    border: `2px solid ${theme.bgColors.notCorrect}`
  }
}))

const AnswerOptions: React.FC<{options: IOption[]}> = ({options}): JSX.Element => {
  const {state, dispatch} = useQuiz()
  const [targetAnswer, setTargetAnswer] = useState<string>()
  const classes = useStyles();

  const answerHandler = (option: IOption) => {
    if(state.isAnswered) {
      return
    }
    setTargetAnswer(option.value)
    dispatch({type: QuizActionsEnum.SET_ANSWERED})
    if(option.isCorrect) {
      dispatch({type: QuizActionsEnum.SET_CORRECT})
    }
  }

  const getClasses = useCallback((option: IOption): string | undefined => {
    if(option.isCorrect && state.isAnswered) {
      return classes.cardCorrect
    }
    if(!option.isCorrect && state.isAnswered && targetAnswer === option.value) {
      return classes.cardNotCorrect
    }
  }, [options, state.isAnswered])

  return (
    options &&
      <>
        {options.map((option, index) => {
          return (
            <Card
              key={index}
              className={[classes.card, getClasses(option)].join(' ')}
              onClick={() => answerHandler(option)}
            >
              <span>{getPrefix(index)}</span>
              <span>{option.value}</span>
              <CorrectnessIndicatorIcon isTarget={targetAnswer === option.value} isCorrect={option.isCorrect}/>
            </Card>
          )
        })}
      </>
  )
}

export default AnswerOptions
