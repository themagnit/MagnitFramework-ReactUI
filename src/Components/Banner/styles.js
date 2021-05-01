import { makeStyles } from "@material-ui/core";

const BannerStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
    backgroundColor: "transparent",
  },
  imageWrapper: {
    position: "relative",
    margin: "30px",
    "& > img": {
      width: "350px",
      [theme.breakpoints.down("sm")]: {
        width: "250px"
      },
    },
  },
  patternPosition: {
    position: "absolute",
    right: "-8%",
    top: "-8%",
    height: "700px",
    [theme.breakpoints.down("md")]: {
      height: "500px",
      right: "-5%",
      top: "-5%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "350px",
      right: "-3%",
      top: "3%",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    margin: "50px",
    color: "black",
    "& > h1": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
  },
}));

export default BannerStyles;
