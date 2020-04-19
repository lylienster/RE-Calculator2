import React from "react";
import { FormControl } from "react-bootstrap";
import { Data } from "../BrrrrCalculator";

interface Props {
  data: Data;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PropertyInfo = ({ data, handleOnChange }: Props) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <div className="mx-auto" style={{ width: "auto" }}>
        <h2 className="py-md-2">Property Info</h2>
      </div>
      <label>Property Address</label>
      <FormControl
        value={data.address || ""}
        onChange={handleOnChange}
        name="address"
      />
      <label>Property City</label>
      <FormControl
        value={data.city || ""}
        onChange={handleOnChange}
        name="city"
      />
      <label>Property State</label>
      <FormControl
        value={data.state || ""}
        onChange={handleOnChange}
        name="state"
      />
      <label>Property Zip</label>
      <FormControl
        value={data.zip || ""}
        onChange={handleOnChange}
        name="zip"
      />
      <label>Annual Property Taxes</label>
      <FormControl
        value={data.annualPropertyTaxes || ""}
        onChange={handleOnChange}
        name="annualPropertyTaxes"
      />
      <label>MLS Number</label>
      <FormControl
        value={data.mlsNumber || ""}
        onChange={handleOnChange}
        name="mlsNumber"
      />
      <label>Property Sales Description</label>
      <FormControl
        value={data.salesDescription || ""}
        onChange={handleOnChange}
        name="salesDescription"
      />
    </div>
  );
};

export default PropertyInfo;
