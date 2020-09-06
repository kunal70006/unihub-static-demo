import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Link,
} from "@material-ui/core";

import { Menu, CloseRounded } from "@material-ui/icons";

import colors from "../../colors";

const Navbar = (props) => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isIpad = useMediaQuery("(max-width:1024px)");
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppBar
      position="relative"
      color="transparent"
      style={{
        boxShadow: "none",
        color: colors.teal,
      }}
    >
      <Toolbar variant="dense" disableGutters>
        {isMobile ? (
          <>
            <img
              src={require("../../../Assets/actuallyUsedImages/unihub.png")}
              alt="logo"
              style={{ margin: "-3rem auto auto 0", cursor: "pointer" }}
              onClick={() => (window.location.href = "/")}
            />
            <IconButton
              edge="start"
              color="default"
              aria-label="menuIcon"
              style={{ float: "right" }}
              onClick={() => setIsOpen(true)}
            >
              <Menu />
            </IconButton>
            {isOpen ? (
              <Drawer
                anchor="right"
                open={isOpen}
                onClose={() => setIsOpen(false)}
              >
                <List style={{ width: "300px" }}>
                  <ListItem disableGutters>
                    <ListItemIcon
                      style={{ cursor: "pointer", margin: "auto 0 3rem auto" }}
                      onClick={() => setIsOpen(false)}
                    >
                      <CloseRounded />
                    </ListItemIcon>
                  </ListItem>
                  <ListItem
                    button
                    style={{ textAlign: "right", marginBottom: "3rem" }}
                  >
                    <Link
                      href="/"
                      color="inherit"
                      style={{ margin: "auto 0 auto auto" }}
                    >
                      HOME
                    </Link>
                  </ListItem>
                  <ListItem
                    button
                    style={{ textAlign: "right", marginBottom: "3rem" }}
                  >
                    <Link
                      href="/about"
                      color="inherit"
                      style={{ margin: "auto 0 auto auto" }}
                    >
                      ABOUT
                    </Link>
                  </ListItem>
                  <ListItem
                    button
                    style={{ textAlign: "right", marginBottom: "3rem" }}
                  >
                    <Link
                      href="/internships"
                      color="inherit"
                      style={{ margin: "auto 0 auto auto" }}
                    >
                      INTERNSHIPS
                    </Link>
                  </ListItem>
                  <ListItem
                    button
                    style={{
                      textAlign: "right",
                      marginBottom: "3rem",
                    }}
                  >
                    <Link
                      href="/"
                      color="inherit"
                      style={{ margin: "auto 0 auto auto" }}
                    >
                      CONTACT US
                    </Link>
                  </ListItem>
                  <ListItem
                    button
                    style={{
                      textAlign: "right",
                      marginTop: "15rem",
                    }}
                  >
                    <Link
                      color="inherit"
                      style={{ margin: "auto 0 auto auto" }}
                      onClick={() => {
                        props.modalController(true);
                      }}
                    >
                      LOGIN/SIGN UP
                    </Link>
                  </ListItem>
                </List>
              </Drawer>
            ) : null}
          </>
        ) : (
          <>
            <img
              src={require("../../../Assets/actuallyUsedImages/unihub.png")}
              alt="logo"
              style={{
                margin: isIpad ? "-3rem auto auto 0" : "-3rem auto auto 5rem",
                height: isIpad ? "150px" : null,
                width: isIpad ? "150px" : null,
                cursor: "pointer",
              }}
              onClick={() => (window.location.href = "/")}
            />
            <Button
              style={{
                margin: "0 0 0 auto",
              }}
              color="inherit"
              size={isMobile ? "small" : "large"}
              href="/"
            >
              HOME
            </Button>
            <Button
              style={{ margin: "0 1.5rem" }}
              size={isMobile ? "small" : "large"}
              color="inherit"
              href="/about"
            >
              ABOUT
            </Button>
            <Button
              style={{ margin: "0 1.5rem" }}
              size={isMobile ? "small" : "large"}
              color="inherit"
              href="/internships"
            >
              INTERNSHIPS
            </Button>
            <Button
              style={{ margin: "0 1.5rem" }}
              size={isMobile ? "small" : "large"}
              color="inherit"
              href="/"
            >
              COURSES
            </Button>

            {/*user ? (
              <Button
                style={{
                  borderRadius: isIpad ? "10px" : "20px",
                  margin: "0 1.5rem",
                  border: `2px solid ${colors.teal}`,
                }}
                size={isMobile ? "small" : "large"}
                variant="outlined"
                color="inherit"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                Hi, {user.name}
              </Button>
            ) : (
              <Button
                style={{
                  borderRadius: isIpad ? "10px" : "20px",
                  margin: "0 1.5rem",
                  border: `2px solid ${colors.teal}`,
                }}
                size={isMobile ? "small" : "large"}
                variant="outlined"
                color="inherit"
                onClick={() => {
                  props.modalController(true);
                }}
              >
                LOGIN/SIGN UP
              </Button>
              )*/}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
