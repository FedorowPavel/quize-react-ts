import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {QuizStateProvider} from "./Components/HOC/QuizProvider";
import reportWebVitals from "./reportWebVitals";
import {QuizThemeProvider} from "./Components/HOC/ThemeProvider";

export const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QuizThemeProvider>
      <QueryClientProvider client={queryClient}>
        <QuizStateProvider>
          <App />
        </QuizStateProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </QuizThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
