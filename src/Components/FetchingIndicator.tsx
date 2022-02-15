import {PuffLoader} from "react-spinners";
import React from "react";
import {css} from "@emotion/react";
import {useTheme} from "@mui/styles";
import {QuizTheme} from "@mui/material/styles";

const override = css`
  display: block;
  margin: 15px;
  position: fixed;
  top: 0;
  left: 0;
`;

const FetchingIndicator: React.FC<{isFetching: boolean}> = ({isFetching}) => {
  const theme = useTheme<QuizTheme>()

  return (
    < PuffLoader
      loading = {isFetching}
      color = {theme.bgColors.lightGreen}
      size = {30}
      css = {override}
    />
  )
}

export default FetchingIndicator
