import React from "react";
import { Data } from "../BuyAndHoldCalculator";
import InputContainer from "../Components/InputContainer";
import { Row } from "react-bootstrap";

interface Props {
  data: Data;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PurchaseInfo = ({ data, handleOnChange }: Props) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Purchase Info</h2>
      <Row>
        <InputContainer
          label="Purchase Price"
          value={data.purchasePrice}
          onChange={handleOnChange}
          name="purchasePrice"
          required={true}
        />
        <InputContainer
          label="After Repair Value"
          value={data.afterRepairPrice}
          onChange={handleOnChange}
          name="afterRepairPrice"
        />
        <InputContainer
          label="Purchase Closing Cost"
          value={data.purchaseClosingCost}
          onChange={handleOnChange}
          name="purchaseClosingCost"
        />
        <InputContainer
          label="Estimated Repair Cost"
          value={data.estimateRepairCost}
          onChange={handleOnChange}
          name="estimateRepairCost"
        />
        <InputContainer
          label="Down Payment Percentage of Purchase Price"
          value={data.downPaymentPercentage}
          onChange={handleOnChange}
          name="downPaymentPercentage"
          required={true}
        />
        <InputContainer
          label="Loan Interest Rate"
          value={data.loanInterestRate}
          onChange={handleOnChange}
          name="loanInterestRate"
          required={true}
        />
        <InputContainer
          label="Amortized Over How Many Years"
          value={data.loanPeriod}
          onChange={handleOnChange}
          name="loanPeriod"
          required={true}
        />
      </Row>
    </div>
  );
};

export default PurchaseInfo;
