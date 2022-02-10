import {useQuery} from "react-query";
import {Country} from "../models/country";
import {fetchCountries} from "../api/api";

export const useCountries = () => {
  const { isLoading, data, isFetching } = useQuery<Country[]>(
    "countries",
    () => fetchCountries(),
    {
      refetchOnWindowFocus: false,
    });

  return {isLoading, data, isFetching}
}
