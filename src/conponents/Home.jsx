import React, { useContext, useEffect } from "react";
import FirstContainer from "./firstContainer";
import Container from "./Container";
import { useState } from "react";
import { themeContext } from "../../contexts/themeContext.jsx";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [regionValue, setRegionValue] = useState("");
  const [isDark] = useContext(themeContext);
  return (
    <section className={`${isDark ? "dark" : ""}`}>
      <FirstContainer
        setSearchValue={setSearchValue}
        setRegionValue={setRegionValue}
      ></FirstContainer>
      <Container
        searchValue={searchValue}
        regionValue={regionValue}
      ></Container>
    </section>
  );
};

export default Home;
