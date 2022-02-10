import {useQuiz} from "../Context/quiz-context";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import React, {FC} from "react";


export const CorrectnessIndicatorIcon: FC<{isTarget: boolean, isCorrect: boolean}> = ({isTarget, isCorrect}) => {
  const {state} = useQuiz()
  if(state.isAnswered && isCorrect) {
    return <CheckCircleOutlineRoundedIcon />
  }
  if(state.isAnswered && isTarget && !isCorrect) {
    return <CancelOutlinedIcon/>
  }
  return null
}
