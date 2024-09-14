// src/components/NewsFeed.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button } from 'react-bootstrap';

import '../Components/Css Folder/NewsFeed.css'


import Filters from './Filters';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

import Footer from './Footer';


import axios from 'axios';

import '../App.css';

const NewsFeed = () => {

  // State for managing news and other app data
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch news data from gnews.io

  useEffect(() => {

    const fetchNews = async () => {


      try {
        const params = {
          q: query || 'default query',
          page: page,
          category: filters.category || '',
          country: filters.country || '',
          language: filters.language || 'en',
          apiKey: '6a129c88fa3da43fc61f028b05a8a6f8',
          max: 10, // Assuming 10 articles per page
        };



        const { data } = await axios.get(
          'https://gnews.io/api/v4/top-headlines',
          { params: params }
        );

        console.log('API Response:', data);

        // Validate API response before setting state

        if (data.articles && data.articles.length > 0) 
          {
          setNews(data.articles);

          const totalResults = data.totalResults || 0;

          const calculatedTotalPages = Math.ceil(totalResults / 10);

          setTotalPages(calculatedTotalPages > 0 ? calculatedTotalPages : 1); // Set minimum of 1 page

          console.log('Total Pages:', calculatedTotalPages);

        } 
        
        else 
        {
          setNews([]);
          setTotalPages(1); // Default to 1 page if no results
        }


      } 
      
      catch (error) {
        console.error('Error fetching news:', error.response ? error.response.data : error.message);
        setErrorMessage('Error fetching news. Please try again later.');
      }


    };

    fetchNews();
  }, [query, filters, page]);

  // Handle page change for pagination

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }


  };


  return (
    <>
    
    <div className="news-feed container my-4">
      
      <div>
      <h1 className="text-center">Welome For My News Channel</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}<br/>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">

          {news.map((article) => (

            <Col key={article.url}>

              <Card className="news-item h-100 shadow-sm">

                {article.image && (

                  <Card.Img variant="top" src={article.image} alt={article.title} />

                )}

                <Card.Body>

                  <Card.Title>{article.title}</Card.Title>

                  <Card.Text>{article.description}</Card.Text>

                  <Button variant="primary" href={article.url} target="_blank" rel="noopener noreferrer">

                    Read more

                  </Button>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

        <div className="filters-search-container">

          <Filters onFilter={(type, value) => setFilters({ ...filters, [type]: value })} />

          <SearchBar onSearch={(q) => setQuery(q)} />

        </div>

        <Pagination 
        
          totalPages={totalPages} 
          currentPage={page} 
          onPageChange={handlePageChange} 

        />

        <h1 className="text-center">Thank-You For Visiting Our News App</h1>

      </div>
    </div>
      <Footer/>
  </>
  );
};

export default NewsFeed;
