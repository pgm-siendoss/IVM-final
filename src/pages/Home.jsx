import { DISHES_API } from "../constants/api";
import React, { useEffect, useState } from "react";
import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";
import { colors, global, sizes } from "../constants/styles";
import useFetch from "../hooks/useFetch";
import ItemList from "../components/MenuPage/ItemList";
import Button from "../components/Button"
import Container from "../components/Container";


/*
const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home*/

const Home = () => {
  const [search, setSearch] = useState("");
  const [dishes, dishesError, dishesLoading] = useFetch(DISHES_API);

  const filteredDishes = dishes?.filter((dish) => dish.title.includes(search));

  return (
    <>
      <div className="{}">
        <h1>Welcome to Fu Lai</h1>
        <p className="{}">
          Welcome to Chinese & Thai restaurant <strong>Fu Lai</strong>. We're located in Oudenaarde. Check out what we got on the menu.
        </p>
      </div>
      <div className="{}">
        <Link to={ROUTES.MENU}>
          <Button variant='square' color='black'>
            Eat here <br/>
          </Button>
        </Link>
        <Link to={ROUTES.MENU}>
          <Button variant='square' color='red'>
            Take away <br/>   
          </Button>
        </Link>       
      </div>
      <Container>
        {dishesLoading && <p>Loading...</p>}
        {dishesError && <p>Something went wrong...</p>}
        {dishes && (
          <>
            <h1>Posts</h1>
            <input
              placeholder="Search a dish"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;