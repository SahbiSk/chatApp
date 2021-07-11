import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import { Login, signup } from "../../utils/Api";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

const Auth = ({ history }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState();
  const [error, setError] = useState();
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
    const { user, error } = login
      ? await Login(data)
      : await signup({image, ...data});
    if (user) return history.push("/chat");
    setError(error);
  };

  useEffect(() => {
    setTimeout(() => setError(null), 4000);
  }, [error]);

  return (
    <div className={classes.mainContainer}>
      {error && (
        <div className={classes.error}>
          <Typography variant="h6">{error}!</Typography>
        </div>
      )}
      <div className={classes.bgOverlay} />
      {/* <div className={classes.errorAnimation} /> */}
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
        {!login && (
          <div className={classes.avatarUpload}>
            <Typography color="textSecondary">
              Please Select your avatar
            </Typography>
            <IconButton component="label" size="small">
              <input
                type="file"
                hidden
                required
                name="avatar"
                multiple={false}
                onChange={(e) => setImage(e.target.files[0])}
              />
              <PhotoCameraIcon />
            </IconButton>
          </div>
        )}
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
