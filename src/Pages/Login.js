import { useForm } from "react-hook-form";
import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { globalUseStyles } from ".././GlobalCss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Authenticate } from "../Redux/Slices/LoginSlice";
import { useSelector, useDispatch } from "react-redux";
import "../index.css";
function Login() {
  const [result, setResult] = useState();
  const [Error, setError] = useState(0);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const response = useSelector((state) => state.login);
  const dispatch = useDispatch();
  let res;
  const onSubmit = (inputs) => {
    const handleAsync = async () => {
      res = await dispatch(Authenticate(inputs));
      setError(res);
      setResult(res.payload.user_token);
    };
    handleAsync();
  };

  useEffect(() => {
    if (result) {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/");
      reset();
    }
  }, [result, Error]);

  return (
    <Container component="main">
      <Box className="boxStyle">
        <Stack sx={{ width: "100%", marginLeft: "65rem" }}>
          <Typography className="typographyDesign">Welcome</Typography>
          <Typography className="labelcss">Glad to see you again</Typography>
        </Stack>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <Stack>
            <label className="labelcss">
              Email<span className="spancss">*</span>
            </label>
            <input
              type="text"
              placeholder="Email*"
              style={globalUseStyles.inputStyle}
              className={`form-control ${errors.email && "invalid"}`}
              {...register("email", {
                required: "*Email is Required*",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "*Invalid email address*",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small style={globalUseStyles.smallTagCss}>
                {errors.email.message}
              </small>
            )}
          </Stack>
          <Stack>
            <label className="labelcss">
              Password<span className="spancss">*</span>
            </label>
            <input
              style={globalUseStyles.inputStyle}
              className={`form-control ${errors.password && "invalid"}`}
              type="password"
              placeholder="Password*"
              {...register("password", {
                required: "*Password is required*",
                minLength: {
                  value: 8,
                  message: "*Password must be more than 8 characters*",
                },
                maxLength: {
                  value: 18,
                  message: "*Password cannot exceed more than 18 characters*",
                },
              })}
              onKeyUp={() => {
                trigger("password");
              }}
            />

            {errors.password && (
              <small style={globalUseStyles.smallTagCss}>
                {errors.password.message}
              </small>
            )}
          </Stack>
          <Grid container>
            <Grid item lg={6}>
              <FormControlLabel
                control={<Checkbox value="remember" />}
                label="Remember me"
                className="labelcss"
              />
            </Grid>
            <Grid item lg={6} sx={globalUseStyles.forgotpassword}>
              <Link
                href="#"
                variant="body2"
                sx={globalUseStyles.forgotpassword}
              >
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="cmn_btn btn_primary"
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Typography sx={globalUseStyles.Errordesign}>
        {Error !== 0 && Error !== "" ? "**Invalid Email and Password**" : ""}
      </Typography>
    </Container>
  );
}

export default Login;
