import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/CardText';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ProductItem from '../components/ProductItem.jsx';
import siteData from '../data';
import Pagination from '../components/Pagination.jsx';
import ProductGrid from '../components/product-grid.jsx';
import { useContext } from 'react';

  const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const category = searchParams.get('category');
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
  
    // Filter mock products based on the search query and category
    useEffect(() => {
        setCurrentPage(1);
      const filteredResults = siteData.products.filter(product => {
        const matchesQuery = !query || product.name.toLowerCase().includes(query.toLowerCase()) || product.description.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
        return matchesQuery && matchesCategory;
      });
      setResults(filteredResults);
    }, [query, category]);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(results.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="container-fluid">
        {/* <h1 className="mb-4">
          {query || category ? `Search Results for "${query}" in "${category || 'All Categories'}"` : 'Please enter a search query or select a category.'}
        </h1> */}
        {currentItems.length > 0 ? (
          <>
 <ProductGrid products={currentItems} />
          <Pagination
 itemsPerPage={itemsPerPage}
 totalItems={results.length}
 currentPage={currentPage}
 paginate={paginate}
 />
          </>
        ) : (
          <div className="text-center">
            <p className="lead">No products found matching your search.</p>
          </div>
        )}
      </div>
    );
  };
  export default SearchPage