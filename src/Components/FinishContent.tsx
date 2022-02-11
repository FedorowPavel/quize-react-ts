import {Button, Container} from "@mui/material";
import Winner from "../assets/img/winner.svg";
import React, {FC} from "react";
import {useQuiz} from "../Context/quiz-context";

const FinishContent: FC = (): JSX.Element => {
  const quizCtx = useQuiz()
  return (
    <>
      <Container
        sx={{
          width: '238px',
          height: '128px',
          background: `center / contain no-repeat url(${Winner})`,
          marginBottom: '40px',
        }}
      />
      <span>RESULTS</span>
      <span>Your got {quizCtx.state.record} correct answers</span>
      <Button variant="outlined">Try again</Button>
    </>
  )
}

export default FinishContent
