import { FormData } from "./Calculator";
import { useState } from "react";
import { Data } from "./pages/BrrrrCalculator";

export const toCurrency = (number: number): string => {
  if (!number) {
    return "";
  }
  const formattedValue = number.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  return formattedValue;
};

export const calculateTotalProjectCost = ({
  purchasePrice = 0,
  estimateRepairCost = 0,
  purchaseClosingCost = 0,
  preRentHoldingCost = 0,
}: FormData | Data): number => {
  const totalProjectCost =
    (purchasePrice || 0) +
    (estimateRepairCost || 0) +
    (purchaseClosingCost || 0) +
    (preRentHoldingCost || 0);
  return totalProjectCost;
};

export const calculateLoan = ({
  downPaymentPercentage = 0,
  purchasePrice = 0,
}: FormData | Data): number => {
  const loan = (purchasePrice * (100 - downPaymentPercentage)) / 100;

  return loan;
};

export const calculateDownPayment = ({
  downPaymentPercentage = 0,
  purchasePrice = 0,
}: FormData | Data) => {
  const downPayment = (purchasePrice * downPaymentPercentage) / 100;

  return downPayment;
};

export const calculateOutOfPocket = (form: FormData | Data): number => {
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
  const { projectionYear, loanPeriod, loanInterestRate: interestRate } = form;
  const loan = calculateLoan(form);

  var loanPayoff = getRemainingBalance(
    loan,
    projectionYear * 12,
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

export const calculateMonthlyMortgagePayment = (form: FormData | Data) => {
  const { loanPeriod = 1, loanInterestRate = 0 } = form;
  const loan = calculateLoan(form);

  // allow calculation for 0% interest rate
  if (!loanInterestRate) {
    return loan / (loanPeriod * 12);
  }

  // https://www.thebalance.com/calculate-mortgage-315668
  // P = A/D where D = {[(1 + i) ^n] - 1} / [i(1 + i)^n]
  const n = loanPeriod * 12; // 12 months
  const i = loanInterestRate / 100 / 12; // 12 months
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

export const calculateMonthlyTotalIncome = ({
  monthlyRent = 0,
  otherMonthlyIncome = 0,
}: Data) => {
  return monthlyRent + otherMonthlyIncome;
};

export const calculateTotalMonthyOperatingExpenses = (data: Data): number => {
  const {
    // floodInsuranceMonthlyCost,
    monthlyElectricyCost = 0,
    monthlyWaterAndSewerCost = 0,
    // gasMonthlyCost,
    monthlyGarbageCost = 0,
    monthlyHoaCost = 0,
  } = data;

  const totalExpenses =
    calculateMonthlyVacancyCost(data) +
      calculateMonthlyRepairsCost(data) +
      calculateMonthlyCapitalExpendituresCost(data) +
      calculateMonthlyInsuranceCost(data) +
      calculateMonthlyTaxCost(data) +
      // floodInsuranceMonthlyCost +
      monthlyElectricyCost ||
    0 + monthlyWaterAndSewerCost ||
    0 + monthlyGarbageCost ||
    0 + monthlyHoaCost ||
    0 + calculateMonthlyManagementCost(data);

  // console.log("Starting:");
  // console.log(vacancyCost);
  // console.log(repairsCost);
  // console.log(capitalExpendituresCost);
  // console.log(insuranceCost);
  // console.log(taxCost);
  // console.log(monthlyElectricyCost);
  // console.log(monthlyWaterAndSewerCost);
  // console.log(monthlyGarbageCost);
  // console.log(monthlyHoaCost);
  // console.log(monthlyPropertyManagementCost);
  // console.log(totalExpenses);
  // console.log("Ending:");

  return totalExpenses;
};

export const calculateMonthlyVacancyCost = (data: Data) => {
  const totalMonthlyIncome = calculateMonthlyTotalIncome(data);

  return calculateValueByPercentage(totalMonthlyIncome, data.vacancyRate);
};

export const calculateMonthlyManagementCost = (data: Data) => {
  const totalMonthlyIncome = calculateMonthlyTotalIncome(data);

  return calculateValueByPercentage(
    totalMonthlyIncome,
    data.propertyManagementRate
  );
};
export const calculateMonthlyCapitalExpendituresCost = (data: Data) => {
  const totalMonthlyIncome = calculateMonthlyTotalIncome(data);

  return calculateValueByPercentage(
    totalMonthlyIncome,
    data.capitalExpendituresRate
  );
};
export const calculateMonthlyRepairsCost = (data: Data) => {
  const totalMonthlyIncome = calculateMonthlyTotalIncome(data);

  return calculateValueByPercentage(
    totalMonthlyIncome,
    data.repairsAndMaintenanceRate
  );
};
export const calculateMonthlyInsuranceCost = (data: Data) => {
  const totalMonthlyIncome = calculateMonthlyTotalIncome(data);

  return calculateValueByPercentage(totalMonthlyIncome, data.insuranceRate);
};
export const calculateMonthlyTaxCost = (data: Data) => {
  return data.annualPropertyTaxes / 12;
};
// Unused
export const calculateMonthlyTotalExpenses = (data: Data): number => {
  const mortgage = calculateMonthlyMortgagePayment(data);
  const operatingExpenses = calculateTotalMonthyOperatingExpenses(data);

  const totalExpenses = Number(mortgage) + Number(operatingExpenses);

  return totalExpenses;
};

export const caculateProjectedNumber = (
  initialNumber = 0,
  growthRate = 0,
  projectedYear = 0
) => {
  const finalAmount =
    initialNumber * Math.pow(1 + growthRate / 100, projectedYear);

  return finalAmount;
};

export const calculateProjectedTotalAnnualIncome = (
  data: Data,
  projectionYear = 0
): number => {
  const totalIncome = calculateMonthlyTotalIncome(data) * 12;

  return caculateProjectedNumber(
    totalIncome,
    data.annualIncomeGrowth,
    projectionYear
  );
};

export const calculateProjectedTotalAnnualExpenses = (
  data: Data,
  projectionYear = 0
): number => {
  const annualMortgage = calculateMonthlyMortgagePayment(data) * 12;
  const projectedOperatingExpenses = calculateProjectedAnnualOperatingExpenses(
    data,
    projectionYear
  );
  // console.log(annualMortgage);
  // console.log(projectedOperatingExpenses);
  return annualMortgage + projectedOperatingExpenses;
};

export const calculateProjectedCashOnCashROI = (
  data: Data,
  projectionYear = 0
): number => {
  const annualCashflow = calculateProjectedTotalAnnualCashflow(
    data,
    projectionYear
  );
  const outOfPocket = calculateOutOfPocket(data);

  // console.log(annualCashflow);
  // console.log(outOfPocket);
  const ROI = (annualCashflow / outOfPocket) * 100;

  return ROI;
};

export const calculateProjectedTotalAnnualCashflow = (
  data: Data,
  projectionYear = 0
) => {
  return (
    calculateProjectedTotalAnnualIncome(data, projectionYear) -
    calculateProjectedTotalAnnualExpenses(data, projectionYear)
  );
};

export const calculateProjectedTotalCashflow = (
  data: Data,
  projectionYear = 0
) => {
  let totalCashflow = 0;
  for (let i = 0; i < projectionYear; i++) {
    totalCashflow +=
      calculateProjectedTotalAnnualIncome(data, i) -
      calculateProjectedTotalAnnualExpenses(data, i);
  }
  return totalCashflow;
};

export const calculateProjectedAnnualOperatingExpenses = (
  data: Data,
  projectionYear = 0
): number => {
  const annualOperatingExpenses =
    calculateTotalMonthyOperatingExpenses(data) * 12;
  // console.log(calculateTotalMonthyOperatingExpenses(data));

  return caculateProjectedNumber(
    annualOperatingExpenses,
    data.annualExpensesGrowth,
    projectionYear
  );
};

export const calculateProjectedLoanBalance = (
  data: Data,
  projectionYear = 0
) => {
  const { loanPeriod, loanInterestRate: interestRate } = data;
  const loan = calculateLoan(data);

  var loanBalance = getRemainingBalance(
    loan,
    projectionYear * 12,
    loanPeriod * 12,
    interestRate / 100
  );

  return loanBalance;
};

export const calculateProjectedPropertyValue = (
  data: Data,
  projectionYear = 0
) => {
  return caculateProjectedNumber(
    data.afterRepairPrice || data.purchasePrice,
    data.annualPropertyValueGrowth,
    projectionYear
  );
};

export const calculateProjectedEquity = (data: Data, projectionYear = 0) => {
  return (
    calculateProjectedPropertyValue(data, projectionYear) -
    calculateProjectedLoanBalance(data, projectionYear)
  );
};

export const calculateProjectedTotalProfitIfSold = (
  data: Data,
  projectionYear = 0
) => {
  // const projectedTotalCashflow = calculateProjectedTotalAnnualCashflow(form);
  const projectedPropertyValue = calculateProjectedPropertyValue(
    data,
    projectionYear
  );
  const saleCommission = calculateValueByPercentage(
    projectedPropertyValue,
    data.salesExpenses
  );
  const equity = calculateProjectedEquity(data, projectionYear);

  const outOfPocket = calculateOutOfPocket(data);
  const totalCashflow = calculateProjectedTotalCashflow(data, projectionYear);

  const totalProfit = equity - saleCommission - outOfPocket + totalCashflow;

  return totalProfit;
};

export const calculateProjectedAnnualizedTotalReturn = (
  data: Data,
  projectionYear = 0
) => {
  const projectedProfit = calculateProjectedTotalProfitIfSold(
    data,
    projectionYear
  );
  const outOfPocket = calculateOutOfPocket(data);

  const totalInvestmentReturn = projectedProfit / outOfPocket;

  const annualizedReturn =
    (Math.pow(1 + totalInvestmentReturn, 1 / projectionYear) - 1) * 100;

  // console.log(projectedProfit);
  // console.log(outOfPocket);
  // console.log(totalInvestmentReturn);
  // console.log(annualizedReturn);
  return annualizedReturn;
};
