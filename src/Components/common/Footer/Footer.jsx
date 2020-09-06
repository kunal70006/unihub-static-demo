import React from "react";
import styles from "./Footer.module.css";
import { makeStyles } from "@material-ui/core/styles";

import colors from "../../colors";

import {
  Facebook,
  Instagram,
  YouTube,
  EmailRounded,
  LinkedIn,
} from "@material-ui/icons";

import {
  IconButton,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "rgb(255,255,255)",
  },
});

const Footer = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:767px)");
  const isIpad = useMediaQuery("(max-width:1024px)");

  if (isMobile) {
    return (
      <footer>
        <div
          className={styles.footerContainer}
          style={{ background: colors.blue }}
        >
          <div>
            <Button
              color="primary"
              classes={{ root: classes.root }}
              size="small"
              style={{
                margin: "0 5px",
              }}
            >
              Contact Us
            </Button>

            <Button
              color="primary"
              classes={{ root: classes.root }}
              size="small"
              style={{
                margin: "0 5px",
              }}
              href="/about"
            >
              About
            </Button>

            <Button
              color="primary"
              classes={{ root: classes.root }}
              size="small"
              style={{
                margin: "0 5px",
              }}
            >
              Terms
            </Button>

            <Button
              color="primary"
              classes={{ root: classes.root }}
              size="small"
              style={{
                margin: "0 5px",
              }}
            >
              Privacy
            </Button>
          </div>
          <div className={styles.logoContainer}>
            <img
              src={require("../../../Assets/actuallyUsedImages/logo_white.png")}
              alt="logo"
              style={{ height: "200px", width: "200px" }}
            />
            <div style={{ width: "125%" }}>
              <Typography
                variant="subtitle2"
                style={{ color: "rgb(255,255,255)" }}
                align="center"
              >
                UNIHUB, a website designed by college students for fellow
                college students. It is a venture which aims at being a single-
                handed platform where there is availability of literature
                strictly adhering to university syllabi and comprehensive
                learning provided through crisp notes, animated videos and
                concepts explained through various audio-visual mediums.
              </Typography>
            </div>
          </div>

          <div className={styles.formContainer}>
            <div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="email"
                style={{ color: "rgb(255,255,255)" }}
              >
                <EmailRounded />
              </IconButton>
              <Typography
                variant="caption"
                style={{ color: "rgb(255,255,255)" }}
              >
                Leave us a message, we will get back to you
              </Typography>
            </div>
            <input className={styles.input} type="text" placeholder="Name" />
            <input className={styles.input} type="text" placeholder="Email" />
            <input className={styles.input} type="text" placeholder="Message" />

            <Button
              style={{
                margin: isMobile ? "0 auto 2rem auto" : "0 auto -8rem auto",
              }}
              color="inherit"
              variant="outlined"
              classes={{ root: classes.root }}
            >
              Submit
            </Button>
          </div>

          <div className={styles.supportContainer}>
            <div className={styles.icons}>
              <IconButton edge="start" color="inherit" aria-label="fb">
                <Facebook
                  style={{ color: "rgb(255, 255, 255)", margin: "0 10px" }}
                  fontSize="large"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="instagram">
                <Instagram
                  style={{ color: "rgb(255, 255, 255)", margin: "0  10px" }}
                  fontSize="large"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="yt">
                <YouTube
                  style={{ color: "rgb(255, 255, 255)", margin: "0 10px" }}
                  fontSize="large"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="linkdn">
                <LinkedIn
                  style={{ color: "rgb(255, 255, 255)", margin: "0  10px" }}
                  fontSize="large"
                />
              </IconButton>
            </div>
            <div className={styles.copyright}>
              <Typography
                variant="caption"
                style={{ color: "rgb(255,255,255)", cursor: "pointer" }}
                onClick={() =>
                  (window.location.href =
                    "https://linkedin.com/in/namangarg5261")
                }
              >
                COPYRIGHT © 2020 UNIHUB - ALL RIGHTS RESERVED <br />
                Designed and developed by Naman Garg and team
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    );
  } else if (isIpad) {
    return (
      <footer style={{ background: colors.blue }}>
        <div className={styles.footerContainer}>
          <div className={styles.logoContainer}>
            <img
              src={require("../../../Assets/actuallyUsedImages/logo_white.png")}
              alt="logo"
              style={{ height: "200px", width: "200px", cursor: "pointer" }}
              onClick={() => (window.location.href = "/")}
            />
            <div>
              <Typography
                variant="subtitle2"
                style={{ color: "rgb(255,255,255)" }}
              >
                UNIHUB, a website designed by college students for fellow
                college students. It is a venture which aims at being a single-
                handed platform where there is availability of literature
                strictly adhering to university syllabi and comprehensive
                learning provided through crisp notes, animated videos and
                concepts explained through various audio-visual mediums.
              </Typography>
            </div>

            <div className={styles.icons}>
              <IconButton edge="start" color="inherit" aria-label="fb">
                <Facebook
                  style={{ color: "rgb(255, 255, 255)", margin: "0 10px" }}
                  fontSize="small"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="instagram">
                <Instagram
                  style={{ color: "rgb(255, 255, 255)", margin: "0 10px" }}
                  fontSize="small"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="yt">
                <YouTube
                  style={{ color: "rgb(255, 255, 255)", margin: "0 10px" }}
                  fontSize="small"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="linkdn">
                <LinkedIn
                  style={{ color: "rgb(255, 255, 255)", margin: "0 10px" }}
                  fontSize="small"
                />
              </IconButton>
            </div>

            <div>
              <Button
                color="primary"
                classes={{ root: classes.root }}
                size="small"
                style={{ margin: "1rem 0" }}
              >
                Contact Us
              </Button>

              <Button
                color="primary"
                classes={{ root: classes.root }}
                size="small"
                style={{ margin: "1rem 0" }}
                onClick={() => (window.location.href = "/about")}
              >
                About
              </Button>

              <Button
                color="primary"
                classes={{ root: classes.root }}
                size="small"
                style={{ margin: "1rem 0" }}
              >
                Terms
              </Button>

              <Button
                color="primary"
                classes={{ root: classes.root }}
                size="small"
                style={{ margin: "1rem 0" }}
              >
                Privacy
              </Button>
            </div>
          </div>

          <div className={styles.formContainer}>
            <div style={{ marginBottom: "1rem" }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="email"
                style={{ color: "rgb(255,255,255)" }}
              >
                <EmailRounded />
              </IconButton>
              <Typography
                variant="caption"
                style={{ color: "rgb(255,255,255)" }}
              >
                Leave us a message, we will get back to you
              </Typography>
            </div>
            <input className={styles.input} type="text" placeholder="Name" />
            <input className={styles.input} type="text" placeholder="Email" />
            <input className={styles.input} type="text" placeholder="Message" />

            <Button
              style={{ margin: "0 auto 2rem auto" }}
              color="inherit"
              variant="outlined"
              classes={{ root: classes.root }}
            >
              Submit
            </Button>

            <div className={styles.copyright}>
              <Typography
                variant="caption"
                style={{ color: "rgb(255,255,255)", cursor: "pointer" }}
                onClick={() =>
                  (window.location.href =
                    "https://linkedin.com/in/namangarg5261")
                }
              >
                COPYRIGHT © 2020 UNIHUB - ALL RIGHTS RESERVED <br />
                Designed and developed by Naman Garg and team
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    );
  } else {
    return (
      <footer>
        <div
          className={styles.footerContainer}
          style={{ background: colors.blue }}
        >
          <div className={styles.logoContainer}>
            <img
              src={require("../../../Assets/actuallyUsedImages/logo_white.png")}
              alt="logo"
              style={{ cursor: "pointer", height: "200px", width: "200px" }}
              onClick={() => (window.location.href = "/")}
            />
            <div>
              <Typography
                variant="subtitle2"
                style={{ color: "rgb(255,255,255)" }}
              >
                UNIHUB, a website designed by college students for fellow
                college students. It is a venture which aims at being a single-
                handed platform where there is availability of literature
                strictly adhering to university syllabi and comprehensive
                learning provided through crisp notes, animated videos and
                concepts explained through various audio-visual mediums.
              </Typography>
            </div>
            <div>
              <Button
                color="primary"
                classes={{ root: classes.root }}
                size="small"
                style={{ marginRight: "20px", marginTop: "3rem" }}
              >
                Contact Us
              </Button>

              <Button
                color="primary"
                classes={{ root: classes.root }}
                size="small"
                style={{ marginRight: "20px", marginTop: "3rem" }}
                onClick={() => (window.location.href = "/about")}
              >
                About
              </Button>

              <Button
                color="primary"
                classes={{ root: classes.root }}
                size="small"
                style={{ marginRight: "20px", marginTop: "3rem" }}
              >
                Terms
              </Button>

              <Button
                color="primary"
                classes={{ root: classes.root }}
                size="small"
                style={{ marginRight: "20px", marginTop: "3rem" }}
              >
                Privacy
              </Button>
            </div>
          </div>

          <div className={styles.supportContainer}>
            <div className={styles.icons}>
              <IconButton edge="start" color="inherit" aria-label="fb">
                <Facebook
                  style={{ color: "rgb(255, 255, 255)" }}
                  fontSize="large"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="instagram">
                <Instagram
                  style={{ color: "rgb(255, 255, 255)", marginLeft: "10px" }}
                  fontSize="large"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="yt">
                <YouTube
                  style={{ color: "rgb(255, 255, 255)", marginLeft: "10px" }}
                  fontSize="large"
                />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="linkdn">
                <LinkedIn
                  style={{ color: "rgb(255, 255, 255)", marginLeft: "10px" }}
                  fontSize="large"
                />
              </IconButton>
            </div>
            <div className={styles.copyright}>
              <Typography
                variant="caption"
                style={{ color: "rgb(255,255,255)", cursor: "pointer" }}
                onClick={() =>
                  (window.location.href =
                    "https://linkedin.com/in/namangarg5261")
                }
              >
                COPYRIGHT © 2020 UNIHUB - ALL RIGHTS RESERVED <br />
                Designed and developed by Naman Garg and team
              </Typography>
            </div>
          </div>

          <div className={styles.formContainer}>
            <div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="email"
                style={{ color: "rgb(255,255,255)" }}
              >
                <EmailRounded />
              </IconButton>
              <Typography
                variant="caption"
                style={{ color: "rgb(255,255,255)" }}
              >
                Leave us a message, we will get back to you
              </Typography>
            </div>
            <input className={styles.input} type="text" placeholder="Name" />
            <input className={styles.input} type="text" placeholder="Email" />
            <input className={styles.input} type="text" placeholder="Message" />

            <Button
              style={{ margin: "0 auto -8rem auto" }}
              color="inherit"
              variant="outlined"
              classes={{ root: classes.root }}
            >
              Submit
            </Button>
          </div>
        </div>
      </footer>
    );
  }

  /**/
};

export default Footer;
