import React, { useState } from "react";
import { FormControl, InputGroup, Container } from "react-bootstrap";
import PropertyInfo from "./Partials/PropertyInfo";
import PurchaseInfo from "./Partials/PurchaseInfo";
import RentalInfo from "./Partials/RentalInfo";
import Results from "./Partials/Results";
import { useLocalStorage } from "../helpers";

export interface Data {
  //propertyInfo
  address: string;
  city: string;
  state: string;
  zip: string;
  annualPropertyTaxes: number;
  mlsNumber: string;
  salesDescription: string;
  //features
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  propertyType: string;
  totalSqFootage: number;
  lotSize: number;
  yearBuilt: number;

  // purchaseInfo
  purchasePrice: number;
  afterRepairPrice: number;
  purchaseClosingCost: number;
  estimateRepairCost: number;
  preRentHoldingCost: number;

  //loanDetails
  downPaymentPercentage: number;
  loanInterestRate: number;
  loanPeriod: number;

  // rentalInfo:
  //income
  monthlyRent: number;
  otherMonthlyIncome: number;

  //fixedExpenses
  monthlyElectricyCost: number;
  monthlyWaterAndSewerCost: number;
  monthlyPmiCost: number;
  monthlyGarbageCost: number;
  monthlyHoaCost: number;
  monthlyInsurance: number;
  otherMontnlyExpenses: number;

  //variableExpenses
  vacancyRate: number;
  repairsAndMaintenanceRate: number;
  capitalExpendituresRate: number;
  propertyManagementRate: number;
  insuranceRate: number;
  taxRate: number;

  //futureAssumptions
  annualIncomeGrowth: number;
  annualPropertyValueGrowth: number;
  annualExpensesGrowth: number;
  salesExpenses: number;

  projectionYear: number;
}

const BrrrrCalculator = () => {
  const [savedData, setSavedData] = useLocalStorage("userInput", {} as Data);
  const [data, setData] = useState(savedData);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newForm = {
      ...data,
      [event.target.name]:
        isNaN(Number(value)) || value === "" ? value : Number(value),
    };
    setData(newForm);
    setSavedData(newForm);
  };

  return (
    <Container>
      <h1>{`Buy & Hold Analysis`}</h1>
      <PropertyInfo data={data} handleOnChange={handleOnChange} />
      <PurchaseInfo data={data} handleOnChange={handleOnChange} />
      <RentalInfo data={data} handleOnChange={handleOnChange} />
      <Results data={data} handleOnChange={handleOnChange} />

      <span>{JSON.stringify(data)}</span>
    </Container>
  );
};

export default BrrrrCalculator;
