import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const Spin = keyframes`
to{
    transform:rotate(360deg);
}
`;

const NavBar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.dark};
        padding: ${padding};
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          display: inline-block;
          animation: 2s ${Spin} linear infinite;
          font-size: 60px;
          &:hover {
            animation: 1s ${Spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
        aria-label="logo"
        role="img"
      >
        🐩
      </span>
    </header>
  );
};

export default NavBar;
