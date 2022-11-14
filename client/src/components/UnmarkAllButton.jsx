import React from "react";
import { useDispatch } from "react-redux";
import { unmarkAllContinents } from "../redux/actions";

function UnmarkAllButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className={["filterButton", "negative"].join(" ")} onClick={() => dispatch(unmarkAllContinents())}>UNMARK ALL</button>
    </div>
  );
}

export default UnmarkAllButton;
