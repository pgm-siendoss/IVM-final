import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";
import { colors, global, sizes } from "../constants/styles";

import ItemList from "../components/MenuPage/ItemList";
import Button from "../components/Button"
import logo from "../assets/images/dragon.svg"

const TitleContainer = styled.div`
display: flex;
margin: 5rem auto;
width: 35rem;
flex-direction: column;
font-size: 5rem;
`

const Title = styled.span`
  display: flex;
  font-weight: bold;
  font-family: ${global.bodyFamily};
  color: ${colors.accent};
  justify-content: center;
  margin: 0;
`

const Swipe = styled.span`
  font-size: 2rem;
  display: inline-block;
  padding: 0.5rem;
  margin: 5rem 2rem;
  text-align: center;
  width: 35rem;
`

  /*${props => props.primary && css`
    background: white;
    color: black;
  `}*/

const Home = () => {

  return (
    <>
      <TitleContainer>
        <img src={logo} className="logo--big" alt="logo" />
        <Title>
          Welcome to
        </Title>
        <Title>
          FU LAI
        </Title>
      </TitleContainer>
      <Swipe>Swipe Up!</Swipe>  
    </>
  );
};

export default Home;