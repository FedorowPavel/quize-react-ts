import React from 'react';
import QuizeCard from "./Components/QuizeCard";
import MainWrapper from "./Components/MainWrapper";
import {useQuery} from "react-query";
import {fetchCountries} from "./api/api";

function App() {
  const { isLoading } = useQuery("countries", () => fetchCountries());

  if (isLoading) return <span>"Loading..."</span>;

  return (
    <MainWrapper>
      <QuizeCard/>
    </MainWrapper>
  );
}

export default App;
