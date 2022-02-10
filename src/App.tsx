import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/MainWrapper";
import {BeatLoader} from "react-spinners";
import FetchingIndicator from "./Components/FetchingIndicator";
import {QuizProvider} from "./Context/quiz-context";
import React from "react";
import {Confetti} from "./Components/Confetti";
import {useCountries} from "./CustomHooks/useCountries";
import {Country} from "./models/country";
import {getRandomNumbers, mixArray as mixOptions} from "./utils";


const App: () => (JSX.Element | null) = (): JSX.Element | null => {
  const {isLoading, data, isFetching} = useCountries()

  const generateQuestion = (data: Country[], countOfOptions: number): any => {
    const countryIndexes = getRandomNumbers(0, data!.length - 1, countOfOptions)
    return {
      text: data[countryIndexes[0]].capital,
      options: mixOptions(countryIndexes.map((countyIndex) => {
        return {
          value: data[countyIndex].name.common,
          isCorrect: countyIndex === countryIndexes[0]
        }
      }))
    }
  }

    return (
       <QuizProvider>
          <MainWrapper>
            {!isLoading && <QuizeCard question={generateQuestion(data!,  4)}/>}
              <BeatLoader loading={isLoading} color={'#fff'} size={20}/>
              <FetchingIndicator isFetching={isFetching}/>
              <Confetti/>
          </MainWrapper>
      </QuizProvider>
    );
}

export default App;
