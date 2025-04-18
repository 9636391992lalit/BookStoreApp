import React, { useState } from 'react';
import axios from 'axios';

const SearchFilter = ({ setBooks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    const params = {};
    if (searchTerm) params.title = searchTerm;
    if (category) params.category = category;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    axios
      .get('http://localhost:4001/book', { params })
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-wrap gap-3 mb-4 items-center justify-center">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="input input-bordered"
      >
        <option value="">All Categories</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Mathematics">Mathematics</option>
        <option value="Literature">Literature</option>
      </select>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="input input-bordered"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="input input-bordered"
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
