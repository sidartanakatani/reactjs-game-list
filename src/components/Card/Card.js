import React from "react";
import Button from "react-bootstrap/Button";
import BSCard from "react-bootstrap/Card";
import { CardTitle, CardText } from "./Card.styles";

const Card = ({ game, onSelect }) => {
  return (
    <BSCard style={{ flex: 1 }}>
      <BSCard.Img variant="top" src={game.imgUrl} alt={game.title} />
      <BSCard.Body>
        <CardTitle>{game.title}</CardTitle>
        <CardText>{game.description}</CardText>
        <Button variant="primary" onClick={() => onSelect(game)}>
          Details
        </Button>
      </BSCard.Body>
    </BSCard>
  );
};

export default Card;
