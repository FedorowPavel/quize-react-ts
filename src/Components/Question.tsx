import {Box, Typography} from "@mui/material";
import React from "react";
import {QuizTypesEnum} from "../models/quiz";
import {useQuiz} from "../CustomHooks/useQuiz";
import {useTheme} from "@mui/styles";
import {QuizTheme} from "@mui/material/styles";

const Question: React.FC<{questionText: string}> = ({questionText}) => {
  const {state} = useQuiz()
  const theme = useTheme<QuizTheme>()

  return (
    <>
      {
        state.quizType === QuizTypesEnum.FLAG &&
        <Box
          sx={{
            width: '84px',
            height: '54px',
            marginBottom: '12px',
            border: `1px solid ${theme.txtColors.dark}`,
            background: `center / cover no-repeat url(${state.currentQuestion.flag})`,
          }}
      />
      }
      <Typography
        variant={"h4"}
        sx={{
          marginBottom: '20px',
          color: theme.txtColors.dark,
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
