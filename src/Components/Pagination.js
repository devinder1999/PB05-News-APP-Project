// src/components/Pagination.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  
  const btn = {
    color: 'Black',
   backgroundColor: 'blue',
   Left:'50px'
    
  };


  return (
    <div className="pagination">
      <button style={btn}
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span> Page {currentPage} of {totalPages} </span>

      <button style={btn}
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
