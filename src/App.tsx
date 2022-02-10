import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/MainWrapper";
import {useQuery} from "react-query";
import {fetchCountries} from "./api/api";
import {Country} from "./models/country";
import {BeatLoader} from "react-spinners";
import FetchingIndicator from "./Components/FetchingIndicator";
import {QuizProvider} from "./Context/quiz-context";
import React from "react";
import {Confetti} from "./Components/Confetti";


function App() {
  const { isLoading, data, isFetching } = useQuery<Country[]>(
    "countries",
    () => fetchCountries(),
    {
      refetchOnWindowFocus: false,
    });

  // const generateQuestion = (data: Country[]): IQuestion => {
  //   return {
  //     text: "Question text?",
  //     options: [
  //       {value: "First", isCorrect: false},
  //       {value: "Second", isCorrect: true},
  //       {value: "Third", isCorrect: false},
  //       {value: "Fourth", isCorrect: false},
  //     ]
  //   };
  // }

  return (
    <QuizProvider>
      <MainWrapper>
        {!isLoading && <QuizeCard/>}
        <BeatLoader loading={isLoading} color={'#fff'} size={20}/>
        <FetchingIndicator isFetching={isFetching}/>
        <Confetti/>
      </MainWrapper>
    </QuizProvider>
  );
}

export default App;
