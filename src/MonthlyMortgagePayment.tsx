import React from "react";
import SingleInput from "./SingleInput";
import { FormData } from "./Calculator";
import { calculateMonthlyMortgagePayment, toCurrency } from "./helpers";

interface Props {
  form: FormData;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MonthlyMortgagePayment = ({ form, handleOnChange }: Props) => {
  const { loanPeriod, loanInterestRate } = form;

  const monthlyMortgagePayment = calculateMonthlyMortgagePayment(form);

  return (
    <div>
      <h2>
        3) Monthly Mortgage Payment: ${toCurrency(monthlyMortgagePayment)}
        /mo.
      </h2>
      <SingleInput
        label="Loan Period"
        inputValue={loanPeriod}
        inputName="loanPeriod"
        handleOnChange={handleOnChange}
        suffix="years"
      />

      <SingleInput
        label="Interest Rate"
        inputValue={loanInterestRate}
        inputName="loanInterestRate"
        handleOnChange={handleOnChange}
        suffix="%"
        roundValue={false}
        isNumberInput
      />
    </div>
  );
};

export default MonthlyMortgagePayment;
