import React, { useState } from "react";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import useStyles from "./styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import { Login, signup } from "../../utils/Api";

const Auth = ({ history }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const helperText = !login
    ? "Already have an account?"
    : "Do not have an account?";

  const fields = login
    ? Object.keys(data).filter((e) => e !== "username")
    : Object.keys(data);

  const classes = useStyles();

  const fieldsIconGenerator = (el) => {
    switch (el) {
      case "username":
        return <PersonIcon className={classes.icon} />;
      case "email":
        return <EmailIcon className={classes.icon} />;
      case "password":
        return showPassword ? (
          <VisibilityOffIcon
            className={classes.icon}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <VisibilityIcon
            className={classes.icon}
            onClick={() => setShowPassword(true)}
          />
        );
      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = login ? await Login(data) : await signup(data);
    console.log(!!user);
    if (!!user) {
      console.log(user);
      return history.push("/chat");
    }
  };

  return (
    <div className={classes.mainContainer}>
      <Container
        component="form"
        className={classes.form}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography
          align="center"
          gutterBottom
          variant="h3"
          className={classes.title}
        >
          {login ? "Login" : "Signup"}
        </Typography>
        {fields.map((el, key) => (
          <TextField
            key={key}
            name={el}
            label={el}
            type={el === "password" ? (showPassword ? "text" : "password") : el}
            placeholder={el}
            onChange={(e) => handleChange(e)}
            className={classes.textfield}
            required
            InputProps={{ endAdornment: fieldsIconGenerator(el) }}
          />
        ))}
        <Button type="submit" className={classes.btn}>
          <Typography> {login ? "Login" : "Signup"}</Typography>
        </Button>
        <Typography
          variant="body2"
          align="center"
          color="textSecondary"
          className={classes.helperText}
        >
          {helperText}
          <span className={classes.navigator} onClick={() => setLogin(!login)}>
            {!login ? "Login" : "Signup"}
          </span>
        </Typography>
      </Container>
    </div>
  );
};

export default Auth;
