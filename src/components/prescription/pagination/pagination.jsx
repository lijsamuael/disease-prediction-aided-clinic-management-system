import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  handlePrevPage,
  handleNextPage,
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5; // Change this to adjust the number of page numbers to display
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
    let endPage = startPage + maxPageNumbers - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
      // pageNumbers.pop('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (startPage > 1) {
      pageNumbers.unshift("...");
      pageNumbers.unshift(1);
    }

    if (endPage < totalPages) {
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  console.log(getPageNumbers());

  return (
    <nav>
      <ul className="flex bg-white rounded-lg font-[Poppins]">
        <li onClick={handlePrevPage}>
          <button
            className={`h-12 border-2 border-r-0 border-blue-500
               px-4 rounded-l-lg  ${
                 currentPage !== 1
                   ? "hover:bg-blue-500 hover:text-white border-blue-500"
                   : "hover:bg-blue-200 border-blue-300"
               }`}
          >
            prev
          </button>
        </li>
        {getPageNumbers().map((number, index) => (
          <li key={index}>
            <button
              onClick={() => {
                if (number !== "...") {
                  paginate(number);
                }
              }}
              className={`h-12 border-2 border-r-0 border-blue-500 
               w-12 hover:bg-blue-200 ${
                 currentPage === number && "bg-blue-500 text-white"
               }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li onClick={handleNextPage}>
          <button
            className={`h-12 border-2  
               px-4 rounded-r-lg ${
                 currentPage !== totalPages
                   ? "hover:bg-blue-500 hover:text-white border-blue-500"
                   : "hover:bg-blue-200 border-blue-300"
               }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;