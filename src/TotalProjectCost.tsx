import React from "react";
import "./App.css";
import SingleInput from "./SingleInput";
import { Form } from "./App";

interface Props {
  form: Form;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TotalProjectCost = ({
  form: { purchasePrice },
  handleOnChange,
}: Props) => {
  return (
    <div>
      <h2>1) Total Project Cost: $</h2>
      <SingleInput
        label="Purchase Price"
        inputValue={purchasePrice}
        inputName="purchasePrice"
        handleOnChange={handleOnChange}
        prefix={"$"}
        required={true}
      />
    </div>
  );
};

export default TotalProjectCost;
