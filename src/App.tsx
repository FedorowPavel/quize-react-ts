import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/MainWrapper";
import {useQuery} from "react-query";
import {fetchCountries} from "./api/api";
import {Country} from "./models/country";
import {BeatLoader} from "react-spinners";
import FetchingIndicator from "./Components/FetchingIndicator";
import {IQuestion} from "./models/question";
import {QuizProvider} from "./Context/quiz-context";


function App() {
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
    <QuizProvider>
      <MainWrapper>
        {!isLoading && <QuizeCard/>}
        <BeatLoader loading={isLoading} color={'#fff'} size={20}/>
        <FetchingIndicator isFetching={isFetching}/>
      </MainWrapper>
    </QuizProvider>
  );
}

export default App;
