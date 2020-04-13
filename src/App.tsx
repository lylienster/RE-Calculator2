import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import TotalProjectCost from "./TotalProjectCost";
import { useLocalStorage } from "./helpers";
import PropertyInfo from "./PropertyInfo";
import DefaultValues from "./DefaultValues";
import TotalCostOutOfPocket from "./TotalCostOutOfPocket";
import MonthlyMortgagePayment from "./MonthlyMortgagePayment";
import TotalIncome from "./TotalIncome";
import TotalExpenses from "./TotalExpenses";
import Evaluation from "./Evaluation";
import Projection from "./Projection";

export interface FormData {
  address: string;
  purchasePrice: number;
  purchaseClosingCosts: number;
  loanPeriod: number;
  interestRate: number;
  downPaymentPercentage: number;
  vacancyRate: number;
  repairsRate: number;
  capitalExpendituresRate: number;
  insuranceRate: number;
  taxRate: number;
  propertyManagementRate: number;
  projectionYear: number;
  appreciation: number;
  preRentHoldingCosts: number;
  estimatedRepairs: number;
  askingPrice: number;
  rent: number;
  floodInsuranceMonthlyCost: number;
  electricityMonthlyCost: number;
  waterMonthlyCost: number;
  sewerMonthlyCost: number;
  gasMonthlyCost: number;
  garbageMonthlyCost: number;
  hoaMonthlyCost: number;
  afterRepairValue: number;
}

const App = () => {
  const initialDefaults = {
    address: "",
    purchaseClosingCosts: 5000,
    loanPeriod: 30,
    interestRate: 5,
    downPaymentPercentage: 20,
    vacancyRate: 5,
    repairsRate: 5,
    capitalExpendituresRate: 12.5,
    insuranceRate: 0.5,
    taxRate: 1.06,
    propertyManagementRate: 11,
    projectionYear: 5,
    appreciation: 4.4,
  };

  const [defaults, setDefaults] = useLocalStorage("defaults", initialDefaults);
  const [savedForm, setSavedForm] = useLocalStorage("form", initialDefaults);

  const [form, setForm] = React.useState(savedForm || initialDefaults);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.replace(/,/g, "");
    if (!isNaN(Number(trimmedValue))) {
      const newForm = {
        ...form,
        [event.target.name]: Number(trimmedValue),
      };
      setForm(newForm);

      setSavedForm(newForm);
    }
  };

  const handleTextOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newForm);

    setSavedForm(newForm);
  };

  const handleDefaultsSubmission = (newDefaults: FormData) => {
    const newDefaultsString = newDefaults;

    setDefaults(newDefaultsString);
    const newForm = { ...form, ...newDefaults };
    setForm(newForm);
    setSavedForm(newForm);
  };

  const setFormValueByName = (name: string, value: number) => {
    const newForm = {
      ...form,
      [name]: Number(value),
    };
    setForm(newForm);

    setSavedForm(newForm);
  };

  const handleResetNumbersButtonClick = () => {
    setSavedForm(initialDefaults);
    setForm(initialDefaults);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">RE Calculator</h1>

        <hr className="solid" />
        <DefaultValues
          defaults={defaults}
          handleOnSubmit={handleDefaultsSubmission}
        />
        <div>
          <Button
            variant="primary"
            onClick={handleResetNumbersButtonClick}
            className="float-right clear-fix"
            style={{ marginRight: "10px" }}
          >
            Reset Numbers
          </Button>
          <br />
        </div>
        <form>
          <PropertyInfo
            form={form}
            handleOnChange={handleOnChange}
            handleTextOnChange={handleTextOnChange}
          />
          <TotalProjectCost form={form} handleOnChange={handleOnChange} />
          <TotalCostOutOfPocket
            form={form}
            handleOnChange={handleOnChange}
            setFormValueByName={setFormValueByName}
          />
          <MonthlyMortgagePayment form={form} handleOnChange={handleOnChange} />
          <TotalIncome form={form} handleOnChange={handleOnChange} />
          <TotalExpenses
            form={form}
            handleOnChange={handleOnChange}
            setFormValueByName={setFormValueByName}
          />
          <Evaluation form={form} />
          <Projection form={form} handleOnChange={handleOnChange} />
        </form>
      </div>
    </div>
  );
};

export default App;
