import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

const handleColorType = (color) => {
  switch (color) {
    case "confirm":
      return COLORS.confirm;
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

const Button = ({
  variant = "fill",
  children,
  color = "primary",
  disabled,
  placeholder,
  onClick,
}) => {
  const styles = SIZES["small"];

  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Component
      placeholder={placeholder}
      disabled={disabled}
      color={color}
      style={styles}
      onClick={onClick}
    >
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
  width: 8rem;
  font-weight: bold;
  transition-duration: 0.4s;
  cursor: pointer;

  &:nth-child(2) {
    margin-left: 20px;
  }

  &:focus {
    outline-color: inherit;
    outline-offset: 4px;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${COLORS.transparentGray75};
    color: ${COLORS.white};
    cursor: not-allowed;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${({ color }) => handleColorType(color)};
  color: ${COLORS.white};
`;

const OutlineButton = styled(ButtonBase)`
  background-color: ${({ color }) => handleColorType(color)};
  color: ${COLORS.black};
  background-color: ${COLORS.white};
  border: 2px solid ${COLORS.transparentGray75};

  &:hover {
    background: ${COLORS.transparentGray15};
  }
`;

export default Button;
