import React from "react";

import styles from "./VideoContainer.module.css";

import colors from "../../../colors";

import { Typography, useMediaQuery, Button } from "@material-ui/core";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.teal,
    },
    secondary: {
      main: colors.red,
    },
  },
});

const VideoContainer = () => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isIpad = useMediaQuery("(max-width:1024px)");
  return (
    <MuiThemeProvider theme={theme}>
      <div className={styles.container} style={{ background: colors.violet }}>
        <div className={styles.txtContainer}>
          <Typography
            style={{
              color: colors.red,
              paddingBottom: isMobile ? "1rem" : isIpad ? "2rem" : "5rem",
            }}
            variant={isMobile ? "h4" : isIpad ? "h4" : "h2"}
            align={isMobile ? "center" : "right"}
          >
            Take The First Step To <br />
            Learn With Us
          </Typography>
          <div className={styles.bodyContainer}>
            <Typography
              color="textPrimary"
              variant={isIpad ? "h6" : "h5"}
              align={isMobile ? "center" : "right"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              alias vel nisi, dolores praesentium quia voluptatibus tenetur nemo
              quo cupiditate debitis necessitatibus eos sit sequi eveniet quasi,
              cumque ea adipisci.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{
                color: "rgb(255, 255, 255)",
                margin: isMobile ? "2rem auto" : "2rem 0 0 auto",
                width: "fit-content",
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default VideoContainer;
