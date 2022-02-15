import {createTheme, QuizTheme} from '@mui/material/styles';

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

export default quizTheme;
