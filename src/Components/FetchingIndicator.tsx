import {PuffLoader} from "react-spinners";
import React from "react";
import {css} from "@emotion/react";
import quizTheme from "../Mui/theme";

const override = css`
  display: block;
  margin: 15px;
  position: fixed;
  top: 0;
  left: 0;
`;

const FetchingIndicator: React.FC<{isFetching: boolean}> = ({isFetching}) => (
  <PuffLoader loading={isFetching} color={quizTheme.bgColors.lightGreen} size={30} css={override}/>
)

export default FetchingIndicator
