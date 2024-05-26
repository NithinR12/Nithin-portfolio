import React from "react";
import styled from "styled-components";
import { SMDown } from "../../../styles/responsive";

// Styled-components for the MenuButton and Line
const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
`;

interface LineProps {
  strokeDasharray: string;
  strokeWidth: string;
}

const Line = styled.path<LineProps>`
  display: none;
  ${SMDown({
    display: "inline-block",
  })}
  fill: none;
  stroke: ${({ theme }) => theme.palette.common.white};
  stroke-width: ${(props) => props.strokeWidth};
  stroke-dasharray: ${(props) => props.strokeDasharray};
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

interface OpenedLineProps extends LineProps {
  strokeDashoffset: string;
}

const OpenedLine = styled(Line)<OpenedLineProps>`
  stroke-dashoffset: ${(props) => props.strokeDashoffset};
`;

type Props = {
  ariaLabel: string;
  isMenuOpen: boolean;
};

const Hamburger: React.FC<Props> = ({ ariaLabel, isMenuOpen }) => {
  const line1StrokeDashArray = isMenuOpen ? "90 207" : "60 207";
  const line1StrokeDashOffset = isMenuOpen ? "-134" : "0";
  const line2StrokeDashArray = isMenuOpen ? "1 60" : "60 60";
  const line2StrokeDashOffset = isMenuOpen ? "-30" : "0";
  const line3StrokeDashArray = isMenuOpen ? "90 207" : "60 207";
  const line3StrokeDashOffset = isMenuOpen ? "-134" : "0";

  return (
    <MenuButton aria-label={ariaLabel}>
      <svg width="50" height="50" viewBox="0 0 100 100">
        <Line
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          strokeDasharray={line1StrokeDashArray}
          strokeWidth="6"
        />
        <Line
          d="M 20,50 H 80"
          strokeDasharray={line2StrokeDashArray}
          strokeWidth="6"
        />
        <Line
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,75.000058"
          strokeDasharray={line3StrokeDashArray}
          strokeWidth="6"
        />
        <OpenedLine
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          strokeDasharray={line1StrokeDashArray}
          strokeDashoffset={line1StrokeDashOffset}
          strokeWidth="6"
        />
        <OpenedLine
          d="M 20,50 H 80"
          strokeDasharray={line2StrokeDashArray}
          strokeDashoffset={line2StrokeDashOffset}
          strokeWidth="6"
        />
        <OpenedLine
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,75.000058"
          strokeDasharray={line3StrokeDashArray}
          strokeDashoffset={line3StrokeDashOffset}
          strokeWidth="6"
        />
      </svg>
    </MenuButton>
  );
};

export default Hamburger;
