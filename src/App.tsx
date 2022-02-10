import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/MainWrapper";
import {useQuery} from "react-query";
import {fetchCountries} from "./api/api";
import {Country} from "./models/country";
import {BeatLoader} from "react-spinners";
import FetchingIndicator from "./Components/FetchingIndicator";
import {CorrectnessContext, IsAnsweredContext} from "./Context/answerContext";
import {useState} from "react";
import {IQuestion} from "./models/question";


function App() {
  const [isAnsweredContext, setIsAnsweredContext] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const { isLoading, data, isFetching } = useQuery<Country[]>(
    "countries",
    () => fetchCountries(),
    {
      // refetchInterval: 1000,
      refetchOnWindowFocus: false,
    });

  const generateQuestion = (data: Country[]): IQuestion => {
    return {
      text: "Question text?",
      options: [
        {value: "First", isCorrect: false},
        {value: "Second", isCorrect: true},
        {value: "Third", isCorrect: false},
        {value: "Fourth", isCorrect: false},
      ]
    };
  }

  return (
      <IsAnsweredContext.Provider value={[isAnsweredContext, setIsAnsweredContext]}>
        <CorrectnessContext.Provider value={[isCorrectAnswer, setIsCorrectAnswer]}>
          <MainWrapper>
            {!isLoading && <QuizeCard question={generateQuestion(data!)}/>}
            <BeatLoader loading={isLoading} color={'#fff'} size={20}/>
            <FetchingIndicator isFetching={isFetching}/>
          </MainWrapper>
        </CorrectnessContext.Provider>
      </IsAnsweredContext.Provider>
  );
}

export default App;
