import {Card} from "@mui/material";
import React from "react";

// TODO types
// @ts-ignore
const AnswerOptions: React.FC<{options: string[]}> = ({options}): JSX.Element[] => {
  const optionPrefixes = ["A", "B", "C", "D"]
  return (
    options.map((option, index) => {
      return (
        <Card
          key={index}
          sx={{
            padding: '14px',
            marginBottom: '24px',
            borderRadius: '12px',
            border: '2px solid rgba(96, 102, 208, 0.7)',
            boxShadow: 'none',
            color: 'rgba(96, 102, 208, 0.8)',
            fontSize: '18px',
            "&:hover": {
              backgroundColor: 'rgba(249, 168, 38, 1)',
              color: 'white',
              border: '2px solid rgba(249, 168, 38, 1)',
              cursor: 'pointer'
            }
          }}
        >
          {optionPrefixes[index] + ' ' + option}
        </Card>
      )
    })
  )
}

export default AnswerOptions
