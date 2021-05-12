import React from "react";
import { useStyles, THEME } from "./solutionStyles";
import { Typography, Paper, Button } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PrimarySection from "./SolutionsPrimarySection";
import MidSection from "./SolutionsMidSection";
import Breakpoints from "../../Theme/theme.breakpoints";
import {Colors} from "../../Theme/color.constants"
import {Data} from "../../Utils/Constants/Language/en/SolutionsText"

const Solutions = () => {
  const classes = useStyles();
  const { root } = classes;
  const {heading,subHeading} = Data
  const {whiteColor} = Colors
  return (
    <>
      <Paper className={root} elevation={0}>
        <section>
          <MuiThemeProvider theme={THEME}>
            <Typography variant="h4">{heading}</Typography>
            <Typography paragraph={true}>
             {subHeading}
            </Typography>
          </MuiThemeProvider>
        </section>
        <PrimarySection />
        <MidSection />
        <MuiThemeProvider theme={THEME}>
        <Button style={{backgroundColor: whiteColor,padding:".3rem 1.9rem"}} variant="contained" size={Breakpoints()} >
          See More
        </Button>
        </MuiThemeProvider>
      </Paper>
    </>
  );
};

export default Solutions;
