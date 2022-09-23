import React from "react";
import { Card, Button, Nav } from "react-bootstrap";

const Display = (props) => {
  const { header, title, text, theLink } = props;
  return (
    <div>
      <Card style={{ width: "18rem", marginBottom: "3rem" }}>
        <Card.Header>{header}</Card.Header>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Nav.Link href={theLink}>
            <Button variant="primary">View Demo</Button>
          </Nav.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Display;
