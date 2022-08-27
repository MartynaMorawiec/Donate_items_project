import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const InfoTab = ({ foundations, description }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(foundations.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(foundations.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, foundations]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % foundations.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="help">
        <p className="help__description">{description}</p>
      </div>

      {currentItems.map((element) => {
        return (
          <div className="help__content" key={element.id}>
            <div>
              <h4 className="help__title">{element.title}</h4>
              <p className="help__text">{element.text}</p>
            </div>
            <div className="help__details">{element.details}</div>
          </div>
        );
      })}
      {pageCount === 1 ? (
        ""
      ) : (
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName="page"
          pageLinkClassName="page__num"
          activeLinkClassName="page__active"
        />
      )}
    </div>
  );
};

export default InfoTab;
