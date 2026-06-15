import React, { useContext } from "react";
import styles from "./firstContainer.module.css"
import { themeContext } from "../../contexts/themeContext";

const firstContainer = ({setSearchValue, setRegionValue}) => {
  const [isDark] = useContext(themeContext)
  return (
    <div className={styles.first_container}>
      <div className={styles.search_box} >
        <img src={`https://animated-jelly-4922bf.netlify.app/${isDark ? 'search-svgrepo-com':'magnifying-glass-solid'}.svg`} alt="" height='20'/>
        <input 
          type="text" 
          placeholder="Search for a country..." 
          onChange={(e)=>{setSearchValue((e.target.value).toLowerCase())}} 
        />
      </div>
      <div className={styles.find_box}>
        <input
          list="countries"
          name="countries"
          placeholder="Filter by Region"
          onChange={(e)=>{setRegionValue((e.target.value).toLowerCase())}} 
        />
        <datalist id="countries">
          <option value="Africa"></option>
          <option value="America"></option>
          <option value="Asia"></option>
          <option value="Europe"></option>
          <option value="Oceania"></option>
        </datalist>
      </div>
    </div>
  );
};

export default firstContainer;