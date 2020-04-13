import React from "react";
import SingleInput from "./SingleInput";
import { FormData } from "./App";
import { toCurrency } from "./helpers";

interface Props {
  form: FormData;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TotalIncome = ({ form, handleOnChange }: Props) => {
  const { rent } = form;
  return (
    <div>
      <h2>4) Total Income: $ {toCurrency(rent || 0)}/mo.</h2>

      <SingleInput
        label="Rent"
        inputValue={rent}
        inputName="rent"
        handleOnChange={handleOnChange}
        prefix={"$"}
        suffix="/mo."
        required={true}
      />
    </div>
  );
};

export default TotalIncome;
