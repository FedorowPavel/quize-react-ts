import {Card} from "@mui/material";
import React, {useCallback, useState} from "react";
import {IOption} from "../models/question";
import {getPrefix} from "../utils";
import {QuizActionsEnum} from "../models/quiz";
import {CorrectnessIndicatorIcon} from "./CorrectnessIndicatorIcon";
import {useQuiz} from "../CustomHooks/useQuiz";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  card: {
    padding: '14px',
    marginBottom: '24px',
    borderRadius: '12px',
    border: '2px solid rgba(96, 102, 208, 0.7)',
    boxShadow: 'none',
    color: 'rgba(96, 102, 208, 0.8)',
    fontSize: '18px',
    display: 'flex',
    columnGap: '40px',
    "&:hover": {
      backgroundColor: 'rgba(249, 168, 38, 1)',
      color: 'white',
      border: '2px solid rgba(249, 168, 38, 1)',
      cursor: 'pointer'
    },
    "& span:nth-of-type(2)": {
      flexGrow: '1'
    }
  },
  cardCorrect: {backgroundColor: '#60BF88', color: 'white', border: '2px solid #60BF88'},
  cardNotCorrect: {backgroundColor: '#EA8282', color: 'white', border: '2px solid #EA8282'}
})

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

  const getClasses = useCallback((option: IOption) => {
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
