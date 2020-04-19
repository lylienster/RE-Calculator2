import React from "react";
import SingleInput from "./SingleInput";
import { FormData } from "./Calculator";
import { calculateLoan, calculateOutOfPocket, toCurrency } from "./helpers";
import MonthYearPercentInput from "./MonthYearPercentInput";

interface Props {
  form: FormData;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFormValueByName: (inputName: string, value: number) => void;
}

const TotalCostOutOfPocket = ({
  form,
  handleOnChange,
  setFormValueByName,
}: Props) => {
  const { downPaymentPercentage, purchasePrice } = form;

  const loan = calculateLoan(form);
  const outOfPocket = calculateOutOfPocket(form);

  return (
    <div>
      <h2>
        2) Total Cost Out of Pocket: ${toCurrency(calculateOutOfPocket(form))}
      </h2>
      <MonthYearPercentInput
        label="Down Payment"
        inputName="downPaymentPercentage"
        percentageValue={downPaymentPercentage}
        wholeMonthlyValue={purchasePrice}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
        disableYear={true}
      />

      <SingleInput
        label="Loan"
        prefix={"$"}
        disabled={true}
        inputValue={loan}
      />

      <SingleInput
        label="Out of Pocket"
        inputValue={outOfPocket}
        prefix={"$"}
        disabled={true}
      />
    </div>
  );
};

export default TotalCostOutOfPocket;
