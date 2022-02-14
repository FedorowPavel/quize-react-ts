import {Box, Typography} from "@mui/material";
import React from "react";
import {QuizTypesEnum} from "../models/quiz";
import {useQuiz} from "../CustomHooks/useQuiz";

const Question: React.FC<{questionText: string}> = ({questionText}) => {
  const {state} = useQuiz()

  return (
    <>
      {
        state.quizType === QuizTypesEnum.FLAG &&
        <Box
          sx={{
            width: '84px',
            height: '54px',
            marginBottom: '12px',
            border: '1px solid gray',
            background: `center / cover no-repeat url(${state.currentQuestion.flag})`,
          }}
      />
      }
      <Typography
        variant={"h4"}
        sx={{
          marginBottom: '20px',
          color: 'rgba(47, 82, 123, 1)',
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 'bold',
        }}
      >
        {questionText}
      </Typography>
    </>

  )
};

export default Question
