import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useCategory } from "../context/CategoryContext";

const AddCategoryModal = ({ show, setShow }) => {
  const { setCategories } = useCategory();
  const [categoryName, setCategoryName] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(" http://localhost:5000/categories", {
        categoryName,
      })
      .then(function (response) {
        setCategories((prevState) => [...prevState, response.data]);
        setShow(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="addCategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category name"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddCategoryModal;
