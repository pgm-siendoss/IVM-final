import { DISHES_API } from "../constants/api";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ItemList from "../components/MenuPage/ItemList";

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
      <Container>
        <ItemList>

        </ItemList>
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