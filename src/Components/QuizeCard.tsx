import {Card} from "@mui/material";
import React, {useContext, useState} from "react";
import Logo from "./Logo";
import Globe from "../assets/img/globe.svg"
import Tittle from "./Tittle";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import {CountriesContext} from "../Context/countriesContext";
import {QuizButton} from "./NextButton";
import {IQuestion} from "../models/question";
import {CorrectnessContext, IsAnsweredContext} from "../Context/answerContext";

const cardStyles = {
  width: 400,
  padding: "52px 32px 32px 32px",
  borderRadius: "24px",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column"
}

const QuizeCard: React.FC = () => {
  const [isAnswered] = useContext(IsAnsweredContext as any)
  const [isCorrect] = useContext(CorrectnessContext as any)
  console.log(isCorrect)

  const countries = useContext(CountriesContext)

  const quizeTitle = "Country Quize";
  const question: IQuestion = {
    text: "Question text?",
    options: [
      {option: "First", isCorrect: false},
      {option: "Second", isCorrect: true},
      {option: "Third", isCorrect: false},
      {option: "Fourth", isCorrect: false},
    ]
  };

  return (
    <Card sx={cardStyles}>
      <Tittle title={quizeTitle}/>
      <Logo img={Globe}/>
      <Question questionText={question.text}/>
      <AnswerOptions options={question.options}/>
      <QuizButton isDisabled={!isAnswered} text={'Next'}/>
    </Card>
  )
}

export  default QuizeCard
