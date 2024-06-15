const breakpoint = {
  mobile: 767,
  tablet: 1199,
};

export const theme = {
  breakpoint,
  color: {
    background: "#FBFBFE",
    elementBackground: "#FFFFFF",
    mainAccent: "#0366D6",
    secondaryAccent: "#252525",
    buttonText: "#FFFFFF",
    textSecondary: "#6E7E91",
    borderNeutral: "rgba(209, 213, 218, 0.3)",
    portfolioBorder: "#E5E5E5",
  },
};

export const darkTheme = {
  breakpoint: {
    mobile: breakpoint.mobile,
    tablet: breakpoint.tablet,
  },
  color: {
    background: "#252525",
    elementBackground: "#363636",
    mainAccent: "#2188FF",
    secondaryAccent: "#FFFFFF",
    buttonText: "#FFFFFF",
    textSecondary: "#FFFFFF",
    borderNeutral: "rgba(209, 213, 218, 0.3)",
    portfolioBorder: "rgba(54, 54, 54, 0.7)",
  },
};
