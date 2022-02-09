import {Button, Card} from "@mui/material";
import React, {useState} from "react";
import Logo from "./Logo";
import Globe from "../assets/img/globe.svg"
import Tittle from "./Tittle";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";

const cardStyles = {
  width: 400,
  padding: "52px 32px 32px 32px",
  borderRadius: "24px",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column"
}

const buttonStyles = {
  alignSelf: "flex-end"
}

const QuizeCard: React.FC = () => {
  const [isAnsweredCorrect, setIsAnsweredCorrect] = useState(false)

  const quizeTitle = "Country Quize";
  const question = {
    text: "Question text?",
    options: ["First", "Second", "Third", "Fourth"],
    correct: "First"
  };

  return (
    <Card sx={cardStyles}>
      <Tittle title={quizeTitle}/>
      <Logo img={Globe}/>
      <Question questionText={question.text}/>
      <AnswerOptions options={question.options}/>
      <Button variant="contained" disabled={!isAnsweredCorrect} color="success" sx={buttonStyles}>Next</Button>
    </Card>
  )
}

export  default QuizeCard
