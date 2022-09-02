import React, { useState } from "react";
import Card from "../components/Card";
import Modal from "react-bootstrap/Modal";
import { fetchGames } from "../Api";

const resource = fetchGames();

const Home = () => {
  const games = resource.games.read();

  const [show, setShow] = useState(false);

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      {games.map((game) => (
        <Card
          key={game.title}
          title={game.title}
          imgUrl={game.imgUrl}
          description={game.description}
          openModal={setShow}
        />
      ))}
      <Modal show={show} fullscreen={false} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </section>
  );
};

export default Home;
