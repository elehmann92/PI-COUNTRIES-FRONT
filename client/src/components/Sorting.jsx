import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortCountries } from "../redux/actions";
import '../styles/sorting.css'

function Sorting() {
  const dispatch = useDispatch();
  const globalSort = useSelector((state) => state.sort);
  const [sort, setSort] = useState({
    sortBy: globalSort.sortBy,
    order: globalSort.order,
  });

  function handleOnChange(event) {
    setSort({
      ...sort,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    dispatch(sortCountries(sort));
  }, [sort, dispatch]); // eslint-disable-line

  return (
    <div className="sortMainContainer">
      <label>SORTING OPTIONS</label>
      <div className="sortContainer">
        <label>SORT BY</label>
        <select name="sortBy" value={globalSort.sortBy} onChange={handleOnChange}>
          <option value="name">Name</option>
          <option value="population">Population</option>
        </select>
      </div>
      <div className="sortContainer">
        <label>ORDER</label>
        <select name="order" value={globalSort.order} onChange={handleOnChange}>
          <option value="AZ">Asc.</option>
          <option value="ZA">Desc.</option>
        </select>
      </div>
    </div>
  );
}

export default Sorting;
