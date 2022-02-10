export interface IQuestion {
  text: string,
  options: IOption[]
}

export interface IOption {
  value: string,
  isCorrect: boolean
}
