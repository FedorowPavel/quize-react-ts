import {createContext} from "react";

export const IsAnsweredContext = createContext<[boolean, any] | undefined>(undefined)

export const CorrectnessContext = createContext<[boolean, any] | undefined>(undefined)
