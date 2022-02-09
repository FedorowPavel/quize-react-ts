import {Card} from "@mui/material";
import React, {useContext} from "react";
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
  const [isAnswered, setIsAnswered] = useContext(IsAnsweredContext as any)
  const [isCorrect, setIsCorrect] = useContext(CorrectnessContext as any)

  const answerHandler = (option: IOption) => {
    setIsAnswered(true)
    setIsCorrect(option.isCorrect)
  }

  return (
    options.map((option, index) => {
      return (
        <Card
          key={index}
          sx={cardStyles}
          className={isAnswered && styles.correct}
          onClick={() => answerHandler(option)}
        >
          <span>{getPrefix(index)}</span>
          <span>{option.option}</span>
        </Card>
      )
    })
  )
}

export default AnswerOptions
