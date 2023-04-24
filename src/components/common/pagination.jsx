import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((page) => {
            return (
              <li
                key={page}
                className={
                  "page-item " + (page === currentPage ? "active" : "")
                }
              >
                <a onClick={() => onPageChange(page)} className="page-link">
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
