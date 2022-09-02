/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddGame = () => {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !imgUrl || !description) {
      setShowError(true);
      return;
    }

    addGame({ title, imgUrl, description });

    setTitle("");
    setImgUrl("");
    setDescription("");
    setShowError(false);
    navigate("/");
  };

  // Add Game
  const addGame = async (game) => {
    const res = await fetch("http://localhost:5000/games/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(game),
    });

    const data = await res.json();
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    // setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h2>Add new game</h2>

      <br />

      <Form className="add-form" onSubmit={onSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
          <Form.Label column sm={1}>
            Game title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm={1}>
            Image URL
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Image URL"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm={1}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Form.Group>

        <div className="text-center">
          <Button type="submit" className="pull-right">
            Save Game
          </Button>
        </div>
      </Form>
      {showError && (
        <Alert key="danger" variant="danger" style={{ marginTop: "1em" }}>
          Please, fill out all fields
        </Alert>
      )}
    </>
  );
};

export default AddGame;
