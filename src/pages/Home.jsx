import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import SortAndFilters from "../components/SortAndFilters";
import "../styles/home.css";
import { stateCountries } from "../helpers/helpers";
import { getAllCountries, setLoading } from "../redux/actions";

function Home() {
  // init
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { sort, filters, globalCountries, countriesToShow } = useSelector(
    (state) => state
  );

  const countries = stateCountries(sort, filters, countriesToShow);

  // pagination INIT
  const countriesPerPage = 12;
  const pagesNeeded = Math.ceil(countries.length / countriesPerPage);
  const pageCountries = countries.slice(
    (page - 1) * countriesPerPage,
    page * countriesPerPage
  );

  const paginate = (pageNumber) => setPage(pageNumber);

  // effects
  // Get all countries when mount
  useEffect(() => {
    if (!globalCountries.length) {
      dispatch(setLoading());
      dispatch(getAllCountries());
    }
  }, []); // eslint-disable-line

  // Pagination overflow control
  useEffect(() => {
    if (page > pagesNeeded) setPage(1);
  }, [page, pagesNeeded]);

  return (
    <div>
      <NavBar />
      <div className="gridContainer">
        <div className="sortAndFilters">
          <SortAndFilters />
        </div>
        <div className="cardsAndPag">
          <Pagination
            paginate={paginate}
            pagesNeeded={pagesNeeded}
            totalCountries={countries.length}
            page={page}
          />
          <Cards countries={pageCountries} />
        </div>
      </div>
    </div>
  );
}

export default Home;
