// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EE3425",
    },
    secondary: {
      main: "#FAFAFA", // Pink
    },
    stroke: {
      main: "#E0E0E0",
    },
    background: {
      default: "#fff",
    },
  },

  components: {
    // Override TextField styles
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontFamily: "poppins",
            borderRadius: "6px", // Rounded corners
            backgroundColor: "#fff", // White background for the input
            "& fieldset": {
              borderColor: "#e0e0e0", // Light gray border
            },
            "&:hover fieldset": {
              borderColor: "#bdbdbd", // Slightly darker on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "black", // Blue border when focused
            },
          },
          "& .MuiInputBase-input": {
            padding: "12px 16px", // Adjust padding for better spacing
            fontSize: "16px",
          },
          "& .MuiInputLabel-root": {
            fontSize: "16px",
            color: "#424242", // Label color (like "Email" and "Password")
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black", // Label color when focused
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-subtitle1": {
            // Targeting the variant used for labels
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400, // Medium weight for better readability
            color: "#4F4F4F", // Default label color
            lineHeight: "1.5",
            marginBottom: "8px", // Space between label and input
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins", // Consistent font
          fontSize: "16px", // Match TextField and Typography
          fontWeight: 500, // Medium weight for emphasis
          textTransform: "none", // Disable uppercase default
          borderRadius: "6px", // Match TextField rounded corners
          padding: "10px 20px", // Comfortable padding
          transition: "all 0.3s ease", // Smooth transitions
        },
        contained: {
          backgroundColor: "#EE3425", // Primary color for contained variant
          color: "#fff", // White text
          "&:hover": {
            backgroundColor: "#B71C1C", // Darker shade on hover
          },
          "&.Mui-disabled": {
            backgroundColor: "#E0E0E0", // Disabled state
            color: "#9E9E9E",
          },
        },
        outlined: {
          borderColor: "#EE3425", // Primary color border
          color: "#EE3425", // Primary color text
          "&:hover": {
            borderColor: "#B71C1C", // Darker border on hover
            color: "#B71C1C",
            backgroundColor: "rgba(238, 52, 37, 0.04)", // Slight background tint
          },
          "&.Mui-disabled": {
            borderColor: "#E0E0E0",
            color: "#9E9E9E",
          },
        },
        text: {
          color: "#EE3425", // Primary color for text variant
          "&:hover": {
            color: "#B71C1C", // Darker on hover
            backgroundColor: "rgba(238, 52, 37, 0.04)", // Slight tint
          },
          "&.Mui-disabled": {
            color: "#9E9E9E",
          },
        },
      },
    },
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: "yellow", // Default color when unchecked
        "&.Mui-checked": {
          color: "#EE3425", // Color when checked (using your primary color)
        },
        "&.Mui-disabled": {
          color: "#E0E0E0", // Color when disabled
        },
      },
    },
  },
});

export default theme;
