import {useQuery} from "react-query";
import {Country} from "../models/country";
import {fetchCountries} from "../api/api";
import {COUNTRIES_QUERY_KEY} from "../constants";

export const useCountries = () => {
  const { isLoading, data, isFetching } = useQuery<Country[]>(
    COUNTRIES_QUERY_KEY,
    () => fetchCountries(),
    {
      refetchOnWindowFocus: false,
    });

  return {isLoading, data, isFetching}
}
