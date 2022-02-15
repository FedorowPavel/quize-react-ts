import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface QuizTheme extends Theme {
    bgColors: {
      correct: string;
      notCorrect: string;
      whiteText: string;
      regular: string;
      orange: string;
    },
    txtColors: {
      white: string;
      regular: string;
      red: string;
    };
  }
  interface QuizThemeOptions extends ThemeOptions {
    [key: string]: any;
  }

  export function createTheme(options?: QuizThemeOptions): QuizTheme;
}
