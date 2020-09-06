import React from "react";

import colors from "../../../colors";

import styles from "./Header.module.scss";

import { Button, useMediaQuery } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.teal,
    },
  },
});

const Header = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.header}>
        <div className={styles.everythingGoesInThisDiv}>
          <div style={{ display: isMobile ? "block" : "none" }}>
            <img
              src={require("../../../../Assets/actuallyUsedImages/homepage_phone.png")}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className={styles.headerTxt}>
            <p> The Goal Of Education Is The Advantage Of Knowledge</p>
            <h1>
              Take Better Education From The <br /> World's Best University
            </h1>
          </div>
          <Button
            variant="contained"
            color="primary"
            href="#courses"
            style={{
              color: "rgb(255, 255, 255)",
              margin: "2rem auto 0 auto",
              width: "fit-content",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Header;
