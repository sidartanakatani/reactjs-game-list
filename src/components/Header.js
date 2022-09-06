import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AddCategoryModal from "./AddCategoryModal";
import { useCategory } from "../context/CategoryContext";

const Header = ({ title }) => {
  const [show, setShow] = React.useState(false);
  const { categories } = useCategory();

  const handleAddCategory = () => {
    setShow(true);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                {categories.map((category) => (
                  <NavDropdown.Item key={category.categoryName} href="/action">
                    {category.categoryName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleAddCategory}>Add Category</Nav.Link>
              <Nav.Link href="/add-game">Add Game</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/profile">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddCategoryModal show={show} setShow={setShow} />
    </>
  );
};

Header.defaultProps = {
  title: "Game List",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
