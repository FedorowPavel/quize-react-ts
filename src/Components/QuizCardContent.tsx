import React, {FC} from "react";
import {useQuiz} from "../Context/quiz-context";
import FinishContent from "./FinishContent";
import GameContent from "./GameContent";

const QuizCardContent: FC = (): JSX.Element => {
  const quizCtx = useQuiz()

 return !quizCtx.state.isFinished ? <GameContent/> : <FinishContent/>
}

export default QuizCardContent
