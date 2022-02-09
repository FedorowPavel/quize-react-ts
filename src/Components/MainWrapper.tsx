import {Container} from "@mui/material";
import React from "react";
import BgImage from "../assets/img/background.png";

const containerStyles = {
  height: '100vh',
  width: '100vw',
  margin: 0,
  background: `center / cover no-repeat url(${BgImage})`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

const MainWrapper: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <Container sx={containerStyles}>
      {children}
    </Container>
  )

export default MainWrapper
