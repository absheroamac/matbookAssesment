import { Box, Typography } from "@mui/material";
import React from "react";

const SocailLoginButton = ({ icon, title, link }) => {
  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        padding: "1rem",
        border: "solid 1px #EEEEEE",
        position: "relative",
        color: "#616161",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.5rem",
        "&:hover": {
          border: "solid 1px #EE3425",
          color: "black",
          backgroundColor: "white",
        },
      }}
    >
      <img src={icon} style={{ position: "absolute", left: "2rem" }} />
      <Typography>{title}</Typography>
    </Box>
  );
};

export default SocailLoginButton;
