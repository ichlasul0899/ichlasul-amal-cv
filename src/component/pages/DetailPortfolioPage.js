import React from 'react';
import {
  useParams,
} from "react-router-dom";
import Portfolio from '../Portfolio';

const DetailPortfolioPage = () => {
  let { id } = useParams();
  return (
    <>
      {/* <h3>ID: {id}</h3> */}
      <Portfolio from={"detail"} id={id} />
    </>
  );
}

export default DetailPortfolioPage