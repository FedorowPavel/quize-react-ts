import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/HOC/MainWrapper";
import {BeatLoader} from "react-spinners";
import FetchingIndicator from "./Components/FetchingIndicator";
import React from "react";
import {Confetti} from "./Components/Confetti";
import {useCountries} from "./CustomHooks/useCountries";


const App: () => (JSX.Element | null) = (): JSX.Element | null => {
  const {isLoading, isFetching} = useCountries()

  return (
    <MainWrapper>
      {!isLoading && <QuizeCard />}
      <BeatLoader loading={isLoading} color={'#fff'} size={20}/>
      <FetchingIndicator isFetching={isFetching}/>
      <Confetti/>
    </MainWrapper>
  );
}

export default App;
