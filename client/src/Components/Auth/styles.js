import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainContainer: {
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "var(--color-gradient),url(https://image.shutterstock.com/image-illustration/social-media-colored-seamless-pattern-260nw-1338496568.jpg)",
  },
  bgOverlay: {
    position: "absolute",
    background: "black",
    width: "100%",
    height: "100%",
    opacity: "0.2",
    backgroundImage:
      "url(https://storage.googleapis.com/uxfolio/5a842a6421f1180004091277/5a842a6421f1180004091278/VD3H3nNiL4hlovsT.jpg)",
  },
  error: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "50px",
    textAlign: "center",
    color: "white",
    background: "red",
    boxShadow: "0 3px 3px rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  errorAnimation: {
    backgroundImage:
      "url(https://media.tenor.com/images/297db11b9c4c3bd62427beece130897e/tenor.gif)",
    width: "300px",
    height: "300px",
    background: "black",backgroundSize:"contain",
    backgroundRepeat:"no-repeat"
  },
  form: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",
    flexDirection: "column",
    width: "500px",
    background: "white",
    paddingTop: "3vh",
    minHeight: "63vh",
    borderRadius: "10px",
    boxShadow: "",
  },
  title: {
    background: "var(--color-gradient)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: 600,
    "&::focus": {
      border: "2px solid black",
    },
  },
  textfield: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "4vh",
  },
  avatarUpload: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
  },
  btn: {
    color: "white",
    background: "var(--color-gradient)",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    height: "50px",
    transition: "0.5s",
    fontWeight: "400",
    fontSize: "18px",
    marginTop: "2vh",
    marginBottom: "2vh",
  },
  helperText: {
    fontSize: "14px",
    marginBottom: "2vh",
  },
  navigator: {
    color: "var(--color-blue-light)",
    marginLeft: "5px",
    cursor: "pointer",
  },
  icon: {
    color: "var(--color-grey-dark)",
    cursor: "pointer",
  },
}));
