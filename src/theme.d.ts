import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface QuizTheme extends Theme {
    bgColors: {
      correct: string;
      notCorrect: string;
      whiteText: string;
      regular: string;
      dark: string;
      orange: string;
      lightGreen: string;
    },
    txtColors: {
      white: string;
      regular: string;
      dark: string;
      green: string
    };
  }

  interface QuizThemeOptions extends ThemeOptions {
    [key: string]: any;
  }

  export function createTheme(options?: QuizThemeOptions): QuizTheme;
}
