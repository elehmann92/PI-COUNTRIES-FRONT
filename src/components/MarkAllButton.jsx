import React from "react";
import { useDispatch } from "react-redux";
import { markAllContinents } from "../redux/actions";

function MarkAllButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <button className={["filterButton", "positive"].join(" ")} onClick={() => dispatch(markAllContinents())}>MARK ALL</button>
    </div>
  );
}

export default MarkAllButton;
