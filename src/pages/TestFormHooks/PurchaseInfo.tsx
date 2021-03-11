import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";

interface Props {
  register: any;
}
const PurchaseInfo = ({ register }: Props) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Purchase Info</h2>
      <Row>
        <Col md={3}>
          <label>Purchase Price</label>
          <FormControl type="number" name="purchasePrice" ref={register} />
        </Col>
        <Col md={3}>
          <label>After Repair Value</label>
          <FormControl type="number" name="afterRepairPrice" ref={register} />
        </Col>
        <Col md={3}>
          <label>Purchase Closing Cost</label>
          <FormControl
            type="number"
            name="purchaseClosingCost"
            ref={register}
          />
        </Col>
        <Col md={3}>
          <label>Estimated Repair Cost</label>
          <FormControl type="number" name="estimateRepairCost" ref={register} />
        </Col>
        <Col md={3}>
          <label>Down Payment Percentage of Purchase Price</label>
          <FormControl
            type="number"
            name="downPaymentPercentage"
            ref={register}
          />
        </Col>
        <Col md={3}>
          <label>Loan Interest Rate</label>
          <FormControl type="number" name="loanInterestRate" ref={register} />
        </Col>
        <Col md={3}>
          <label>Amortized Over How Many Years</label>
          <FormControl type="number" name="loanPeriod" ref={register} />
        </Col>
      </Row>
    </div>
  );
};

export default PurchaseInfo;
