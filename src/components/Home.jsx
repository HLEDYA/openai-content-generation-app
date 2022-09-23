import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Display from "./Display";

const Home = () => {
  return (
    <div>
      <Container>
        <Row style={{ margin: "auto", padding: "3rem" }}>
          <Col>
            <h1>OpenAI React Demo App</h1>
            <h4>Content Generation Services</h4>
            <p>
              You can generate content by the help of <strong>OpenAI</strong>.
              In the following, you can find some example services.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Display
              header="Product Descriptions"
              title="Generate Product Descriptions"
              text="Generate product descriptions for any type of projects. Simply enter the name and the product keywords to get started."
              theLink="/product-description"
            ></Display>
          </Col>
          <Col>
            <Display
              header="Marketing Emails"
              title="Cold Email Template"
              text="This is perfect for marketing agents and companies who need fresh ideas daily on cold email content that is created by AI technology."
              theLink="/cold-emails"
            ></Display>
          </Col>
          <Col>
            <Display
              header="Creating Tweets"
              title="Generating Tweets"
              text="Start generating tweet ideas with hashtags for your online social media campaigns on twitter. Create endless unique tweet ideas."
              theLink="/tweets"
            ></Display>
          </Col>
          <Col>
            <Display
              header="Summarizing"
              title="Shorten Long Texts"
              text="Get the gist of the long texts and save time you waste while reading long texts."
              theLink="/summarize"
            ></Display>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
