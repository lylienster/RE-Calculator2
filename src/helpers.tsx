import { FormData } from "./App";
import { useState } from "react";

export const toCurrency = (number: number): string => {
  const formattedValue = number.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  return formattedValue;
};

export const calculateTotalProjectCost = ({
  purchasePrice,
  estimatedRepairs,
  purchaseClosingCosts,
  preRentHoldingCosts,
}: FormData): number => {
  const totalProjectCost =
    (purchasePrice || 0) +
    (estimatedRepairs || 0) +
    (purchaseClosingCosts || 0) +
    (preRentHoldingCosts || 0);
  return totalProjectCost;
};

export const calculateLoan = ({
  downPaymentPercentage = 0,
  purchasePrice = 0,
}: FormData): number => {
  const loan = (purchasePrice * (100 - downPaymentPercentage)) / 100;

  return loan;
};

export const calculateOutOfPocket = (form: FormData): number => {
  const totalProjectCost = calculateTotalProjectCost(form);
  const loan = calculateLoan(form);
  const outOfPocket = totalProjectCost - loan;

  return outOfPocket;
};

export const calculateValueByPercentage = (totalValue = 0, percentage = 0) => {
  const percentageValue = (percentage / 100) * totalValue;

  return percentageValue;
};

export const calculateTotalExpenses = (form: FormData) => {
  const {
    rent,
    vacancyRate,
    repairsRate,
    capitalExpendituresRate,
    insuranceRate,
    propertyManagementRate,
    purchasePrice,
    taxRate,
    floodInsuranceMonthlyCost,
    electricityMonthlyCost,
    waterMonthlyCost,
    sewerMonthlyCost,
    gasMonthlyCost,
    garbageMonthlyCost,
    hoaMonthlyCost,
  } = form;
  const mortgage = calculateMonthlyMortgagePayment(form);
  const vacancyCost = calculateValueByPercentage(rent, vacancyRate);
  const repairsCost = calculateValueByPercentage(rent, repairsRate);
  const capitalExpendituresCost = calculateValueByPercentage(
    rent,
    capitalExpendituresRate
  );
  const insuranceCost = calculateValueByPercentage(
    purchasePrice / 12,
    insuranceRate
  );
  const taxCost = calculateValueByPercentage(purchasePrice / 12, taxRate);
  const propertyManagementMonthlyCost = calculateValueByPercentage(
    rent,
    propertyManagementRate
  );

  const totalExpenses =
    mortgage +
    vacancyCost +
    repairsCost +
    capitalExpendituresCost +
    insuranceCost +
    taxCost +
    (floodInsuranceMonthlyCost || 0) +
    (electricityMonthlyCost || 0) +
    (waterMonthlyCost || 0) +
    (sewerMonthlyCost || 0) +
    (gasMonthlyCost || 0) +
    (garbageMonthlyCost || 0) +
    (hoaMonthlyCost || 0) +
    propertyManagementMonthlyCost;

  return totalExpenses;
};

export const calculateMonthlyCashFlow = (form: FormData) => {
  const cashflow = form.rent - calculateTotalExpenses(form);

  return cashflow;
};

export const calculateROIWithoutMortgage = (form: FormData) => {
  const totalExpensesWithoutMortgage =
    calculateTotalExpenses(form) - calculateMonthlyMortgagePayment(form);

  const ROIWithoutMortgage =
    (((form.rent - totalExpensesWithoutMortgage) * 12) /
      calculateOutOfPocket(form)) *
    100;

  return ROIWithoutMortgage;
};

export const calculateROI = (form: FormData) => {
  const cashflow = calculateMonthlyCashFlow(form);
  const ROI = ((cashflow * 12) / calculateOutOfPocket(form)) * 100;

  return ROI;
};

export const calculateProjectionSalePrice = ({
  afterRepairValue,
  appreciation,
  projectionYear,
}: FormData) => {
  // calculate compound interest
  // A = P(1 + r/n)^(nt) where P = principal, r = rate, n = compound (1 if annualy) and t = time (in years)
  const salePrice =
    afterRepairValue * Math.pow(1 + appreciation / 100, projectionYear);

  return salePrice;
};

export const calculateProjectionSaleExpenses = ({
  afterRepairValue,
}: FormData) => {
  // 6% agent cost, $4000 closing costs, $5000 new paint cost
  const saleExpenses = afterRepairValue * 0.06 + 4000 + 5000;

  return saleExpenses;
};

export const calculateProjectionLoanPayoff = (form: FormData) => {
  const { projectionYear, loanPeriod, interestRate } = form;
  const loan = calculateLoan(form);

  // plus 1 to count the last month
  var loanPayoff = getRemainingBalance(
    loan,
    projectionYear * 12 + 1,
    loanPeriod * 12,
    interestRate / 100
  );

  return loanPayoff;
};

const getRemainingBalance = (
  originalBalance: number,
  numOfPayments: number,
  totalNumberOfPayments: number,
  rate: number
) => {
  // https://www.mtgprofessor.com/formulas.htm
  const monthlyRate = rate / 12; // monthly

  const remainingBalance =
    (originalBalance *
      (Math.pow(1 + monthlyRate, totalNumberOfPayments) -
        Math.pow(1 + monthlyRate, numOfPayments))) /
    (Math.pow(1 + monthlyRate, totalNumberOfPayments) - 1);

  return remainingBalance;
};

export const calculateProjectionTotalInvestedCapital = (form: FormData) => {
  const totalInvestedCapital = calculateOutOfPocket(form);

  return totalInvestedCapital;
};

export const calculateProjectionSaleProfit = (form: FormData) => {
  const salePrice = calculateProjectionSalePrice(form);
  const saleExpenses = calculateProjectionSaleExpenses(form);
  const loanPayoff = calculateProjectionLoanPayoff(form);
  const totalInvestedCapital = calculateOutOfPocket(form);

  const saleProfit =
    salePrice - saleExpenses - loanPayoff - totalInvestedCapital;

  return saleProfit;
};

export const calculateProjectionTotalCashflow = (form: FormData) => {
  const projectionYear = form.projectionYear;
  const cashflow = calculateMonthlyCashFlow(form);
  const projectionTotalCashflow = cashflow * 12 * projectionYear;

  return projectionTotalCashflow;
};

export const calculateProjectionTotalProfit = (form: FormData) => {
  const projectionTotalCashflow = calculateProjectionTotalCashflow(form);
  const saleProfit = calculateProjectionSaleProfit(form);

  const totalProfit = saleProfit + projectionTotalCashflow;

  return totalProfit;
};
export const calculateProjectionROI = (form: FormData) => {
  const totalProfit = calculateProjectionTotalProfit(form);
  const totalInvestedCapital = calculateOutOfPocket(form);
  const year = form.projectionYear;

  const projectedROI = (totalProfit / totalInvestedCapital / year) * 100;
  return projectedROI;
};

export const getNumbersOnly = (text: string) => {
  return text.replace(/\D/g, "");
};

export const calculateMonthlyMortgagePayment = (form: FormData) => {
  const { loanPeriod, interestRate } = form;
  const loan = calculateLoan(form);

  // allow calculation for 0% interest rate
  if (!interestRate) {
    return loan / (loanPeriod * 12);
  }

  // https://www.thebalance.com/calculate-mortgage-315668
  // P = A/D where D = {[(1 + i) ^n] - 1} / [i(1 + i)^n]
  const n = loanPeriod * 12; // 12 months
  const i = interestRate / 100 / 12; // 12 months
  const D = (Math.pow(1 + i, n) - 1) / (i * Math.pow(1 + i, n));
  const monthlyMortgagePayment = loan / D;

  return monthlyMortgagePayment;
};

export const useLocalStorage = (key: string, initialValue: any) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
