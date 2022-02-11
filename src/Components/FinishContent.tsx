import {Button, Container} from "@mui/material";
import Winner from "../assets/img/winner.svg";
import React, {FC} from "react";
import {useQuiz} from "../Context/quiz-context";
import {ANSWER_OPTIONS_COUNT, COUNTRIES_QUERY_KEY, QuizActionsEnum} from "../models/quiz";
import {generateQuestion} from "../utils";
import {Country} from "../models/country";
import {queryClient} from "../index";

const FinishContent: FC = (): JSX.Element => {
  const {state, dispatch} = useQuiz()
  const countries = queryClient.getQueryData(COUNTRIES_QUERY_KEY)

  const resetGame = () => {
    dispatch({type: QuizActionsEnum.RESET_GAME})
    dispatch({type: QuizActionsEnum.SET_QUESTION, payload: generateQuestion(countries as Country[], ANSWER_OPTIONS_COUNT)})
  }

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
      <span>Your got {state.record} correct answers</span>
      <Button variant="outlined" onClick={resetGame}>Try again</Button>
    </>
  )
}

export default FinishContent
