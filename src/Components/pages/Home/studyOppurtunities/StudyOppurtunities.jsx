import React, { useState, useEffect } from "react";
import styles from "./StudyOppurtunities.module.css";
import "./StudyOppurtunities.module.css";

import colors from "../../../colors";

import { Typography, useMediaQuery } from "@material-ui/core";

const StudyOppurtunities = () => {
  const [studentNum, setStudentNum] = useState(40000);
  const [scholarshipsNum, setScholarshipsNum] = useState(0);
  const [coursesNum, setCoursesNum] = useState(0);

  const isMobile = useMediaQuery("(max-width:767px)");
  const isIpad = useMediaQuery("(max-width:1024px)");

  /* fn to randomize the numbers in graphs */
  useEffect(() => {
    const studentNumChange = async () => {
      for (let i = 50000; i <= 54000; i++) {
        await setTimeout(() => {
          setStudentNum(i);
        }, 2000);
      }
    };

    const scholarshipsNumChange = async () => {
      for (let i = 1000; i <= 1650; i++) {
        await setTimeout(() => {
          setScholarshipsNum(i);
        }, 4000);
      }
    };

    const coursesNumChange = async () => {
      for (let i = 0; i <= 150; i++) {
        await setTimeout(() => {
          setCoursesNum(i);
        }, 6000);
      }
    };

    studentNumChange();
    scholarshipsNumChange();
    coursesNumChange();
  }, []);

  return (
    <div className={styles.study} style={{ backgroundColor: colors.violet }}>
      <div className={styles.studyTxt}>
        <Typography
          variant={isMobile ? "h4" : isIpad ? "h5" : "h3"}
          style={{
            color: colors.darkViolet,
            marginBottom: isMobile || isIpad ? "1rem" : "2rem",
          }}
          align={isMobile ? "center" : "left"}
        >
          All Study Opportunities <br /> In One Single Place
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          style={{ width: isMobile ? "100%" : "70%", marginBottom: "2rem" }}
          align={isMobile ? "center" : "left"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ea,
          adipisci voluptatem dolore dolor ab laborum, hic voluptate cumque unde
          tenetur ipsum illum eveniet sapiente voluptatum, et repellat sunt
          eaque!
        </Typography>
      </div>

      <div className={styles.studyGraphs}>
        <div
          className={styles.graph1}
          style={{
            backgroundColor: colors.red,
            width: isMobile || isIpad ? "350px" : "500px",
          }}
        >
          <Typography variant="h5" style={{ color: "rgb(255,255,255)" }}>
            {studentNum}
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "rgb(255,255,255)",
              margin: "auto 0 -0.5rem auto",
            }}
          >
            Students
          </Typography>
        </div>
        <div
          className={styles.graph2}
          style={{
            backgroundColor: colors.darkViolet,
            width: isMobile || isIpad ? "300px" : "450px",
          }}
        >
          <Typography variant="h5" style={{ color: "rgb(255,255,255)" }}>
            {scholarshipsNum}
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "rgb(255,255,255)",
              margin: "auto 0 -0.5rem auto",
            }}
          >
            Scholarships
          </Typography>
        </div>
        <div
          className={styles.graph3}
          style={{
            backgroundColor: colors.green,
            width: isMobile || isIpad ? "250px" : "400px",
          }}
        >
          <Typography variant="h5" style={{ color: "rgb(255,255,255)" }}>
            {coursesNum}
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "rgb(255,255,255)",
              margin: "auto 0 -0.5rem auto",
            }}
          >
            Courses
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default StudyOppurtunities;
