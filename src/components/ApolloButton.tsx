import React from "react";
import styled from "styled-components";

export type ButtonStyles = {
  color: string;
  backgroundColor: string;
  borderRadius: string;
  border: string;
  padding: string;
  height: number;
  hover: {
    color: string;
    backgroundColor: string;
  };
  focus: {
    color: string;
    backgroundColor: string;
    border: string;
  };
  active: {
    color: string;
    backgroundColor: string;
    border: string;
  };
  disabled: {
    color: string;
    backgroundColor: string;
  };
};

export type ApolloButtonTheme = {
  primary: ButtonStyles;
  secondary: ButtonStyles;
  tertiary: ButtonStyles;
};

export type ApolloButtonProps = {
  theme?: ApolloButtonTheme;
  type: "submit" | "button";
  variant: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  children: React.ReactNode | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ApolloStyledButton = styled.button<ApolloButtonTheme>`
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }

  &.primary {
    border: ${(props) => props.primary.border};
    border-radius: ${(props) => props.primary.borderRadius};
    height: ${(props) => `${props.primary.height}px`};
    color: ${(props) => props.primary.color};
    background-color: ${(props) => props.primary.backgroundColor};

    &:hover {
      color: ${(props) => props.primary.hover.color};
      background-color: ${(props) => props.primary.hover.backgroundColor};
    }

    &:focus {
      border: ${(props) => props.primary.focus.border};
      color: ${(props) => props.primary.focus.color};
      background-color: ${(props) => props.primary.focus.backgroundColor};
    }

    &:active {
      border: ${(props) => props.primary.active.border};
      color: ${(props) => props.primary.active.color};
      background-color: ${(props) => props.primary.active.backgroundColor};
    }

    &:disabled {
      color: ${(props) => props.primary.disabled.color};
      background-color: ${(props) => props.primary.disabled.backgroundColor};
    }
  }
  &.secondary {
    height: ${(props) => `${props.secondary.height}px`};
    border: ${(props) => props.secondary.border};
    border-radius: ${(props) => props.secondary.borderRadius};
    color: ${(props) => props.secondary.color};
    background-color: ${(props) => props.secondary.backgroundColor};

    &:hover {
      color: ${(props) => props.secondary.hover.color};
      background-color: ${(props) => props.secondary.hover.backgroundColor};
    }

    &:focus {
      border: ${(props) => props.secondary.focus.border};
      color: ${(props) => props.secondary.focus.color};
      background-color: ${(props) => props.secondary.focus.backgroundColor};
    }

    &:active {
      border: ${(props) => props.secondary.active.border};
      color: ${(props) => props.secondary.active.color};
      background-color: ${(props) => props.secondary.active.backgroundColor};
    }

    &:disabled {
      color: ${(props) => props.secondary.disabled.color};
      background-color: ${(props) => props.secondary.disabled.backgroundColor};
    }
  }
  &.tertiary {
    height: ${(props) => `${props.tertiary.height}px`};
    border: ${(props) => props.tertiary.border};
    border-radius: ${(props) => props.tertiary.borderRadius};
    color: ${(props) => props.tertiary.color};
    background-color: ${(props) => props.tertiary.backgroundColor};

    &:hover {
      color: ${(props) => props.tertiary.hover.color};
      background-color: ${(props) => props.tertiary.hover.backgroundColor};
    }

    &:focus {
      border: ${(props) => props.tertiary.focus.border};
      color: ${(props) => props.tertiary.focus.color};
      background-color: ${(props) => props.tertiary.focus.backgroundColor};
    }

    &:active {
      border: ${(props) => props.tertiary.active.border};
      color: ${(props) => props.tertiary.active.color};
      background-color: ${(props) => props.tertiary.active.backgroundColor};
    }

    &:disabled {
      color: ${(props) => props.tertiary.disabled.color};
      background-color: ${(props) => props.tertiary.disabled.backgroundColor};
    }
  }
`;

const apolloButtonTheme: ApolloButtonTheme = {
  primary: {
    height: 48,
    border: "2px solid transparent",
    color: "#fff",
    backgroundColor: "#F72585",
    padding: "0px 16px",
    borderRadius: "8px",
    hover: {
      color: "#fff",
      backgroundColor: "#B5179E",
    },
    active: {
      color: "#fff",
      backgroundColor: "rgba(181,23,158,0.5)",
      border: "2px solid #7209B7",
    },
    disabled: {
      color: "#ADB5BD",
      backgroundColor: "#DEE2E6",
    },
    focus: {
      color: "#fff",
      backgroundColor: "#F72585",
      border: "2px solid #7209B7",
    },
  },
  secondary: {
    height: 48,
    border: "2px solid transparent",
    color: "#fff",
    backgroundColor: "#560BAD",
    padding: "0px 16px",
    borderRadius: "8px",
    hover: {
      color: "#fff",
      backgroundColor: "#480CA8",
    },
    active: {
      color: "#fff",
      backgroundColor: "rgba(86,11,173,0.5)",
      border: "2px solid #7209B7",
    },
    disabled: {
      color: "#ADB5BD",
      backgroundColor: "#DEE2E6",
    },
    focus: {
      color: "#fff",
      backgroundColor: "#560BAD",
      border: "2px solid #3A0CA3",
    },
  },
  tertiary: {
    height: 48,
    border: "2px solid transparent",
    color: "#fff",
    backgroundColor: "#3F37C9",
    padding: "0px 16px",
    borderRadius: "8px",
    hover: {
      color: "#fff",
      backgroundColor: "#4361EE",
    },
    active: {
      color: "#fff",
      backgroundColor: "rgba(63,55,201,0.5)",
      border: "2px solid 4895EF",
    },
    disabled: {
      color: "#ADB5BD",
      backgroundColor: "#DEE2E6",
    },
    focus: {
      color: "#fff",
      backgroundColor: "#3F37C9",
      border: "2px solid #4CC9F0",
    },
  },
};

export function ApolloButton({
  theme = apolloButtonTheme,
  ...props
}: ApolloButtonProps) {
  const classMap = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
  };
  return (
    <ApolloStyledButton
      {...theme}
      className={classMap[props.variant]}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </ApolloStyledButton>
  );
}
