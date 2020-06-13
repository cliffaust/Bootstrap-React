import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar></SideBar>
          </Col>
          <Col md={10}>
            <Products></Products>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
