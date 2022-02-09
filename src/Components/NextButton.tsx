import React, {FC} from "react";
import {Button} from "@mui/material";

const buttonStyles = {
  alignSelf: "flex-end"
}

export const QuizButton: FC<{isDisabled: boolean, text: string}> = ({isDisabled, text}) => (
    <Button
      variant="contained"
      disabled={isDisabled}
      color="success"
      sx={buttonStyles}
    >
      {text}
    </Button>
  )
