import React, { Fragment, useContext, useEffect, useState } from "react";
import styles from "./countryDetails.module.css";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Shimmer from "./shimmerDetails.jsx";
import { themeContext } from "../../contexts/themeContext.jsx";

const countryDetails = () => {
  const [isDark] = useContext(themeContext)
  const params = useParams();
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const { state } = useLocation();
  console.log(state);

  function update_data(data) {
    if (state) {
      setCountryData({
        name: data.name,
        flag: data.flag,
        native_name: data.nativeName,
        population: data.population.toLocaleString("en-IN"),
        region: data.region,
        subregion: data.subregion,
        capital: data.capital,
        timezone: data.timezones,
        area: data.area,
        borders: [],
      });
      data.borders?.map((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            setCountryData((prevState) => ({
              ...prevState,
              borders: [...prevState.borders, borderCountry.name.common],
            }));
          });
      });
    } else {
      setCountryData({
        name: data[0].name.common,
        flag: data[0].flags.svg,
        native_name: data[0].name.official,
        population: data[0].population.toLocaleString("en-IN"),
        region: data[0].region,
        subregion: data[0].subregion,
        capital: data[0].capital,
        timezone: data[0].timezones,
        area: data[0].area,
        borders: [],
      });
      data[0].borders?.map((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => {
            setCountryData((prevState) => ({
              ...prevState,
              borders: [...prevState.borders, borderCountry.name.common],
            }));
          });
      });
    }
  }

  useEffect(() => {
    if (state) {
      update_data(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        update_data(data);
      })
      .catch(() => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return (
      <>
        <div className={`${styles.back} ${isDark ? styles.dark : ''}`}>
          <button
            onClick={() => {
              history.back();
            }}
          >
            Back
          </button>
        </div>
        <div>Country not found.</div>
      </>
    );
  }
  return countryData === null ? (
    <>
      <div className={`${styles.back} ${isDark ? styles.dark : ''}`}>
        <button
          onClick={() => {
            history.back();
          }}
        >
          Back
        </button>
      </div>
      <Shimmer></Shimmer>
    </>
  ) : (
    <>
      <div className={`${styles.back} ${isDark ? styles.dark : ''}`}>
        <button
          onClick={() => {
            history.back();
          }}
        >
          Back
        </button>
      </div>
      <section className={`${styles.details} ${isDark ? styles.dark : ''}`}>
        <div className={styles.flag}>
          <img src={countryData.flag} alt="" />
        </div>
        <div className={styles.info}>
          <h1>{countryData.name}</h1>
          <div className={styles.more}>
            <ul className={styles.first}>
              <li>
                <b>Native Name : </b>
                {countryData.native_name}
              </li>
              <br />
              <li>
                <b>Population : </b>
                {countryData.population}
              </li>
              <br />
              <li>
                <b>Region : </b>
                {countryData.region}
              </li>
              <br />
              <li>
                <b>Subregion : </b>
                {countryData.subregion}
              </li>
              <br />
            </ul>
            <ul className={styles.second}>
              <li>
                <b>Capital : </b>
                {countryData.capital}
              </li>
              <br />
              <li>
                <b>Timezones : </b>
                {countryData.timezone}
              </li>
              <br />
              <li>
                <b>Area : </b>
                {countryData.area}
              </li>
              <br />
            </ul>
          </div>
          {countryData.borders.length != 0 && (
            <div className={styles.border}>
              Borders :
              {countryData.borders.map((border) => {
                return <Link to={`/${border}`}>{border}</Link>;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default countryDetails;
