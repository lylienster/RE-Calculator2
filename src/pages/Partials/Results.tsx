import React from "react";
import { Table } from "react-bootstrap";
import { Data } from "../BuyAndHoldCalculator";
import {
  calculateProjectedTotalAnnualIncome,
  toCurrency,
  calculateProjectedTotalAnnualExpenses,
  calculateProjectedAnnualOperatingExpenses,
  calculateMonthlyMortgagePayment,
  calculateProjectedTotalAnnualCashflow,
  calculateProjectedCashOnCashROI,
  calculateProjectedLoanBalance,
  calculateProjectedTotalProfitIfSold,
  calculateProjectedEquity,
  calculateProjectedPropertyValue,
  calculateProjectedAnnualizedTotalReturn,
} from "../../helpers";
import "./Results.css";

interface Props {
  data: Data;
}

interface ProjectedData {
  totalIncome: string;
  totalExpenses: string;
  operatingExpenses: string;
  propertyValue: string;
  mortgagePayment: string;
  totalCashflow: string;
  cashOnCashROI: string;
  loanBalance: string;
  equity: string;
  projectionYear: number;
  totalProfitIfSold: string;
  annualizedTotalReturn: string;
}

const AnalysisOverTime = ({ data }: Props) => {
  const projectionYears = [1, 2, 5, 10, 15, 20, 30];
  const projectedNumbersByYear = projectionYears.map((year) => {
    const projectedYear = year - 1;
    return {
      projectionYear: year,
      totalIncome: `$${toCurrency(
        calculateProjectedTotalAnnualIncome(data, projectedYear)
      )}`,
      totalExpenses: `$${toCurrency(
        calculateProjectedTotalAnnualExpenses(data, projectedYear)
      )}`,
      operatingExpenses: `$${toCurrency(
        calculateProjectedAnnualOperatingExpenses(data, projectedYear)
      )}`,
      mortgagePayment: `$${toCurrency(
        calculateMonthlyMortgagePayment(data) * 12
      )}`,
      totalCashflow: `$${toCurrency(
        calculateProjectedTotalAnnualCashflow(data, projectedYear)
      )}`,
      cashOnCashROI: `${toCurrency(
        calculateProjectedCashOnCashROI(data, projectedYear)
      )}%`,
      propertyValue: `$${toCurrency(
        calculateProjectedPropertyValue(data, year)
      )}`,
      equity: `$${toCurrency(calculateProjectedEquity(data, year))}`,
      loanBalance: `$${toCurrency(calculateProjectedLoanBalance(data, year))}`,
      totalProfitIfSold: `$${toCurrency(
        calculateProjectedTotalProfitIfSold(data, year)
      )}`,
      annualizedTotalReturn: `${toCurrency(
        calculateProjectedAnnualizedTotalReturn(data, year)
      )}%`,
    } as ProjectedData;
  });

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Analysis Over Time</h2>
      <div>{`Expense Increase: ${data.annualExpensesGrowth || 0}%/year`}</div>
      <div>{`Income Increase: ${data.annualIncomeGrowth || 0}%/year`}</div>
      <div>{`Property Value Increase: ${
        data.annualPropertyValueGrowth || 0
      }%/year`}</div>
      <Table bordered size="sm" hover>
        <thead>
          <tr>
            <th></th>
            {projectionYears.map((year) => {
              return <th>{`Year ${year}`}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Annual Income</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.totalIncome}</td>;
            })}
          </tr>
          <tr className="striped">
            <td>Total Annual Expenses</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.totalExpenses}</td>;
            })}
          </tr>
          <tr className="striped">
            <td style={{ paddingLeft: "2rem" }}>Operating Expenses</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.operatingExpenses}</td>;
            })}
          </tr>
          <tr className="striped">
            <td style={{ paddingLeft: "2rem" }}>Mortgage Payment</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.mortgagePayment}</td>;
            })}
          </tr>
          <tr>
            <td>Total Annual Cashflow</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.totalCashflow}</td>;
            })}
          </tr>
          <tr className="striped">
            <td>Cash on Cash ROI</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.cashOnCashROI}</td>;
            })}
          </tr>
          <tr>
            <td>Property Value</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.propertyValue}</td>;
            })}
          </tr>
          <tr className="striped">
            <td>Equity</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.equity}</td>;
            })}
          </tr>
          <tr>
            <td>Loan Balance</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.loanBalance}</td>;
            })}
          </tr>
          <tr className="striped">
            <td>Total Profit If Sold</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.totalProfitIfSold}</td>;
            })}
          </tr>
          <tr>
            <td>Annualized Total Return</td>
            {projectedNumbersByYear.map((numbers) => {
              return <td>{numbers.annualizedTotalReturn}</td>;
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AnalysisOverTime;
