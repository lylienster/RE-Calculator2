import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Data } from "../BuyAndHoldCalculator";
import InputContainer from "../Components/InputContainer";

interface Props {
  data: Data;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PropertyInfo = ({ data, handleOnChange }: Props) => {
  return (
    <div>
      <div className="mx-auto" style={{ width: "auto" }}>
        <h2 className="py-md-2">Property Info</h2>
      </div>
      <Row>
        <InputContainer
          label="Report Title"
          value={data.reportTitle}
          onChange={handleOnChange}
          name="reportTitle"
          type="text"
          required={true}
        />
      </Row>
      <Row>
        <InputContainer
          label="Property Address"
          value={data.address}
          onChange={handleOnChange}
          name="address"
          type="text"
        />
        <InputContainer
          label="Property City"
          value={data.city}
          onChange={handleOnChange}
          name="city"
          type="text"
        />
        <InputContainer
          label="Property State"
          value={data.state}
          onChange={handleOnChange}
          name="state"
          type="text"
        />
        <InputContainer
          label="Property Zip"
          value={data.zip}
          onChange={handleOnChange}
          name="zip"
          type="text"
        />
        <Col md={6}>
          <label>Property Sales Description</label>
          <Form.Control
            as="textarea"
            rows="3"
            value={data.salesDescription || ""}
            onChange={handleOnChange}
            name="salesDescription"
          />
        </Col>
        <InputContainer
          label="Annual Property Taxes"
          value={data.annualPropertyTaxes}
          onChange={handleOnChange}
          name="annualPropertyTaxes"
          type="text"
        />
        <InputContainer
          label="MLS Number"
          value={data.mlsNumber}
          onChange={handleOnChange}
          name="mlsNumber"
          type="text"
        />
      </Row>
    </div>
  );
};

export default PropertyInfo;
