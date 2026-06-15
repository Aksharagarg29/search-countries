import React from "react";
import { useParams } from "react-router-dom";

const contact = () => {
  const params = useParams();
  console.log(params);
  return <div>contact us</div>;
};

export default contact;
