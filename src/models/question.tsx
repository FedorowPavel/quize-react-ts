export interface IQuestion {
  text: string,
  options: IOption[]
}

export interface IOption {
  option: string,
  isCorrect: boolean
}
