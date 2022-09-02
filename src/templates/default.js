import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import { Container, Content } from "./styles";

const DefaultTemplate = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default DefaultTemplate;
