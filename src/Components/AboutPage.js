// src/pages/AboutPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Components/Css Folder//AboutPage.css';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* About Us Section */}
      <div className="about-us-section">
        <Container>
          <h1 className="about-title">About Ferozepur (PB05) News Channel</h1>
          <p className="about-description">
            Ferozepur (PB05) News Channel is dedicated to providing the latest news, 
            updates, and insights from Ferozepur, Punjab, and across the globe. 
            With a team of experienced journalists and correspondents, we strive to bring
            you accurate and timely news reports.
          </p>
        </Container>
      </div>

      {/* Our Team Section */}
      <Container className="team-section mt-5">
        <h2 className="section-title">Meet Our Team</h2>
        <Row>
          {/* Team Member 1 */}
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src={require('../Components/Photos/Cheif.jpeg')} alt="Team Member" />
              <Card.Body>
                <Card.Title>Rajat Sharma</Card.Title>
                <Card.Text>Editor-in-Chief</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Team Member 2 */}
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src={require('../Components/Photos/popatlal.jpeg')} alt="Team Member" />
              <Card.Body>
                <Card.Title>Shyam Pathak (Popat Lal )</Card.Title>
                <Card.Text>Senior Reporter</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Team Member 3 */}
          <Col md={4} className="mb-4">
            <Card className="team-card">
              <Card.Img variant="top" src={require('../Components/Photos/jethalal.jpeg')} alt="Team Member" />
              <Card.Body>
                <Card.Title>Jethalal Champaklal Gada</Card.Title>
                <Card.Text>Correspondent</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default AboutPage;
