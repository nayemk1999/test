import React, { useEffect, useState } from 'react';
import Header from '../Home/Header/Header/Header';
import SearchBar from '../Home/SearchBar/SearchBar';
import TableSpinner from '../Spinner/Spinner';
import { useLocation } from "react-router-dom";
import './ShopPage.css'
import ShopPageCard from './ShopPageCard';
import ReactPaginate from 'react-paginate';
import Footer from '../Home/Footer/Footer';

const ShopPage = () => {
  const location = useLocation();
  const searchData = location.state.detail
  const url = 'https://toprakserver.herokuapp.com/property/all-post'
  const [allPost, setAllPost] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  // console.log(searchData);
  // setAllPost(searchData)
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPost(data))
  }, [])


  // Here ADD CardPerPage NUMBER****** For example I have added [4] *********************
  const cardPerPage = 4
  const pagesVisited = pageNumber * cardPerPage

  const displayCards = (searchData || allPost).slice(pagesVisited, pagesVisited + cardPerPage).map(propsData => <ShopPageCard key={propsData._id} propsData={propsData} />)
  
  const pageCount = Math.ceil(searchData.length || allPost.length / cardPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div>
      <Header />
      <div className="search-bar shop__page__search">
        <SearchBar />
      </div>
      <div className="shop__page__container container">
        <h1 className="text-center">Choose your Property</h1>
        <div className="row">
          {/* {searchData.length ?
                    searchData.map(propsData => <ShopPageCard key={propsData._id} propsData={propsData} />)
                    : <TableSpinner />
                    } */}
          {displayCards}

        </div>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <ReactPaginate
            previousLabel={"<<Previous"}
            nextLabel={"Next>>"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;