import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const CardTitle = styled(Card.Title)`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const CardText = styled(Card.Text)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;
