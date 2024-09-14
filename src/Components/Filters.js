// src/components/Filters.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filters = ({ onFilter }) => {
  const categories = ['Technology', 'Sports', 'Health', 'Science','Hindi','Punjabi','Agriculture','Cricket','War'];
  const countries = ['us', 'Canada', 'in', 'au','pk','ru','ua'];
  const languages = ['English','hi'];

  return (
    <div className="filters">
      <select onChange={(e) => onFilter('category', e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select onChange={(e) => onFilter('country', e.target.value)}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country.toUpperCase()}
          </option>
        ))}
      </select>

      <select onChange={(e) => onFilter('language', e.target.value)}>
        <option value="">Select Language</option>
        {languages.map((language) => (
          <option key={language} value={language}>
            {language.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
