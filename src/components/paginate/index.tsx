import React, { useState } from "react";
import "./style.css";
import classNames from "classnames";

export interface PaginateProps {
  initialPage: number;
  pageNumbers: number[];
}

const Paginate: React.SFC<PaginateProps> = ({
  initialPage = 1,
  pageNumbers
}) => {
  const [actualPage, setActualPage] = useState(initialPage);
  const nextPage = () => {
    if (actualPage >= 1 && actualPage < pageNumbers.length) {
      setActualPage(actualPage + 1);
    }
  };
  const previousPage = () => {
    if (actualPage > 1 && actualPage <= pageNumbers.length) {
      setActualPage(actualPage - 1);
    }
  };
  const changePage = (page: number) => {
    try {
      setActualPage(page);
    } catch (err) {
      console.log(err);
      setActualPage(1);
    }
  };
  return (
    <div className="paginate-container">
      <ul className="item-paginate-background">
        <li className="li-item-paginate" onClick={previousPage}>
          &lt;
        </li>
        {pageNumbers.map(page => (
          <li
            className={classNames({
              "li-item-paginate": actualPage !== page,
              "li-active-paginate": actualPage === page
            })}
            onClick={() => changePage(page)}
          >
            {page}
          </li>
        ))}
        <li className="li-item-paginate" onClick={nextPage}>
          >
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
