import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// const API_URL = "https://hledya.com/openai_app/api";
const API_URL = "http://localhost:443/openai_app/api";

// generate a marketing cold email for the following product:

const getSummary = async (postData) => {
  const response = await fetch(`${API_URL}/product-description`, {
    method: "POST",
    body: JSON.stringify({ text: postData }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Could not fetch response");
  }

  console.log(response);
  const data = await response.json();
  console.log(data);

  return data.summary;
};

const ProductDescription = () => {
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.productName);
    setIsLoading(true);
    getSummary(formDataObj.productName).then((response) => {
      console.log("response:", response);
      setAiResponse(response);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Container style={{ maxWidth: "50rem" }}>
        <Row style={{ marginTop: "3rem" }}>
          <Col>
            <h1>Generate Product Descriptions</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  What product would you like to get a description for?
                </Form.Label>
                <Form.Control
                  type="text"
                  name="productName"
                  placeholder="Enter product name"
                />
                <Form.Text className="text-muted">
                  Enter as much information as possible for more accurate
                  description
                </Form.Text>
              </Form.Group>
              <Button variant="primary" size="lg" type="submit">
                Get AI Suggestions
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ marginTop: "4rem" }}>
              <Card.Title>
                <h4 style={{ marginTop: "1rem" }}>
                  {isLoading ? "Loading!..." : "OpenAI GPT3 Response"}
                </h4>
              </Card.Title>
              <Card.Text>{aiResponse}</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDescription;
