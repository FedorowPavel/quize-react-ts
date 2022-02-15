import {createTheme, QuizTheme} from '@mui/material/styles';

const quizTheme: QuizTheme = createTheme({
  bgColors: {
    correct: '#60BF88',
    notCorrect: '#EA8282',
    regular: 'rgba(96, 102, 208, 0.7)',
    orange: 'rgba(249, 168, 38, 1)'
  },
  txtColors: {
    white: '#fff',
    regular: 'rgba(96, 102, 208, 0.8)',
  }
});

export default quizTheme;
