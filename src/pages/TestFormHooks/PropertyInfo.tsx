import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import InputContainer from "./InputContainer";
import RentalPropertyInfo from "./RentalPropertyInfo";

interface Props {
  register: any;
  data: RentalPropertyInfo;
}

const PropertyInfo = ({ data, register }: Props) => {
  return (
    <div>
      <div className="mx-auto" style={{ width: "auto" }}>
        <h2 className="py-md-2">Property Info</h2>
      </div>
      <Row>
        <InputContainer
          register={register}
          label="Report Title"
          name="reportTitle"
          type="text"
        />
      </Row>
      <Row>
        <InputContainer
          register={register}
          label="Property Address"
          name="address"
          value={data.address}
          type="text"
        />
        <InputContainer
          register={register}
          label="Property City"
          name="city"
          value={data.city}
          type="text"
        />
        <InputContainer
          register={register}
          label="Property State"
          name="state"
          value={data.state}
          type="text"
        />
        <InputContainer
          register={register}
          label="Property Zip"
          name="zip"
          value={data.zip}
          type="text"
        />
        <Col md={6}>
          <label>Property Sales Description</label>
          <textarea
            rows={3}
            name="salesDescription"
            className="form-control"
            ref={register}
            defaultValue={data.salesDescription}
          ></textarea>
        </Col>
        <InputContainer
          register={register}
          label="Annual Property Taxes"
          name="annualPropertyTaxes"
          value={data.annualPropertyTaxes}
          type="number"
        />
        <InputContainer
          register={register}
          label="MLS Number"
          name="mlsNumber"
          value={data.mlsNumber}
          type="text"
        />
      </Row>
    </div>
  );
};

export default PropertyInfo;
