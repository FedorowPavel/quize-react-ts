import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/MainWrapper";
import {useQuery} from "react-query";
import {fetchCountries} from "./api/api";
import {Country} from "./models/country";
import {BeatLoader} from "react-spinners";
import FetchingIndicator from "./Components/FetchingIndicator";
import {CountriesContext} from "./Context/countriesContext";
import {CorrectnessContext, IsAnsweredContext} from "./Context/isAnswerContext";
import {useState} from "react";


function App() {
  const [isAnsweredContext, setIsAnsweredContext] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const { isLoading, data, isFetching } = useQuery<Country[]>(
    "countries",
    () => fetchCountries(),
    {
      // refetchInterval: 1000,
      // refetchOnWindowFocus: true,
    });

  return (
    <CountriesContext.Provider value={data}>
      <IsAnsweredContext.Provider value={[isAnsweredContext, setIsAnsweredContext]}>
        <CorrectnessContext.Provider value={[isCorrectAnswer, setIsCorrectAnswer]}>
          <MainWrapper>
            {!isLoading && <QuizeCard/>}
            <BeatLoader loading={isLoading} color={'#fff'} size={20}/>
            <FetchingIndicator isFetching={isFetching}/>
          </MainWrapper>
        </CorrectnessContext.Provider>
      </IsAnsweredContext.Provider>
    </CountriesContext.Provider>
  );
}

export default App;
