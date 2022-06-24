import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { fontSize } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const LoginPageCss = {
  boxStyle: {
    marginTop: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
  typographyDesign: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "40px",
    color: "#283138",
    alignItems: "left",
    textAlign: "left",
  },
  labelcss: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#777E86",
    marginTop: "10px",
  },
  spancss: {
    color: "red",
    margin: "5px",
  },
  inputStyle: {
    padding: "16px",
    gap: "8px",
    width: "500px",
    height: "50px",
    background: "#FFFFFF",
    border: "1px solid #D1D4D7",
    borderRadius: "4px",
  },
  smallTagCss: {
    color: "red",
    padding: "10px",
    fontSize: "12px",
  },
  forgotpassword: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6B62E2",
    textAlign: "right",
    paddingTop: "13px",
    marginTop: "10px",
  },
  btnStyle: {
    mt: 3,
    mb: 2,
    backgroundColor: "#6B62E2",
    "&:hover": {
      backgroundColor: "#6B62E2",
    },
  },
};
function Login() {
  const [logCredential, setLogCredential] = useState("");

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://hr.flickerp.com:3000/api/v1/auth/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(logCredential),
        }
      );
      console.log(data);
      const result = await data.json();
      console.log(result); //
    };

    fetchData();
  }, [logCredential]);
  const onSubmit = (data) => {
    setLogCredential(data);
    console.log(logCredential);
    // localStorage.setItem("user-info", JSON.stringify(data));
    // navigate("/");
    // reset();
  };

  return (
    <Container component="main">
      <Box sx={LoginPageCss.boxStyle}>
        <Stack sx={{ width: "100%", marginLeft: "650px" }}>
          <Typography sx={LoginPageCss.typographyDesign}>Welcome</Typography>
          <Typography sx={LoginPageCss.labelcss}>
            Glad to see you again
          </Typography>
        </Stack>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <Stack>
            <label style={LoginPageCss.labelcss}>
              Email<span style={LoginPageCss.spancss}>*</span>
            </label>
            <input
              type="text"
              placeholder="Email*"
              style={LoginPageCss.inputStyle}
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
              <small style={LoginPageCss.smallTagCss}>
                {errors.email.message}
              </small>
            )}
          </Stack>
          <Stack>
            <label style={LoginPageCss.labelcss}>
              Password<span style={LoginPageCss.spancss}>*</span>{" "}
            </label>
            <input
              style={LoginPageCss.inputStyle}
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
              <small style={LoginPageCss.smallTagCss}>
                {errors.password.message}
              </small>
            )}
          </Stack>
          <Grid container>
            <Grid item lg={6}>
              <FormControlLabel
                control={
                  <Checkbox value="remember" sx={{ color: "#6B62E2" }} />
                }
                label="Remember me"
                style={LoginPageCss.labelcss}
              />
            </Grid>
            <Grid lg={6} sx={LoginPageCss.forgotpassword}>
              <Link href="#" variant="body2" sx={LoginPageCss.forgotpassword}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={LoginPageCss.btnStyle}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
