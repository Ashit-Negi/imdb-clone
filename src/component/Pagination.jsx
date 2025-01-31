import React from "react";

function Pagination({ nextPageFn, previousPageFn, pageNumber }) {
  return (
    <div className="p-4 bg-gray-400 h-[60px] w-full mt-8 flex justify-center">
      <div onClick={previousPageFn} className="px-8">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNumber}</div>
      <div onClick={nextPageFn} className="px-8">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
