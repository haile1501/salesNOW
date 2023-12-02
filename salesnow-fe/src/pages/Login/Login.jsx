import React from "react";
import { TextField, Button } from "@mui/material";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Login = () => {
  return (
    <div className={cx("root")}>
      <form className={cx("form")}>
        <TextField
          className={cx("textField")}
          label="Username"
          variant="outlined"
        />
        <TextField
          className={cx("textField")}
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button className={cx("button")} variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
