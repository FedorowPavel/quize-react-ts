import {createContext} from "react";
import {Country} from "../models/country";

export const CountriesContext = createContext<Country[] | undefined>(undefined)
