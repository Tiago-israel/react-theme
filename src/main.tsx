import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { ApolloButton, ApolloButtonTheme } from "./components/ApolloButton";

const customButtonTheme: ApolloButtonTheme = {
  primary: {
    height: 36,
    border: "2px solid transparent",
    color: "#fff",
    backgroundColor: "#B7094C",
    padding: "0px 16px",
    borderRadius: "12px",
    hover: {
      color: "#fff",
      backgroundColor: "#A01A58",
    },
    active: {
      color: "#fff",
      backgroundColor: "rgba(183,9,76,0.5)",
      border: "2px solid transparent",
    },
    disabled: {
      color: "#ADB5BD",
      backgroundColor: "#DEE2E6",
    },
    focus: {
      color: "#fff",
      backgroundColor: "#B7094C",
      border: "2px solid #892B64",
    },
  },
  secondary: {
    height: 36,
    border: "2px solid transparent",
    color: "#fff",
    backgroundColor: "#723C70",
    padding: "0px 16px",
    borderRadius: "12px",
    hover: {
      color: "#fff",
      backgroundColor: "#5C4D7D",
    },
    active: {
      color: "#fff",
      backgroundColor: "rgba(137,43,100,0.5)",
      border: "2px solid transparent",
    },
    disabled: {
      color: "#ADB5BD",
      backgroundColor: "#DEE2E6",
    },
    focus: {
      color: "#fff",
      backgroundColor: "#723C70",
      border: "2px solid #455E89",
    },
  },
  tertiary: {
    height: 36,
    border: "2px solid transparent",
    color: "#fff",
    backgroundColor: "#2E6F95",
    padding: "0px 16px",
    borderRadius: "12px",
    hover: {
      color: "#fff",
      backgroundColor: "#1780A1",
    },
    active: {
      color: "#fff",
      backgroundColor: "rgba(46,111,149,0.5)",
      border: "2px solid transparent",
    },
    disabled: {
      color: "#ADB5BD",
      backgroundColor: "#DEE2E6",
    },
    focus: {
      color: "#fff",
      backgroundColor: "#2E6F95",
      border: "2px solid #0091AD",
    },
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <h2>Default theme</h2>
      <div style={{ display: "flex", gap: "8px" }}>
        <ApolloButton type="button" variant="primary">
          Primary
        </ApolloButton>
        <ApolloButton type="button" variant="secondary">
          Secondary
        </ApolloButton>
        <ApolloButton type="button" variant="tertiary">
          Tertiary
        </ApolloButton>
        <ApolloButton type="button" variant="tertiary" disabled>
          Disabled
        </ApolloButton>
      </div>
      <h2>Custom theme</h2>
      <div style={{ display: "flex", gap: "8px" }}>
        <ApolloButton theme={customButtonTheme} type="button" variant="primary">
          Primary
        </ApolloButton>
        <ApolloButton
          theme={customButtonTheme}
          type="button"
          variant="secondary"
        >
          Secondary
        </ApolloButton>
        <ApolloButton
          theme={customButtonTheme}
          type="button"
          variant="tertiary"
          onClick={(e) => console.log(e)}
        >
          Tertiary
        </ApolloButton>
        <ApolloButton
          theme={customButtonTheme}
          type="button"
          variant="tertiary"
          disabled
          onClick={(e) => console.log(e)}
        >
          Tertiary
        </ApolloButton>
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
