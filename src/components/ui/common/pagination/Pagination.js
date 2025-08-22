import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="paginationOrder">
        <ul className="pagination" role="navigation" aria-label="Pagination">
          <li className="page-item disabled">
            <Link
              className="page-previous-link "
              tabIndex={-1}
              role="button"
              aria-disabled="true"
              aria-label="Previous page"
              rel="prev"
            >
              Previous
            </Link>
          </li>
          <li className="page--item activePagination">
            <Link
              rel="canonical"
              role="button"
              className="page--link"
              tabIndex={-1}
              aria-label="Page 1 is your current page"
              aria-current="page"
            >
              1
            </Link>
          </li>
          <li className="page--item">
            <Link
              rel="next"
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 2"
            >
              2
            </Link>
          </li>
          <li className="page--item">
            <Link
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 3"
            >
              3
            </Link>
          </li>
          <li className="page--item">
            <Link
              className="page--link"
              role="button"
              tabIndex={0}
              aria-label="Jump forward"
            >
              ...
            </Link>
          </li>
          <li className="page--item">
            <Link
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 91"
            >
              91
            </Link>
          </li>
          <li className="page--item">
            <Link
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 92"
            >
              92
            </Link>
          </li>
          <li className="page--item">
            <Link
              role="button"
              className="page--link"
              tabIndex={0}
              aria-label="Page 93"
            >
              93
            </Link>
          </li>
          <li className="page-item">
            <Link
              className="page-next-link"
              tabIndex={0}
              role="button"
              aria-disabled="false"
              aria-label="Next page"
              rel="next"
            >
              Next
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
