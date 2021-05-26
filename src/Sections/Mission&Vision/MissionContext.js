import React from "react";

import { missionStyles } from "./missionStyles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

import {
  MidSection,
  MainData,
} from "../../Utils/Constants/Language/AboutUsData";
import Patten1 from "../../assets/AboutUs/vision1.png";
import Patten2 from "../../assets/AboutUs/vision2.png";
import CustomImage from "../../Components/CustomImage";

const MissionContext = () => {
  const { card,Imgcard, root, Icon, underlined, leftPattern, rightPattern } =
    missionStyles();
  const { firstTitle, secondTitle, missionText, visionText } = MidSection;
  const { mission, vision } = MainData;
  return (
    <>
      <Grid
        container
        className={root}
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <CustomImage className={leftPattern} src={Patten1} alt="" />
        <CustomImage className={rightPattern} src={Patten2} alt="" />
        <Grid style={{ zIndex: 1 }} item xs={11} md={5} lg={4}>
          <Grid container xs={12} className={card} >
          <Grid className={Imgcard}>
                <Grid item xs={12}>
                  <CustomImage className={Icon} src={mission} alt="Icon" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4">{firstTitle}</Typography>
                </Grid>
                </Grid>
                <Grid item xs={12} >
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    gutterBottom
                  >
                    {missionText}
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Grid className={underlined} item xs={3} />
                </Grid>
                </Grid>
            
        </Grid>
      
        <Grid style={{ zIndex: 1 }} item xs={11} md={5} lg={4}>
          <Grid container xs={12} className={card} >
          <Grid className={Imgcard}>
                <Grid item xs={12}>
                  <CustomImage className={Icon} src={vision} alt="Icon" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h4">{secondTitle}</Typography>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    gutterBottom
                  >
                    {visionText}
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Grid className={underlined} item xs={3} />
                </Grid>
             
            </Grid>
          </Grid>
        </Grid>
     
    </>
  );
};

export default MissionContext;
