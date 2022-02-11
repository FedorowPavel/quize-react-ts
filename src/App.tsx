import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/MainWrapper";
import {BeatLoader} from "react-spinners";
import FetchingIndicator from "./Components/FetchingIndicator";
import {useQuiz} from "./Context/quiz-context";
import React, {useEffect} from "react";
import {Confetti} from "./Components/Confetti";
import {useCountries} from "./CustomHooks/useCountries";
import {generateQuestion} from "./utils";
import {QuizActionsEnum} from "./models/quiz";


const App: () => (JSX.Element | null) = (): JSX.Element | null => {
  const {isLoading, data, isFetching} = useCountries()
  const quizCtx = useQuiz()

  useEffect(() => {
    if(data) {
      const question = generateQuestion(data, 4)
      quizCtx.dispatch({type: QuizActionsEnum.SET_QUESTION, payload: question})
    }
  }, [data])

    return (
          <MainWrapper>
            {/*{!isLoading && <QuizeCard question={generateQuestion(data!,  4)}/>}*/}
            {!isLoading && <QuizeCard />}
            <BeatLoader loading={isLoading} color={'#fff'} size={20}/>
            <FetchingIndicator isFetching={isFetching}/>
            <Confetti/>
          </MainWrapper>
    );
}

export default App;
