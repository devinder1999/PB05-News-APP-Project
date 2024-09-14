// src/pages/ContactPage.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Components/Css Folder/ContactPage.css';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Contact Form Section */}
      <Container className="contact-form-section mt-5">
        <h1 className="section-title">Contact Us</h1>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <div className="contact-info">
              <h2 className="contact-info-title">Get in Touch</h2>
              <p><strong>Address:</strong> 123 News Avenue, Ferozepur, PB05</p>
              <p><strong>Phone:</strong> +91-123-456-7890</p>
              <p><strong>Email:</strong> contact@pb05news.com</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default ContactPage;
