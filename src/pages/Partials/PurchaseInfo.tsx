import React from "react";
import { Data } from "../BrrrrCalculator";
import NumberInput from "../Components/NumberInput";

interface Props {
  data: Data;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PurchaseInfo = ({ data, handleOnChange }: Props) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Purchase Info</h2>
      <label>Purchase Price</label>
      <NumberInput
        value={data.purchasePrice}
        onChange={handleOnChange}
        name="purchasePrice"
        required={true}
      />
      <label>After Repair Value</label>
      <NumberInput
        value={data.afterRepairPrice}
        onChange={handleOnChange}
        name="afterRepairPrice"
      />
      <label>Purchase Closing Cost</label>
      <NumberInput
        value={data.purchaseClosingCost}
        onChange={handleOnChange}
        name="purchaseClosingCost"
      />
      <label>Estimated Repair Cost</label>
      <NumberInput
        value={data.estimateRepairCost}
        onChange={handleOnChange}
        name="estimateRepairCost"
      />
      <label>Down Payment of Purchase Price</label>
      <NumberInput
        value={data.downPaymentPercentage}
        onChange={handleOnChange}
        name="downPaymentPercentage"
      />
      <label>Loan Interest Rate</label>
      <NumberInput
        value={data.loanInterestRate}
        onChange={handleOnChange}
        name="loanInterestRate"
      />
      <label>Amortized Over How Many Years</label>
      <NumberInput
        value={data.loanPeriod}
        onChange={handleOnChange}
        name="loanPeriod"
      />
    </div>
  );
};

export default PurchaseInfo;
