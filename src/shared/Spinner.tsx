import React from "react";
import Loader from "react-loader-spinner";

import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spinner: React.FC = () => (
  <StyledDiv>
    <Loader type="TailSpin" color="gray" height={50} width={50} />
  </StyledDiv>
);

export default Spinner;
