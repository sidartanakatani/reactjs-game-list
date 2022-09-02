import React from "react";
import Button from "react-bootstrap/Button";
import BSCard from "react-bootstrap/Card";

const Card = ({ title, imgUrl, description, openModal }) => {
  return (
    <BSCard style={{ width: "17rem" }}>
      <BSCard.Img variant="top" src={imgUrl} alt={title} />
      <BSCard.Body>
        <BSCard.Title
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {title}
        </BSCard.Title>
        <BSCard.Text
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </BSCard.Text>
        <Button variant="primary" onClick={() => openModal(true)}>
          Details
        </Button>
      </BSCard.Body>
    </BSCard>
  );
};

export default Card;
