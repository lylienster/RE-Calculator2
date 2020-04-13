import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import TotalProjectCost from "./TotalProjectCost";
import { useLocalStorage } from "./helpers";
import PropertyInfo from "./PropertyInfo";
import DefaultValues from "./DefaultValues";

export interface Form {
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

  const handleDefaultsSubmission = (newDefaults: Form) => {
    const newDefaultsString = newDefaults;

    setDefaults(newDefaultsString);
    const newForm = { ...form, ...newDefaults };
    setForm(newForm);
    setSavedForm(newForm);
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
            onClick={() => {}}
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
        </form>
      </div>
    </div>
  );
};

export default App;
