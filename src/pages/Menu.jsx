import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { sizes } from '../constants/styles';
import { DISHES_API } from "../constants/api";
import useFetch from "../hooks/useFetch";
import { ROUTES } from "../constants/routes";

import Center from '../components/Center';
import Heading from '../components/Heading';
import Container from "../components/Container";
import Button from "../components/Button";
import Modal from "../components/Modals/Modal";
import food from "../assets/images/hamburger.svg";

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [dishes, dishesError, dishesLoading] = useFetch(DISHES_API);

  const filteredDishes = dishes?.filter((dish) => dish.title.includes(search));
  const [orders, setOrders] = useState([]);

  return (
    <>
      <div className="{}">
        <p className="{}">
          Welcome to Chinese & Thai restaurant <strong>Fu Lai</strong>. We're located in Oudenaarde. Check out what we got on the menu.
        </p>
      </div>
      <div className="{}">
        <Link to={ROUTES.MENU}>
          <Button variant='square' color='white'>
            Dim Sum <br/>
          </Button>
        </Link>
        <Link to={ROUTES.MENU}>
          <Button variant='square' color='green'>
            Voorger. <br/>   
          </Button>
        </Link>
        <Link to={ROUTES.MENU}>
          <Button variant='square' color='pink'>
            Other <br/>   
          </Button>
        </Link>  
      </div>
    </>
  )
}

export default Menu