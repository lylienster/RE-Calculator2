import React from "react";
import { Data } from "../BrrrrCalculator";

interface Props {
  data: Data;
}

const Report = ({ data }: Props) => {
  const { address = "", city = "", state = "", zip = "" } = data;
  const hasFullAddress = address && city && state && zip;
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{hasFullAddress && `${address} ${city} ${state}, ${zip}`}</h2>
    </div>
  );
};

export default Report;
