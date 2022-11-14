import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ActivityCards from "../components/ActivityCards";
import NavBar from "../components/NavBar";
import { cleanCountry, getCountryById, setLoading } from "../redux/actions";
import NoMatch from "../components/NoMatch";
import goBackArrow from "../assets/goBackArrow.png";
import Loading from "../components/Loading";
import "../styles/countryDetails.css";
import "../styles/landing.css";
// import '../styles/navBar.css'

function CountryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getCountryById(id));

    return () => {
      dispatch(cleanCountry());
    };
  }, [id, dispatch]);

  const { country, loading } = useSelector((state) => state);

  return (
    <div>
      <div className="navContainer">
        <NavBar />
      </div>
      <button className="goBackButton" onClick={() => navigate("/home")}>
        <img src={goBackArrow} alt="GO BACK" />
      </button>
      {loading ? (
        <div className="loadingCenteredContainer">
          <Loading />
        </div>
      ) : !country ? (
        <NoMatch />
      ) : (
        <div className="country-detail-container">
          <div className="flagBox">
            <h2>{country.name}</h2>
            <img src={country.flag} alt="" />
            <div className="infoBox">
              <div className="singleInfo">
                <label className="infoTitle">ID: </label>
                <label className="infoDescription">{country.id}</label>
              </div>
              <div className="singleInfo">
                <label className="infoTitle">CONTINENT: </label>
                <label className="infoDescription">{country.continent}</label>
              </div>
              <div className="singleInfo">
                <label className="infoTitle">CAPITAL: </label>
                <label className="infoDescription">{country.capital}</label>
              </div>
              <div className="singleInfo">
                <label className="infoTitle">SUBREGION: </label>
                <label className="infoDescription">{country.subregion}</label>
              </div>
              <div className="singleInfo">
                <label className="infoTitle">AREA: </label>
                <label className="infoDescription">
                  {country.area < 1000000
                    ? `${country.area.toLocaleString()} km2`
                    : `${(country.area / 1000000).toLocaleString()} MM km2`}
                </label>
              </div>
              <div className="singleInfo">
                <label className="infoTitle">POPULATION: </label>
                <label className="infoDescription">
                  {country.population?.toLocaleString()}
                </label>
              </div>
            </div>
          </div>
          <div className="activities">
            <div className="activityBoxTitle">REGISTERED ACTIVITIES </div>
            <div className="activityDiv">
              <div className="activityBox">
                {country.Activities?.length ? (
                  <ActivityCards activities={country.Activities} />
                ) : (
                  <div className="noActivitiesMsg">
                    There are no activities registered for this country yet.
                    Feel free to post yours!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryDetail;
