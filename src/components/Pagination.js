import React, { useState } from "react";
import BSPagination from "react-bootstrap/Pagination";

const Pagination = ({ totalItems, quantityPerPage, onSelectPage }) => {
  const numberOfPages = Math.ceil(totalItems / quantityPerPage);

  const [activePage, setActivePage] = useState(1);

  let items = [];

  const changePage = (selectedPage) => {
    setActivePage(selectedPage);
    onSelectPage(selectedPage - 1);
  };

  for (let number = 1; number <= numberOfPages; number++) {
    items.push(
      <BSPagination.Item
        key={number}
        active={number === activePage}
        onClick={() => changePage(number)}
      >
        {number}
      </BSPagination.Item>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
      <BSPagination size="sm">{items}</BSPagination>
    </div>
  );
};

export default Pagination;
