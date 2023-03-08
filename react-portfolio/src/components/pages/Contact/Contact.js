import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './Contacts.css';

function Contact(props) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setName(event.target.elements.formBasicName.value);
  }

  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <div className="contact">
            <div className="contact-container">
              <h1>Contact Me</h1>
              <p>Feel free to reach out to me using any of the methods below:</p>
              <ul>
                <li>Email: <a href="mailto:harrygarstang2@gmail.com">harrygarstang2@gmail.com</a></li>
                <li>CV: <a href="../../../pdfs/Harry-Garstang-CV.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a></li>
                <li>Github: <a href="https://github.com/harrygarstang" target="_blank" rel="noopener noreferrer">Github Profile</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/harry-garstang/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
              </ul>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              {submitted && (
                <Alert variant="success" className="mt-3">
                  Thanks, {name}! We will be in touch.
                </Alert>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
