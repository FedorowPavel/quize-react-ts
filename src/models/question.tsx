export interface IQuestion {
  text: string,
  flag: string,
  options: IOption[]
}

export interface IOption {
  value: string,
  isCorrect: boolean
}
