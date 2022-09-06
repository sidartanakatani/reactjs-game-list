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
              <NavDropdown title="Categories" id="nav-categories-dropdow">
                {categories.map((category) => (
                  <NavDropdown.Item key={category.categoryName} href="/action">
                    {category.categoryName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="My Account" id="nav-my-account-dropdow">
                <NavDropdown.Item onClick={handleAddCategory}>
                  Add Category
                </NavDropdown.Item>
                <NavDropdown.Item href="/add-game">Add Game</NavDropdown.Item>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
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
