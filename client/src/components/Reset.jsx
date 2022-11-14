import React from "react";
import { useDispatch } from "react-redux";
import { resetSortAndFilters} from "../redux/actions";

function Reset() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className={["filterButton", "negative"].join(" ")} onClick={() => dispatch(resetSortAndFilters())}>RESET</button>
    </div>
  );
}

export default Reset;
