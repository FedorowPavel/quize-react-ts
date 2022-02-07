import {Card} from "@mui/material";
import React from "react";
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
  overflow: "visible"
}

const QuizeCard: React.FC = () => {
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
    </Card>
  )
}

export  default QuizeCard
