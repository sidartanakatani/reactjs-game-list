import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

import Card from "../../components/Card/Card";

import { fetchGames } from "../../services/game";
import { Container } from "./Home.styles";

const resource = fetchGames();

const Home = () => {
  const games = resource.games.read();

  const [show, setShow] = useState(false);
  const [selectedGame, setSelectedGame] = useState({});

  const onSelectGame = (game) => {
    setSelectedGame(game);
    setShow(true);
  };

  return (
    <div>
      <Container>
        {games.map((game) => (
          <Card key={game.title} game={game} onSelect={onSelectGame} />
        ))}
      </Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedGame.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={selectedGame.imgUrl} alt={selectedGame.title} rounded />

          <br />
          <br />

          <p>{selectedGame.description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
