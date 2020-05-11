import { Data } from "../BuyAndHoldCalculator";
import {
  toCurrency,
  calculateProjectedTotalAnnualIncome,
  calculateProjectedTotalAnnualExpenses,
  calculateProjectedAnnualOperatingExpenses,
  calculateMonthlyMortgagePayment,
  calculateProjectedTotalAnnualCashflow,
  calculateProjectedCashOnCashROI,
  calculateProjectedPropertyValue,
  calculateProjectedEquity,
  calculateProjectedLoanBalance,
  calculateProjectedTotalProfitIfSold,
  calculateProjectedAnnualizedTotalReturn,
} from "../../helpers";
import { ProjectedData } from "./AnalysisOverTime";

export const calculateAnalysisOverTime = (data: Data) => {
  const projectionYears = [1, 2, 5, 10, 15, 20, 30];
  // var t0 = performance.now();

  // console.log("Starting...");
  const projectedNumbersByYear = projectionYears.map((year) => {
    // console.log("Starting 1...");
    const projectedYear = year - 1;

    // var t0 = performance.now();

    const totalIncome = `$${toCurrency(
      calculateProjectedTotalAnnualIncome(data, projectedYear)
    )}`;

    // var t1 = performance.now();
    // console.log("Calculate totalIncome took " + (t1 - t0) + " milliseconds.");

    const totalExpenses = `$${toCurrency(
      calculateProjectedTotalAnnualExpenses(data, projectedYear)
    )}`;

    // var t2 = performance.now();

    // console.log("Calculate totalExpenses took " + (t2 - t1) + " milliseconds.");

    const operatingExpenses = `$${toCurrency(
      calculateProjectedAnnualOperatingExpenses(data, projectedYear)
    )}`;

    // var t3 = performance.now();

    // console.log("Calculate totalExpenses took " + (t3 - t2) + " milliseconds.");

    const mortgagePayment = `$${toCurrency(
      calculateMonthlyMortgagePayment(data) * 12
    )}`;

    // var t4 = performance.now();

    // console.log(
    //   "Calculate mortgagePayment took " + (t4 - t3) + " milliseconds."
    // );

    const totalCashflow = `$${toCurrency(
      calculateProjectedTotalAnnualCashflow(data, projectedYear)
    )}`;

    // var t5 = performance.now();

    // console.log("Calculate totalCashflow took " + (t5 - t4) + " milliseconds.");

    const cashOnCashROI = `${toCurrency(
      calculateProjectedCashOnCashROI(data, projectedYear)
    )}%`;

    // var t6 = performance.now();

    // console.log("Calculate cashOnCashROI took " + (t6 - t5) + " milliseconds.");

    const propertyValue = `$${toCurrency(
      calculateProjectedPropertyValue(data, year)
    )}`;

    // var t7 = performance.now();

    // console.log("Calculate propertyValue took " + (t7 - t6) + " milliseconds.");

    const equity = `$${toCurrency(calculateProjectedEquity(data, year))}`;

    // var t8 = performance.now();

    // console.log("Calculate equity took " + (t8 - t7) + " milliseconds.");

    const loanBalance = `$${toCurrency(
      calculateProjectedLoanBalance(data, year)
    )}`;

    // var t9 = performance.now();

    // console.log("Calculate loanBalance took " + (t9 - t8) + " milliseconds.");

    const totalProfitIfSold = `$${toCurrency(
      calculateProjectedTotalProfitIfSold(data, year)
    )}`;

    // var t10 = performance.now();

    // console.log(
    //   "Calculate totalProfitIfSold took " + (t10 - t9) + " milliseconds."
    // );

    const annualizedTotalReturn = `${toCurrency(
      calculateProjectedAnnualizedTotalReturn(data, year)
    )}%`;

    // var t11 = performance.now();

    // console.log(
    //   "Calculate annualizedTotalReturn took " + (t11 - t10) + " milliseconds."
    // );

    // console.log("Calculate everthing took " + (t11 - t0) + " milliseconds.");
    // console.log("Ending 1...");

    return {
      projectionYear: year,
      totalIncome: totalIncome,
      totalExpenses: totalExpenses,
      operatingExpenses: operatingExpenses,
      mortgagePayment: mortgagePayment,
      totalCashflow: totalCashflow,
      cashOnCashROI: cashOnCashROI,
      propertyValue: propertyValue,
      equity: equity,
      loanBalance: loanBalance,
      totalProfitIfSold: totalProfitIfSold,
      annualizedTotalReturn: annualizedTotalReturn,
    } as ProjectedData;
  });

  // console.log("Ending...");

  // var t1 = performance.now();

  // console.log(
  //   "Calculate projectedNumbersByYear took " + (t1 - t0) + " milliseconds."
  // );

  return projectedNumbersByYear;
};
