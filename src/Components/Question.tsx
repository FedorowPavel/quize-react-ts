import {Typography} from "@mui/material";
import React from "react";

const Question: React.FC<{questionText: string}> = ({questionText}) => {
  return (
    <Typography
      variant={"h4"}
      sx={{
        marginBottom: '20px',
        color: 'rgba(47, 82, 123, 1)',
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 'bold',
      }}
    >
      {questionText} is the capital of
    </Typography>
  )
}

export default Question
