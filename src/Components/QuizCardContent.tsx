import React, {FC} from "react";
import FinishContent from "./FinishContent";
import GameContent from "./GameContent";
import {useQuiz} from "../CustomHooks/useQuiz";

const QuizCardContent: FC = (): JSX.Element => {
  const {state} = useQuiz()

 return !state.isFinished ? <GameContent/> : <FinishContent/>
}

export default QuizCardContent
