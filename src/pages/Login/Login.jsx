import React from "react";
import style from "./Login.module.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import LoginContainer from "./components/LoginContainer";
import Logo from "../../assets/login/logo.png";

function Login() {
  return (
    <div className={style.outer}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh", // Ensure it takes full viewport height
          display: "flex",
          alignItems: "stretch", // Stretch children vertically
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px",
            marginBottom: "0px",
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center logo and text vertically
              alignItems: "flex-start", // Align content to the left
              width: "40%",
              gap: "10rem",
            }}
          >
            <img src={Logo} style={{ width: "17rem", objectFit: "contain" }} />
            <Stack>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Zen Kaku Gothic Antique",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  color: "white",
                }}
              >
                Building the Future...
              </Typography>
              <Typography
                variant="p"
                color="white"
                sx={{
                  fontFamily: "Zen Kaku Gothic Antique",
                  fontSize: "1rem",
                  marginTop: "1rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column", // Stack children vertically
              justifyContent: "flex-end", // Push content to the bottom
            }}
          >
            <LoginContainer />
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Login;
