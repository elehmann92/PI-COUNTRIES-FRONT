import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import {
  areThereMissingFields,
  checkForErrors,
  initialFormState,
} from "../helpers/helpers";
import spinningGlobe from "../assets/static-spinning-globe.png";
import { getAllCountries, setLoading } from "../redux/actions";
import "../styles/activityCreationForm.css";
import "../styles/loading.css";

function ActivityCreationForm() {
  // init
  const [data, setData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  let { countriesToShow, globalCountries, loading } = useSelector(
    (state) => state
  );
  let countryNames = countriesToShow.map((country) => country.name);

  // handlers
  function handleOnChange(event) {
    const targetValue =
      event.target.name === "difficulty" || event.target.name === "duration"
        ? parseInt(event.target.value)
        : event.target.value;
    setData({
      ...data,
      [event.target.name]: targetValue,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    if (areThereMissingFields(data)) {
      alert(
        "There are missing fields to complete. Please check and try again."
      );
      return;
    }
    axios
      .post("/activities", data)
      .then((response) => alert(response.data.message))
      .catch((error) =>
        alert("An error occured. Activity couldn`t been posted")
      );
    setData(initialFormState);
  }

  useEffect(() => {
    if (!globalCountries.length) {
      dispatch(setLoading());
      dispatch(getAllCountries());
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    setErrors(checkForErrors(data));
  }, [data]);

  return (
    <div>
      <div className="navContainer">
        <NavBar />
      </div>
      <div className="formMainContainer">
        <div className="safeBox">
          <div className="formTitle">ACTIVITY CREATION FORM</div>
          {loading ? (
            <div className="loadingCenteredContainer">
              <Loading />
            </div>
          ) : (
            <div className="layout">
              <form className="form" onSubmit={handleOnSubmit}>
                <div className="formPieceContainer">
                  <label className="boldTitle">ACTIVITY</label>
                  <input
                    className="nameInput"
                    name="name"
                    placeholder="Enter name..."
                    type="text"
                    value={data.name}
                    onChange={handleOnChange}
                  />
                  <label className="errorLabel">{errors.activity}</label>
                </div>
                <hr />
                <div className="formPieceContainer">
                  <label className="boldTitle">DIFFICULTY</label>
                  <input
                    id="difficulty"
                    name="difficulty"
                    type="range"
                    min="0"
                    max="5"
                    value={data.difficulty}
                    onChange={handleOnChange}
                  />
                  <label className="boldTitle">{data.difficulty}</label>
                  <label className="errorLabel">
                    {errors.difficulty || ""}
                  </label>
                </div>
                <hr />
                <div className="formPieceContainer">
                  <label className="boldTitle">DURATION</label>
                  <input
                    id="duration"
                    name="duration"
                    type="range"
                    min="0"
                    max="24"
                    value={data.duration}
                    onChange={handleOnChange}
                  />
                  <label className="boldTitle">{data.duration} hours</label>
                  <label className="errorLabel">{errors.duration}</label>
                </div>
                <hr />
                <div className="formPieceContainer">
                  <label className="boldTitle">SEASON</label>
                  <select
                    className="formSelect"
                    name="season"
                    value={data.season}
                    onChange={handleOnChange}
                  >
                    <option value="" disabled="disabled">
                      Select...
                    </option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Fall">Fall</option>
                    <option value="Any">Any</option>
                  </select>
                  <label className="errorLabel">{errors.season}</label>
                </div>
                <div className="formPieceContainer">
                  <input
                    className="createButton"
                    type="submit"
                    value="CREATE"
                    disabled={areThereMissingFields(data)}
                  />
                  <label className="errorLabel">{errors.countries}</label>
                </div>
              </form>
              <div className="countrySelection">
                <label>FILTER TAGS</label>
                <SearchBar />
                <div className="countryTagsContainer">
                  <div
                    className={["tagContainer", "availableCountries"].join(" ")}
                  >
                    <label>ADD COUNTRIES:</label>
                    <div className="countriesAvailable">
                      {countryNames
                        ?.sort()
                        .filter((name) => !data.countries.includes(name))
                        .slice(0, 5)
                        .map((name) => (
                          <div key={name} className="countryTag">
                            <img
                              alt={name}
                              src={
                                globalCountries.find((ele) => ele.name === name)
                                  ?.flag || spinningGlobe
                              }
                              className="flagIcon"
                            />
                            <label>{name}</label>
                            <button
                              className={[
                                "addCountryButton",
                                "controlButton",
                              ].join(" ")}
                              onClick={() =>
                                setData({
                                  ...data,
                                  countries: [...data.countries, name],
                                })
                              }
                            >
                              +
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div
                    className={[
                      "tagContainer",
                      "selectedCountriesContainer",
                    ].join(" ")}
                  >
                    <label>COUNTRIES SELECTED:</label>
                    <div className="selectedCountries">
                      {!data.countries?.length ? (
                        <label>
                          Select at least one country. You can filter them by
                          name.
                        </label>
                      ) : (
                        data.countries?.sort().map((name) => (
                          <div key={name} className="countryTag">
                            <img
                              alt={name}
                              src={
                                globalCountries.find((ele) => ele.name === name)
                                  ?.flag || spinningGlobe
                              }
                              className="flagIcon"
                            />
                            <label>{name}</label>
                            <button
                              className={[
                                "removeCountryButton",
                                "controlButton",
                              ].join(" ")}
                              onClick={() =>
                                setData({
                                  ...data,
                                  countries: data.countries.filter(
                                    (country) => country !== name
                                  ),
                                })
                              }
                            >
                              -
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ActivityCreationForm;
