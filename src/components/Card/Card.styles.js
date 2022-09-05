import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const CardTitle = styled(Card.Title)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.2rem;
`;

export const CardText = styled(Card.Text)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 0.85rem;
  line-height: 1.3rem;
`;
