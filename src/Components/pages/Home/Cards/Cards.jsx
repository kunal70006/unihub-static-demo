import React from "react";
import styles from "./Cards.module.css";

import { Typography } from "@material-ui/core";

import colors from "../../../colors";

const Cards = () => {
  return (
    <div className={styles.cards} id="courses">
      <Typography variant="h4" align="center" style={{ color: colors.green }}>
        We Have Tons Of Courses For Your Needs
      </Typography>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src={require("../../../../Assets/actuallyUsedImages/BBA.png")}
            alt="bba"
          />
        </div>
        <div className={styles.card}>
          <img
            src={require("../../../../Assets/actuallyUsedImages/B.com.png")}
            alt="bcom"
          />
        </div>
        <div className={styles.card}>
          <img
            src={require("../../../../Assets/actuallyUsedImages/BJMC.png")}
            alt="bjmc"
          />
        </div>
        <div className={styles.card}>
          <img
            src={require("../../../../Assets/actuallyUsedImages/EcoHons.png")}
            alt="eco"
          />
        </div>
        <div className={styles.card}>
          <img
            src={require("../../../../Assets/actuallyUsedImages/engHons.png")}
            alt="eng"
          />
        </div>
        <div className={styles.card}>
          <img
            src={require("../../../../Assets/actuallyUsedImages/BBA.png")}
            alt="course6"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
