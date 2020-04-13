import React from "react";
import SingleInput from "./SingleInput";
import MonthYearPercentInput from "./MonthYearPercentInput";
import {
  calculateMonthlyMortgagePayment,
  toCurrency,
  calculateTotalExpenses,
} from "./helpers";
import { FormData } from "./App";
import MonthYearInput from "./MonthYearInput";

interface Props {
  form: FormData;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFormValueByName: (inputName: string, value: number) => void;
}

const TotalExpenses = ({ form, handleOnChange, setFormValueByName }: Props) => {
  const mortgage = calculateMonthlyMortgagePayment(form);

  return (
    <div>
      <h2>
        5) Total Expenses: $ {toCurrency(calculateTotalExpenses(form))}
        /mo.
      </h2>
      <SingleInput
        label="Mortgage"
        inputValue={mortgage}
        disabled={true}
        prefix="$"
        suffix="/mo."
      />

      <MonthYearPercentInput
        label="Vacancy"
        inputName="vacancyRate"
        percentageValue={form.vacancyRate}
        wholeMonthlyValue={form.rent}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
        monthAppendValue="/mo."
      />
      <MonthYearPercentInput
        label="Repairs"
        inputName="repairsRate"
        percentageValue={form.repairsRate}
        wholeMonthlyValue={form.rent}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
        monthAppendValue="/mo."
      />
      <MonthYearPercentInput
        label="Capital Expenditures"
        inputName="capitalExpendituresRate"
        percentageValue={form.capitalExpendituresRate}
        wholeMonthlyValue={form.rent}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
        monthAppendValue="/mo."
      />
      <MonthYearPercentInput
        label="Insurance"
        inputName="insuranceRate"
        percentageValue={form.insuranceRate}
        wholeMonthlyValue={form.purchasePrice / 12}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
        monthAppendValue="/mo."
      />
      <MonthYearPercentInput
        label="Taxes"
        inputName="taxRate"
        percentageValue={form.taxRate}
        wholeMonthlyValue={form.purchasePrice / 12}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
        monthAppendValue="/mo."
      />
      <MonthYearInput
        label="Flood Insurance"
        inputName="floodInsuranceMonthlyCost"
        inputValue={form.floodInsuranceMonthlyCost}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
      />
      <MonthYearInput
        label="Electricity"
        inputName="electricityMonthlyCost"
        inputValue={form.electricityMonthlyCost}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
      />
      <MonthYearInput
        label="Water"
        inputName="waterMonthlyCost"
        inputValue={form.waterMonthlyCost}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
      />
      <MonthYearInput
        label="Sewer"
        inputName="sewerMonthlyCost"
        inputValue={form.sewerMonthlyCost}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
      />
      <MonthYearInput
        label="Gas"
        inputName="gasMonthlyCost"
        inputValue={form.gasMonthlyCost}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
      />
      <MonthYearInput
        label="Garbage"
        inputName="garbageMonthlyCost"
        inputValue={form.garbageMonthlyCost}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
      />
      <MonthYearInput
        label="HOA"
        inputName="hoaMonthlyCost"
        inputValue={form.hoaMonthlyCost}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
      />
      <MonthYearPercentInput
        label="Property Management"
        inputName="propertyManagementRate"
        percentageValue={form.propertyManagementRate}
        wholeMonthlyValue={form.rent}
        handleOnChange={handleOnChange}
        setFormValueByName={setFormValueByName}
        monthAppendValue="/mo."
      />

      <SingleInput
        label="Total Expenses"
        inputValue={calculateTotalExpenses(form)}
        disabled={true}
        prefix="$"
        suffix="/mo."
      />
    </div>
  );
};

export default TotalExpenses;
