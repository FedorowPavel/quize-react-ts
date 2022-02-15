import {Typography} from "@mui/material";
import React from "react";
import {useTheme} from "@mui/styles";
import {QuizTheme} from "@mui/material/styles";

const Tittle: React.FC<{title: string}> = ({title}) => {
  const theme = useTheme<QuizTheme>()
  return (
    <Typography
      variant={"h4"}
      sx={{
        color: theme.txtColors.white,
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
