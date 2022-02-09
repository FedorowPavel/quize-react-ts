import React from 'react';
import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/MainWrapper";
import {useQuery} from "react-query";
import {fetchCountries} from "./api/api";
import {Country} from "./models/country";
import {BeatLoader} from "react-spinners";
import FetchingIndicator from "./Components/FetchingIndicator";



function App() {
  const { isLoading, data, isFetching } = useQuery<Country[]>(
    "countries",
    () => fetchCountries(),
    {
      // refetchInterval: 1000,
      refetchOnWindowFocus: true,
    });

  return (
    <MainWrapper>
      {!isLoading && <QuizeCard/>}
      <BeatLoader loading={isLoading} color={'#fff'} size={20}/>
      <FetchingIndicator isFetching={isFetching}/>
    </MainWrapper>
  );
}

export default App;
