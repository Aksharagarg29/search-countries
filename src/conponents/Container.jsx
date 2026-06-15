import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import styles from "./Container.module.css";
import Shimmer from "./shimmer";
import shimmer from "./shimmer";

const Container = ({ searchValue, regionValue }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  }, []);

  return (
    <>
      {!data.length ? (
        <Shimmer></Shimmer>
      ) : (
        <div className={styles.country_container}>
          {data
            .filter((country) => {
              return (
                country.name.toLowerCase().includes(searchValue) &&
                country.region.toLocaleLowerCase().includes(regionValue)
              );
            })
            .map((country) => {
              return (
                <CountryCard
                  key={country.name}
                  cName={country.name}
                  cFlag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  data = {country}
                ></CountryCard>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Container;
