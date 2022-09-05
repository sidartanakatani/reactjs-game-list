import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-auto-flow: row;
  grid-gap: 1em;
`;
