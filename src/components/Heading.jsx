import { colors, global, sizes } from "../constants/styles";

import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-family: ${global.displayFamily};
  color: ${(props) => props.color ?? colors.light};
  font-size: ${sizes.lg};
  margin: ${(props) => props.margin ?? `0 auto ${sizes.md} auto`};
`;

const Heading = ({ children, margin }) => {
  return <Title margin={margin}>{children}</Title>;
};

export default Heading;