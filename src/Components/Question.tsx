import {Typography} from "@mui/material";
import React from "react";

const Question: React.FC<{questionText: string}> = ({questionText}) => {
  return (
    <Typography
      variant={"h4"}
      sx={{
        marginBottom: '32px',
        color: 'rgba(47, 82, 123, 1)',
        fontSize: '24px',
        lineHeight: '32px',
        textTransform: 'capitalize',
        fontWeight: 'bold',
      }}
    >
      question text
    </Typography>
  )
}

export default Question
