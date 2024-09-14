// src/pages/HomePage.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../Components/Css Folder/HomePage.css';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (


    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <h1 className="hero-title">Welcome to PB05 News</h1>
          <p className="hero-subtitle">Stay updated with the latest news from Ferozepur and around the world.</p>
          <a href='https://ferozepuronline.com/'><Button variant="primary" className="hero-button">Read Latest News</Button></a>
        </Container>
      </div>

      {/* Featured News Section */}
      <Container className="featured-news mt-5">
        <h2 className="section-title">Featured News</h2>
        <Row>
          {/* Example News Card */}
          <Col md={4} className="mb-4">
            <Card className="news-card">
              <Card.Img variant="top" src={require('../Components/Photos/indiatv.jpeg')} alt="News Image" />
              <Card.Body>
                <Card.Title>India Tv News</Card.Title>
                <Card.Text>
                  This is a brief description of the news article. Stay updated with the latest happenings.
                </Card.Text>
                <a  href='https://www.indiatvnews.com/livetv'>

                 <Button variant="primary">Read More</Button>
                 
                 </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="news-card">
              <Card.Img variant="top" src={require('../Components/Photos/GNTv.jpg')} alt="News Image" />
              <Card.Body>
                <Card.Title>Good News Today</Card.Title>
                <Card.Text>
                  This is a brief description of the news article. Stay updated with the latest happenings.
                </Card.Text>
               <a href='https://www.gnttv.com/livetv'>
                 <Button variant="primary">Read More</Button>
                 </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="news-card">
              <Card.Img variant="top" src={require('../Components/Photos/Pnjab.png')} alt="News Image" />
              <Card.Body>
                <Card.Title>punjab news 18 live</Card.Title>
                <Card.Text>
                  This is a brief description of the news article. Stay updated with the latest happenings.
                </Card.Text>
               <a href='https://punjab.news18.com/live-tv/'>
                
                <Button variant="primary">Read More</Button>
                </a> 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    <Footer/>
    </div>
    
  );
};

export default HomePage;
