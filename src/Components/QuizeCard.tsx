import {Card} from "@mui/material";
import React, {FC} from "react";
import Tittle from "./Tittle";
import QuizCardContent from "./QuizCardContent";

const cardStyles = {
  width: 400,
  padding: "52px 32px 32px 32px",
  borderRadius: "24px",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "column"
}

const QuizeCard: FC = () => {
  return (
    <Card sx={cardStyles}>
      <Tittle title={"Country Quize"}/>
      <QuizCardContent/>
    </Card>
  )
}

export  default QuizeCard
