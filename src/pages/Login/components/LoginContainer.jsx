import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Google from "../../../assets/login/google.png";
import Apple from "../../../assets/login/apple.png";
import Facebook from "../../../assets/login/facebook.png";
import SocailLoginButton from "./SocailLoginButton";

const socialLogins = [
  { icon: Google, title: "Log In with Google", link: "/" },
  { icon: Facebook, title: "Log In with Google", link: "/" },
  { icon: Apple, title: "Log In with Google", link: "/" },
];

const LoginContainer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
        padding: "2.5rem",
        width: "100%",
        borderRadius: "1.5rem 1.5rem 0rem  0rem",
      }}
    >
      <Box>
        <Typography fontFamily={"poppins"}>WELCOME BACK!</Typography>
        <Typography
          variant="h2"
          fontFamily={"poppins"}
          fontSize={"1.5rem"}
          fontWeight={600}
          marginBottom={"2rem"}
          marginTop={"0.5rem"}
        >
          Log In to your Account
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="subtitle1" component="label" htmlFor="emailInput">
          Email
        </Typography>
        <TextField
          sx={{
            marginBottom: "1rem",
          }}
          id="emailInput"
          hiddenLabel
          placeholder="Type here..."
          type="email"
        ></TextField>

        <Typography variant="subtitle1" component="label" htmlFor="emailInput">
          Password
        </Typography>
        <TextField
          id="emailInput"
          hiddenLabel
          placeholder="Type here..."
          type="password"
        ></TextField>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me" // Optional label
          />
          <Typography
            sx={{
              "& a": {
                color: "#424242",
                textDecoration: "none",

                "&:hover": {
                  color: "#EE3425",
                  fontWeight: "500",
                },
              },
            }}
          >
            <Link to="/forgot-password">Forgot Password?</Link>
          </Typography>
        </Box>
        <Button variant="contained"> Login</Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "1rem 0rem",
          }}
        >
          <hr style={{ flex: 1, borderTop: "1px solid #E0E0E0" }}></hr>
          <Typography fontWeight={"bold"}>Or</Typography>
          <hr style={{ flex: 1, borderTop: "1px solid #E0E0E0" }}></hr>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {socialLogins.map((item) => (
            <SocailLoginButton icon={item.icon} title={item.title} />
          ))}
        </Box>
        <Typography>
          New User?{" "}
          <Link
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              color: "black",
            }}
          >
            SIGN UP HERE
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginContainer;
