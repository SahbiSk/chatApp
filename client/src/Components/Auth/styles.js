import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainContainer: {
    width: "100vw",
    height: "100vh",
    background: "var(--color-gradient)",
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
