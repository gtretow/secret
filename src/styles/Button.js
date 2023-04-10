import styled from "styled-components";
import { COLORS } from "./constants";

const handleColorType = color => {
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
      "--padding": "6px 12px"
    }
}

const Button = ({ color, children }) => {
    const styles = SIZES[small];
  
    let Component = ButtonBase
    return <Component color={color} style={styles}>{children}</Component>;

  };

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  color: ${({ props }) => handleColorType(props.color)};

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

export default Button