import React from "react";
import Loader from "react-loader-spinner";

import "./Spinner.scss";

const Spinner: React.FC = () => (
  <div className="spinner">
    <Loader type="TailSpin" color="gray" height={50} width={50} />
  </div>
);

export default Spinner;
