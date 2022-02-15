import {Box, Button, Container, Typography} from "@mui/material";
import Winner from "../assets/img/winner.svg";
import React, {FC} from "react";
import {generateQuestion} from "../utils";
import {Country} from "../models/country";
import {queryClient} from "../index";
import {ANSWER_OPTIONS_COUNT, COUNTRIES_QUERY_KEY} from "../constants";
import {QuizActionsEnum} from "../models/quiz";
import {useQuiz} from "../CustomHooks/useQuiz";
import quizTheme from "../Mui/theme";

const FinishContent: FC = (): JSX.Element => {
  const {state, dispatch} = useQuiz()
  const countries = queryClient.getQueryData(COUNTRIES_QUERY_KEY)

  const resetGame = () => {
    dispatch({type: QuizActionsEnum.RESET_GAME})
    dispatch({type: QuizActionsEnum.SET_QUESTION, payload: generateQuestion(countries as Country[], ANSWER_OPTIONS_COUNT,state.quizType)})
  }

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: quizTheme.txtColors.dark
    }}
    >
      <Container
        sx={{
          width: '238px',
          height: '128px',
          background: `center / contain no-repeat url(${Winner})`,
          marginBottom: '40px',
        }}
      />
      <Typography
        paragraph={true}
        sx={{
          fontSize: '30px',
          fontWeight: 'bold'
      }}
      >
        RESULTS
      </Typography>
      <Box component="span" sx={{
        marginBottom: '40px',
        fontSize: '18px'
      }}>
        Your got
        <Box component="span" sx={{
          color: quizTheme.txtColors.green,
          fontSize: '36px',
          fontWeight: 'bold'
        }}> {state.record} </Box>
        correct answers!
      </Box>
      <Button
        variant="outlined"
        onClick={resetGame}
        sx={{
          color: quizTheme.txtColors.dark,
          border: `1px solid  ${quizTheme.bgColors.dark}`,
          boxSizing: 'border-box',
          borderRadius: '12px'
        }}
      >Try again</Button>
    </Container>
  )
};

export default FinishContent
