import React, { useEffect, useState } from "react";

import Container from "../Shared/Container/Container";
import Loader from "../Shared/Loader/Loader";
import Card from "./Card";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetch(`./rooms.json`)
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
        setLoader(false);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <Container>
      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {rooms.map((room, index) => (
          <Card key={index} room={room} />
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
