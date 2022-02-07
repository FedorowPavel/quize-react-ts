import axios from "axios";
import {Country} from "../models/country";

export const fetchCountries = async (): Promise<Country[]> => {
  return await axios
    .get( 'https://restcountries.com/v3.1/all')
    .then(data => data.data)
}
