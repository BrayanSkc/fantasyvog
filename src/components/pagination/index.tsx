import React, { useMemo } from "react";
import "./style.css";

export interface PaginationProps {
  postPerPage: number;
  totalPost: number;
  paginate: Function;
}

const getArrayFilled = (limit: number) => {
  const pageNumbers = [];
  for (let i = 1; i <= limit; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

const Pagination: React.SFC<PaginationProps> = ({
  postPerPage,
  totalPost,
  paginate
}) => {
  const pageNumbers = useMemo(
    () => getArrayFilled(Math.ceil(totalPost / postPerPage)),
    [totalPost, postPerPage]
  );

  return (
    <nav>
      <ul className="pagination-container">
        <span>A</span>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <path to={"!#"} onClick={() => paginate(number)}>
              {number}
            </path>
          </li>
        ))}
        <span>B</span>
      </ul>
    </nav>
  );
};

export default Pagination;
