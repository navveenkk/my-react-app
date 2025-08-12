import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <BootstrapPagination className="justify-content-center my-4">
      {[...Array(totalPages).keys()].map(number => (
        <BootstrapPagination.Item
          key={number + 1}
          active={number + 1 === currentPage}
          className={number + 1 === currentPage ? 'active-page' : ''}
          onClick={() => paginate(number + 1)}
        >
          {number + 1}
        </BootstrapPagination.Item>
      ))}
    </BootstrapPagination>
  );
};

export default Pagination;