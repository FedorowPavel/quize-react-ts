export const getPrefix = (index: number, isNumeric: boolean = false) => {
  return isNumeric ? index+1 : String.fromCharCode(65+index)
}
