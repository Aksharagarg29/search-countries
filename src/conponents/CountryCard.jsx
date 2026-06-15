import React from "react";
import styles from "./CountryCard.module.css";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  return (
    <Link to={`/${props.cName}`} className={styles.cards} state={props.data}>
      <img
        src={props.cFlag}
        alt="flag"
        className={styles.flag}
      />
      <div className={styles.info}>
        <h3>{props.cName}</h3>
        <div className={styles.country_info}>
          <p>
            <b>Population : {props.population.toLocaleString('en-IN')}</b>
          </p>
          <p>
            <b>Region : {props.region} </b>
          </p>
          <p>
            <b>Capital : {props.capital} </b>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
