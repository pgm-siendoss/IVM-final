import React from "react";
import styled from "styled-components";

const FlexCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: ${(props) => props.padding};
`;

const Center = ({ children, padding }) => {
  return <FlexCol padding={padding}>{children}</FlexCol>;
};

export default Center;