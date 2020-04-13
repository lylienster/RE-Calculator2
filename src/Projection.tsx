import React from "react";
import SingleInput from "./SingleInput";
import { FormData } from "./App";
import {
  calculateProjectionSalePrice,
  calculateProjectionSaleExpenses,
  calculateProjectionLoanPayoff,
  calculateProjectionTotalInvestedCapital,
  calculateProjectionSaleProfit,
  calculateProjectionTotalCashflow,
  calculateProjectionTotalProfit,
  calculateProjectionROI,
} from "./helpers";

interface Props {
  form: FormData;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Projection = ({ form, handleOnChange }: Props) => {
  const { projectionYear, afterRepairValue, appreciation } = form;

  return (
    <div>
      <h2>7) Projection</h2>

      <SingleInput
        label="Year"
        inputValue={projectionYear}
        inputName="projectionYear"
        handleOnChange={handleOnChange}
        suffix="yr."
      />

      <SingleInput
        label="After Repair Value (ARV)"
        inputValue={afterRepairValue}
        inputName="afterRepairValue"
        handleOnChange={handleOnChange}
        prefix="$"
        required={true}
      />

      <SingleInput
        label="Appreciation"
        inputValue={appreciation}
        inputName="appreciation"
        handleOnChange={handleOnChange}
        suffix="%"
        roundValue={false}
        additionalInfoText="(National Average: 4.4%)"
        isNumberInput={true}
      />

      <SingleInput
        label="Sale Price"
        inputValue={calculateProjectionSalePrice(form)}
        prefix="$"
        disabled={true}
      />

      <SingleInput
        label="Sale Expenses"
        inputValue={calculateProjectionSaleExpenses(form)}
        prefix="$"
        disabled={true}
      />

      <SingleInput
        label="Loan Payoff"
        inputValue={calculateProjectionLoanPayoff(form)}
        prefix="$"
        disabled={true}
      />

      <SingleInput
        label="Total Invested Capital"
        inputValue={calculateProjectionTotalInvestedCapital(form)}
        prefix="$"
        disabled={true}
      />

      <SingleInput
        label="Profit"
        inputValue={calculateProjectionSaleProfit(form)}
        prefix="$"
        disabled={true}
      />

      <SingleInput
        label="Total cashflow"
        inputValue={calculateProjectionTotalCashflow(form)}
        prefix="$"
        disabled={true}
      />

      <SingleInput
        label="Total Profit (with cashflow)"
        inputValue={calculateProjectionTotalProfit(form)}
        prefix="$"
        disabled={true}
      />

      <SingleInput
        label="ROI"
        inputValue={calculateProjectionROI(form)}
        suffix="%"
        disabled={true}
      />
    </div>
  );
};

export default Projection;
