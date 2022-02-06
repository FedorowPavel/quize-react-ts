import {Card} from "@mui/material";
import React from "react";

// TODO types
// @ts-ignore
const AnswerOptions: React.FC<{options: string[]}> = ({options}): JSX.Element[] => {
  const getPrefix = (index: number, isNumeric: boolean = false) => {
    return isNumeric ? index+1 : String.fromCharCode(65+index)
  }
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
            display: 'flex',
            columnGap: '40px',
            "&:hover": {
              backgroundColor: 'rgba(249, 168, 38, 1)',
              color: 'white',
              border: '2px solid rgba(249, 168, 38, 1)',
              cursor: 'pointer'
            }
          }}
        >
          <span>{getPrefix(index)}</span>
          <span>{option}</span>
        </Card>
      )
    })
  )
}

export default AnswerOptions
