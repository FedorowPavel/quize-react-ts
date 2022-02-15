import {Typography} from "@mui/material";
import React from "react";
import quizTheme from "../Theme/theme";

const Tittle: React.FC<{title: string}> = ({title}) => {
  return (
    <Typography
      variant={"h4"}
      sx={{
        color: quizTheme.txtColors.white,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        position: 'absolute',
        top: '-60px',
        left: 0,
        fontSize: '36px',
        lineHeight: '54px',
      }}
    >
      {title}
    </Typography>
  )
}

export default Tittle
