import React from "react";
import { Data } from "../BuyAndHoldCalculator";
import "./Results.css";
import Chart from "react-google-charts";
import {
  calculateProjectionLoanPayoff,
  calculateProjectionSalePrice,
  calculateProjectedPropertyValue,
  calculateProjectedLoanBalance,
  calculateProjectedEquity,
  calculateProjectedTotalAnnualIncome,
  calculateProjectedTotalAnnualExpenses,
} from "../../helpers";
import { Row, Col } from "react-bootstrap";

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

interface GraphPoint {
  name: string;
  equity: number;
  loanPayoff: number;
  propertyValue: number;
}

const LoanBalanceValueEquity = ({ data }: Props) => {
  const getGraphPoints = (
    numberOfYear: number
  ): (string[] | [string, number, number, number])[] => {
    let points: (string[] | [string, number, number, number])[] = [
      ["Year", "Equity", "Loan Balance", "Property Value"],
    ];

    for (let i = 0; i <= numberOfYear; i = i + 1) {
      const loanPayoff = Math.floor(calculateProjectedLoanBalance(data, i));
      const propertyValue = Math.floor(
        calculateProjectedPropertyValue(data, i)
      );
      points.push([
        `Year ${i}`,
        calculateProjectedEquity(data, i),
        loanPayoff,
        propertyValue,
      ]);
    }

    return points;
  };

  const getIncomeExpenseCashflowDataPoints = (
    numberOfYear: number
  ): (string[] | [string, number, number, number])[] => {
    let points: (string[] | [string, number, number, number])[] = [
      ["Year", "Income", "Expense", "Cashflow"],
    ];

    for (let i = 1; i <= numberOfYear; i = i + 1) {
      const income = calculateProjectedTotalAnnualIncome(data, i - 1);
      const expense = calculateProjectedTotalAnnualExpenses(data, i - 1);
      const cashflow = income - expense;
      points.push([
        `Year ${i}`,
        Math.floor(income),
        Math.floor(expense),
        Math.floor(cashflow),
      ]);
    }

    return points;
  };

  const dataPoints = getGraphPoints(30);
  const incomeExpenseCashflowDataPoints = getIncomeExpenseCashflowDataPoints(
    30
  );
  const displayChart = (
    dataPoints: (string[] | [string, number, number, number])[],
    title: string
  ) => {
    const min = Math.min(
      ...dataPoints
        .slice(1)
        .map((x) => Math.min(Number(x[1]), Number(x[2]), Number(x[3]))),
      0
    );
    return (
      <Chart
        // width={"800px"}
        height={"300px"}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={dataPoints}
        options={{
          title: title,
          hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
          vAxis: {
            minValue: min,
            viewWindow: {
              min: min,
            },
          },
          legend: { position: "top", maxLines: 3 },
          // For the legend to fit, we make the chart area smaller
          //   chartArea: { width: "50%", height: "70%" },
          // lineWidth: 25
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    );
  };
  return (
    <div style={{ marginTop: "30px" }}>
      <Row>
        <Col md={6}>
          {displayChart(
            incomeExpenseCashflowDataPoints,
            "Income, Expense and Cashflow"
          )}
        </Col>
        <Col md={6}>
          {displayChart(dataPoints, "Loan Balance, Value and Equity")}
        </Col>
      </Row>
    </div>
  );
};

export default LoanBalanceValueEquity;
