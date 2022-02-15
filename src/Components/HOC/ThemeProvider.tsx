import {createTheme} from "@mui/material/styles";
import {QuizTheme} from '@mui/material/styles';
import {QuizProviderProps} from "../../models/quiz";
import {ThemeProvider} from "@mui/styles";

function QuizThemeProvider({children}: QuizProviderProps) {
  const quizTheme: QuizTheme = createTheme({
    bgColors: {
      correct: '#60BF88',
      notCorrect: '#EA8282',
      regular: '#6066d0b3',
      dark: '#1D355DFF',
      orange: '#f9a826',
      lightGreen: '#7eff24'
    },
    txtColors: {
      white: '#fff',
      regular: '#6066d0cc',
      dark: '#1D355DFF',
      green: '#60BF88FF'
    }
  });

  return <ThemeProvider theme={quizTheme}>{children}</ThemeProvider>
}

export {QuizThemeProvider}
