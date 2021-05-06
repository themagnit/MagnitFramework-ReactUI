import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Colors } from "../../Theme/color.constants";

const { BlueRibbon, whiteColor} = Colors;
const breakpoints = createBreakpoints({});

export const THEME = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        color: 'black',
        fontFamily: "Poppins",
        boxShadow: "none"
      }},
    MuiTypography: {
      h4: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: "35px",
        lineHeight: 1.6,
        color: whiteColor,
        fontWeight: "bolder",
        textAlign: "center",
        [breakpoints.only("sm")]: {
          fontSize: "28px",
          marginTop: "40px",
          textAlign: "center",
        },
        [breakpoints.down("xs")]: {
          fontSize: "20px",
        },
      },
      paragraph:{
        color: whiteColor,
      },
      h5: {
        fontFamily: "Poppins",
        fontWeight: "bolder",
        fontSize: "16px",
        textAlign: "center",
        whiteSpace: "nowrap",
      },
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "25px",
    margin: "0px",
    padding: "0px",
    backgroundColor: BlueRibbon,
    width: "100%",
    paddingBottom: "50px",
  },
  cardSec: {
    display: "flex",
    width: "100%",
    flexFlow: "wrap",
    justifyContent: "center",
    paddingBottom: "20px"
  },
  card: {
    backgroundColor: whiteColor,
    width: "13%",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all .25s linear",
    borderRadius: "5px",
    boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
    "&:hover": {
      boxShadow: "0px 4px 50px 5px rgba(0, 0, 0, 0.06)",
      backgroundColor: "#fff",
    },
    margin: "10px",
    cursor: "pointer",
    [breakpoints.only("md")]: {
      width: "40%",
    },
    [breakpoints.only("sm")]: {
      width: "40%",
    },
    [breakpoints.down("xs")]: {
      width: "60%",
    },
  },

  devSec: {
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  profileIcon: {
    width: "65px",
    // height: "50px",
  },
}));
