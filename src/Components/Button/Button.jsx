import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

const handleColorType = (color) => {
  switch (color) {
    case "success":
      return COLORS.success;
    case "cancel":
      return COLORS.cancel;
    default:
      return COLORS.primary;
  }
};

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "6px 12px",
  },
};

const Button = ({ color = "", children }) => {
  const styles = SIZES["small"];

  let Component = FillButton;
  return (
    <Component color={color} style={styles}>
      {children}
    </Component>
  );
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  border-radius: 7px;

  &:nth-child(2) {
    margin-left: 20px;
  }

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${({ color }) => handleColorType(color)};
  color: ${COLORS.white};
  width: 8rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
