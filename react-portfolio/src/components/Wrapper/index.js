import React from "react";
import "./style.css";
import { Container } from 'react-bootstrap';

function Wrapper({ children }) {
  return (
    <Container className="wrapper">
      {children}
    </Container>
  );
}

export default Wrapper;