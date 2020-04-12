import React, { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import TotalProjectCost from "./TotalProjectCost";

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
}

const App = () => {
  const [form, setForm] = useState({} as Form);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.replace(/,/g, "");
    if (!isNaN(Number(trimmedValue))) {
      const newForm = {
        ...form,
        [event.target.name]: Number(trimmedValue),
      };
      setForm(newForm);

      // setSavedForm(newForm);
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">RE Calculator</h1>

        <hr className="solid" />

        <Button
          variant="primary"
          onClick={() => {}}
          className="float-right"
          style={{ marginRight: "10px" }}
        >
          Reset Numbers
        </Button>
        <TotalProjectCost form={form} handleOnChange={handleOnChange} />
      </div>
    </div>
  );
};

export default App;
