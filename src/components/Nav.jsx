import { Link, NavLink } from "react-router-dom";
import { colors, global, sizes } from "../constants/styles";

import { ROUTES } from "../constants/routes";
import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  background: ${colors.base};
  display: flex;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0 3rem;
  gap: 1rem;
  list-style: none;
  background-color: ${colors.light};
  border-bottom-left-radius: 1rem;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 1rem;
  display: inline-block;
  font-family: ${global.bodyFamily};
  color: ${colors.dark};
  text-transform: capitalize;
  &.active {
    color: ${colors.accent};
  }
`;

const Nav = () => {
    return (
      <NavContainer>
        <NavList>
          {Object.keys(ROUTES).map((route) => (
            <li key={route}>
              <NavItem to={ROUTES[route]}>
                {route.toLowerCase()}
              </NavItem>
            </li>
          ))}
        </NavList>
      </NavContainer>
    );
  };
  
  export default Nav;