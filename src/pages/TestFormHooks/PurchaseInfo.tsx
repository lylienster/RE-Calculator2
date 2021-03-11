import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import InputContainer from "./InputContainer";
import RentalPropertyInfo from "./RentalPropertyInfo";

interface Props {
  register: any;
  data: RentalPropertyInfo;
}
const PurchaseInfo = ({ register, data }: Props) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Purchase Info</h2>
      <Row>
        <InputContainer
          register={register}
          label="Purchase Price"
          name="purchasePrice"
          value={data.purchasePrice}
          type="number"
        />
        <InputContainer
          register={register}
          label="After Repair Value"
          name="afterRepairPrice"
          value={data.afterRepairPrice}
          type="number"
        />
        <InputContainer
          register={register}
          label="Purchase Closing Cost"
          name="purchaseClosingCost"
          value={data.purchaseClosingCost}
          type="number"
        />
        <InputContainer
          register={register}
          label="Estimated Repair Cost"
          name="estimateRepairCost"
          value={data.estimateRepairCost}
          type="number"
        />
        <InputContainer
          register={register}
          label="Down Payment Percentage of Purchase Price"
          name="downPaymentPercentage"
          value={data.downPaymentPercentage}
          type="number"
        />
        <InputContainer
          register={register}
          label="Loan Interest Rate"
          name="loanInterestRate"
          value={data.loanInterestRate}
          type="number"
        />
        <InputContainer
          register={register}
          label="Amortized Over How Many Years"
          name="loanPeriod"
          value={data.loanPeriod}
          type="number"
        />
      </Row>
    </div>
  );
};

export default PurchaseInfo;
