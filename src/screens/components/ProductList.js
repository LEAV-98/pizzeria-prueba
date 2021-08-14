import React, { useState } from "react";
import { ProductItem } from "./ProductItem";
import ReactPaginate from "react-paginate";

export const ProductList = ({ products }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 2;
  const pageVisited = pageNumber * itemPerPage;
  const displayItems = products
    .slice(pageVisited, pageVisited + itemPerPage)
    .map((product) => <ProductItem {...product} key={product.id} />);
  const pageCount = Math.ceil(products.length / itemPerPage);
  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="product-container animate__animated  animate__fadeIn">
      <div className="product-list">{displayItems}</div>
      <ReactPaginate
        previousLabel={"Atrás"}
        nextLabel={"Siguiente"}
        pageCount={pageCount}
        onPageChange={handleChangePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};
