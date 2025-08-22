import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="paginationOrder">
        <ul className="pagination" role="navigation" aria-label="Pagination">
          <li className="page-item disabled">
            <a
              className="page-previous-link "
              tabIndex={-1}
              role="button"
              aria-disabled="true"
              aria-label="Previous page"
              rel="prev"
            >
              Previous
            </a>
          </li>
          <li className="page--item activePagination">
            <a
              rel="canonical"
              role="button"
              className="page--link"
              tabIndex={-1}
              aria-label="Page 1 is your current page"
              aria-current="page"
            >
              1
            </a>
          </li>
          <li className="page--item">
            <a
              rel="next"
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 2"
            >
              2
            </a>
          </li>
          <li className="page--item">
            <a
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 3"
            >
              3
            </a>
          </li>
          <li className="page--item">
            <a
              className="page--link"
              role="button"
              tabIndex={0}
              aria-label="Jump forward"
            >
              ...
            </a>
          </li>
          <li className="page--item">
            <a
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 91"
            >
              91
            </a>
          </li>
          <li className="page--item">
            <a
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 92"
            >
              92
            </a>
          </li>
          <li className="page--item">
            <a
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 93"
            >
              93
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-next-link"
              tabIndex={0}
              role="button"
              aria-disabled="false"
              aria-label="Next page"
              rel="next"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
