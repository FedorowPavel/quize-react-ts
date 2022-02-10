import {Card} from "@mui/material";
import React, {useContext, useState} from "react";
import {IOption} from "../models/question";
import {CorrectnessContext, IsAnsweredContext} from "../Context/answerContext";
import {getPrefix} from "../utils";
import styles from './AnswerOptions.module.scss'

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
  const [targetAnswer, setTargetAnswer] = useState<string>()
  const [isAnswered, setIsAnswered] = useContext(IsAnsweredContext as any)
  const [isCorrect, setIsCorrect] = useContext(CorrectnessContext as any)

  const answerHandler = (option: IOption) => {
    setIsAnswered(true)
    setIsCorrect(option.isCorrect)
    setTargetAnswer(option.value)
  }
  console.log('[AnswerOptions] targetAnswer', targetAnswer)
  console.log('[AnswerOptions] isAnswered', isAnswered)
  console.log('[AnswerOptions] isCorrect', isCorrect)

  const getStyles = (option: IOption) => {
    if(option.isCorrect && isAnswered) {
      return {backgroundColor: 'green', color: 'white', border: '2px solid green'}
    }
    if(!option.isCorrect && isAnswered && targetAnswer === option.value) {
      return {backgroundColor: 'red', color: 'white', border: '2px solid red'}
    }
  }

  return (
    options.map((option, index) => {
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
