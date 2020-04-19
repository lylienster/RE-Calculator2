import React from "react";
import SingleInput from "./SingleInput";
import { FormData } from "./Calculator";
import { calculateTotalProjectCost, toCurrency } from "./helpers";

interface Props {
  form: FormData;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TotalProjectCost = ({ form, handleOnChange }: Props) => {
  const {
    purchasePrice,
    purchaseClosingCost,
    preRentHoldingCost,
    estimateRepairCost,
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
        label="Purchase Closing Cost"
        inputValue={purchaseClosingCost}
        inputName="purchaseClosingCost"
        handleOnChange={handleOnChange}
        prefix={"$"}
      />

      <SingleInput
        label="Pre-Rent Holding Cost"
        inputValue={preRentHoldingCost}
        inputName="preRentHoldingCost"
        handleOnChange={handleOnChange}
        prefix={"$"}
      />

      <SingleInput
        label="Estimated Repairs"
        inputValue={estimateRepairCost}
        inputName="estimateRepairCost"
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
