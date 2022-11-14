import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/userSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AddCategoryModal from "./AddCategoryModal";
import { useCategory } from "../context/CategoryContext";

const Header = ({ title }) => {
  const [show, setShow] = React.useState(false);
  const { categories } = useCategory();

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    setShow(true);
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
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
              {user.isLogged ? (
                <NavDropdown title={user.name} id="nav-my-account-dropdow">
                  <NavDropdown.Item onClick={handleAddCategory}>
                    Add Category
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/add-game">Add Game</NavDropdown.Item>
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link onClick={handleLogin}>Login</Nav.Link>
              )}
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
