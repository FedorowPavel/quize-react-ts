import {Card} from "@mui/material";
import React, {useState} from "react";
import {IOption} from "../models/question";
import {getPrefix} from "../utils";
import {useQuiz} from "../Context/quiz-context";
import {QuizActionsEnum} from "../models/quiz";

const cardStyles = {
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
  }
}

// TODO types
// @ts-ignore
const AnswerOptions: React.FC<{options: IOption[]}> = ({options}): JSX.Element[] => {
  const {state, dispatch} = useQuiz()
  const [targetAnswer, setTargetAnswer] = useState<string>()

  const answerHandler = (option: IOption) => {
    setTargetAnswer(option.value)
    dispatch({type: QuizActionsEnum.SET_ANSWERED})
    if(option.isCorrect) {
      dispatch({type: QuizActionsEnum.SET_CORRECT})
    }
  }

  const getStyles = (option: IOption) => {
    if(option.isCorrect && state.isAnswered) {
      return {backgroundColor: '#60BF88', color: 'white', border: '2px solid #60BF88'}
    }
    if(!option.isCorrect && state.isAnswered && targetAnswer === option.value) {
      return {backgroundColor: '#EA8282', color: 'white', border: '2px solid #EA8282'}
    }
  }

  return (
    options && options.map((option, index) => {
      return (
        <Card
          key={index}
          sx={cardStyles}
          style={getStyles(option)}
          onClick={() => answerHandler(option)}
        >
          <span>{getPrefix(index)}</span>
          <span>{option.value}</span>
        </Card>
      )
    })
  )
}

export default AnswerOptions
