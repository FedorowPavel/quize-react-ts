import {Box} from "@mui/material";
import React from "react";

const Logo: React.FC<{img: string}> = ({img}) => {
  return (
    <Box
      sx={{
        width: '160px',
        height: '140px',
        background: `center / contain no-repeat url(${img})`,
        position: 'absolute',
        top: '-100px',
        right: '20px'
      }}
    />
  )
}

export default Logo
