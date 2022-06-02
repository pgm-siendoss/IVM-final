import React from 'react'
import logo from '../../assets/images/hamburger.svg';

import { Link } from "react-router-dom";
import { getUrl } from "../../helper";
import styled from "styled-components";

const CardList = styled.ul`
  padding: 0;
  margin: 2rem 0;
  list-style: none;
  li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ListItem = styled.li`
  background-color: #fafafa;
  border-radius: .5rem;
`;

const ListLink = styled.a`
  display: block;
  padding: 1rem;
  color: #000;
  &:focus {
    outline: 1px solid #000;
  }
`

const ItemList = ({ items, dynamicUrl, dynamicKey = "id", labelKey = "title" }) => {
  return (
    <>
        <CardList>
          {items.map((item) => (
            <ListItem key={item[dynamicKey]}>
              <ListLink as={Link} to={getUrl(dynamicUrl, dynamicKey, item[dynamicKey])}>
                {item[labelKey]}
              </ListLink>
              <img src={logo} />
              <span>
              {item.toLowerCase()}
              </span>
              <span>
                Dish description
              </span>
            </ListItem>
          ))}
        </CardList>
    </>
  )
}

export default ItemList