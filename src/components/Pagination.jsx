import React from "react";
import "../styles/pagination.css";

function Pagination({ pagesNeeded, paginate, page }) {
  const pageNumbers = [];

  for (let i = 1; i <= pagesNeeded; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="listContainer">
      <ul className="pageList">
        <button
          className="pageArrow"
          disabled={!(page > 1)}
          onClick={() => paginate(page - 1)}
        >
          {"prev"}
        </button>
        {pageNumbers.map((number) => (
          <li
            onClick={() => {
              paginate(number);
            }}
            key={number}
            className={[
              "pageNumber",
              [number === page ? "activePage" : ""],
            ].join(" ")}
          >
            <label>{number}</label>
          </li>
        ))}
        <button
          className="pageArrow"
          disabled={!(page < pagesNeeded)}
          onClick={() => paginate(page + 1)}
        >
          {"next"}
        </button>
      </ul>
    </div>
  );
}

export default Pagination;
