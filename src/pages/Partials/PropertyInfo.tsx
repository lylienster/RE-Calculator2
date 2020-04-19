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
        type="text"
      />
      <label>Property City</label>
      <FormControl
        value={data.city || ""}
        onChange={handleOnChange}
        name="city"
        type="text"
      />
      <label>Property State</label>
      <FormControl
        value={data.state || ""}
        onChange={handleOnChange}
        name="state"
        type="text"
      />
      <label>Property Zip</label>
      <FormControl
        value={data.zip || ""}
        onChange={handleOnChange}
        name="zip"
        type="text"
      />
      <label>Annual Property Taxes</label>
      <FormControl
        value={data.annualPropertyTaxes || ""}
        onChange={handleOnChange}
        name="annualPropertyTaxes"
        type="text"
      />
      <label>MLS Number</label>
      <FormControl
        value={data.mlsNumber || ""}
        onChange={handleOnChange}
        name="mlsNumber"
        type="text"
      />
      <label>Property Sales Description</label>
      <FormControl
        value={data.salesDescription || ""}
        onChange={handleOnChange}
        name="salesDescription"
        type="text"
      />
    </div>
  );
};

export default PropertyInfo;
