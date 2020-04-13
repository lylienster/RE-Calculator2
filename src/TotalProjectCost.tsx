import React from "react";
import SingleInput from "./SingleInput";
import { Form } from "./App";
import { calculateTotalProjectCost, toCurrency } from "./helpers";

interface Props {
  form: Form;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TotalProjectCost = ({ form, handleOnChange }: Props) => {
  const {
    purchasePrice,
    purchaseClosingCosts,
    preRentHoldingCosts,
    estimatedRepairs,
  } = form;
  return (
    <div>
      <h2>
        1) Total Project Cost: ${toCurrency(calculateTotalProjectCost(form))}
      </h2>
      <SingleInput
        label="Purchase Price"
        inputValue={purchasePrice}
        inputName="purchasePrice"
        handleOnChange={handleOnChange}
        prefix={"$"}
        required={true}
      />
      <SingleInput
        label="Purchase Closing Costs"
        inputValue={purchaseClosingCosts}
        inputName="purchaseClosingCosts"
        handleOnChange={handleOnChange}
        prefix={"$"}
      />

      <SingleInput
        label="Pre-Rent Holding Costs"
        inputValue={preRentHoldingCosts}
        inputName="preRentHoldingCosts"
        handleOnChange={handleOnChange}
        prefix={"$"}
      />

      <SingleInput
        label="Estimated Repairs"
        inputValue={estimatedRepairs}
        inputName="estimatedRepairs"
        handleOnChange={handleOnChange}
        prefix={"$"}
      />

      <SingleInput
        label="Total Project Cost"
        inputValue={calculateTotalProjectCost(form)}
        prefix={"$"}
        disabled={true}
      />
    </div>
  );
};

export default TotalProjectCost;
