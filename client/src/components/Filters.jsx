import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  setActivityFilter,
  setContinentFilter,
  setLoading,
} from "../redux/actions";
import MarkAllButton from "./MarkAllButton";
import Reset from "./Reset";
import UnmarkAllButton from "./UnmarkAllButton";
import '../styles/filters.css'

function Filters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading())
    dispatch(getActivities());
  }, []); // eslint-disable-line

  const activities = useSelector((state) => state.activities);
  const activityFilter = useSelector((state) => state.filters.activity);
  const continents = useSelector((state) => state.filters.continents);

  function handleOnChange(event) {
    dispatch(setActivityFilter(event.target.value));
  }
  function handleCheckChange(event) {
    dispatch(setContinentFilter([event.target.value, event.target.checked]));
  }

  return (
    <div>
      <div className="activityFilterContainer">
        <label>ACTIVITY FILTER</label>
        <select value={activityFilter} name="activity" onChange={handleOnChange}>
          <option value="">-ALL-</option>
          {activities.length > 0 &&
            activities.map((activity) => (
              <option key={activity.name} value={activity.name}>
                {activity.name}
              </option>
            ))}
        </select>
      </div>
      <div className="continentFilterContainer">
        <label>CONTINENT FILTER</label>
        {Object.keys(continents).length &&
          Object.entries(continents).map((continent) => (
            <div className="continentCheckContainer" key={continent[0]}>
              <label>
                <input
                  className="checkbox"
                  onChange={handleCheckChange}
                  type="checkbox"
                  value={continent[0]}
                  checked={continent[1]}
                />
                {continent[0]}
              </label>
            </div>
          ))}
      </div>
      <MarkAllButton/>
      <UnmarkAllButton/>
      <Reset/>
    </div>
  );
}

export default Filters;
