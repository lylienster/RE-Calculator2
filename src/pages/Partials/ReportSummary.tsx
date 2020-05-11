import React, { useState } from "react";
import { Data } from "../BuyAndHoldCalculator";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import Chart from "react-google-charts";

import {
  calculateTotalProjectCost,
  toCurrency,
  calculateDownPayment,
  calculateLoan,
  calculateMonthlyMortgagePayment,
  calculateOutOfPocket,
  calculateMonthlyVacancyCost,
  calculateMonthlyManagementCost,
  calculateMonthlyRepairsCost,
  calculateMonthlyCapitalExpendituresCost,
  calculateMonthlyTaxCost,
  calculateTotalMonthyOperatingExpenses,
  calculateMonthlyTotalIncome,
  calculateMonthlyTotalExpenses,
  calculateProjectedTotalAnnualCashflow,
  calculateProjectedCashOnCashROI,
  calculateNetOperatingIncome,
  calculatePurchaseCapRate,
  calculateProFormaCap,
} from "../../helpers";

interface Props {
  data: Data;
}

interface KeyValuePair {
  key: string;
  value: string;
}

const ReportSummary = ({ data }: Props) => {
  const {
    address = "",
    city = "",
    state = "",
    zip = "",
    salesDescription,
  } = data;
  const hasFullAddress = address && city && state && zip;
  const [key, setKey] = useState("expenses");

  const createKeyValuePair = (
    key: string,
    value: number,
    isPercent?: boolean
  ): KeyValuePair => {
    if (isPercent) {
      return {
        key: key,
        value: `${toCurrency(value)}%`,
      };
    }
    return {
      key: key,
      value: `$${toCurrency(value)}`,
    };
  };

  const formatDataPointValue = (number: number): number => {
    return Number((number || 0).toFixed(2));
  };
  const formatDataPointLabel = (label: string, value: number): string => {
    return `${label}: $${formatDataPointValue(value)}`;
  };

  const createDataPoint = (label: string, value: number): [string, number] => {
    return [formatDataPointLabel(label, value), formatDataPointValue(value)];
  };

  const summary = [
    createKeyValuePair("Purchase Closing Costs", data.purchaseClosingCost),
    createKeyValuePair("Estimated Repairs", data.estimateRepairCost),
    createKeyValuePair("Total Project Cost", calculateTotalProjectCost(data)),
    createKeyValuePair("After Repair Value", data.afterRepairPrice),
    createKeyValuePair("Down Payment", calculateDownPayment(data)),
    createKeyValuePair("Loan Amount", calculateLoan(data)),
    {
      key: "Amortized Over",
      value: `${data.loanPeriod} years`,
    },
    createKeyValuePair("Loan Interest Rate", data.loanInterestRate, true),
    createKeyValuePair("Monthly P&I", calculateMonthlyMortgagePayment(data)),
    createKeyValuePair("Total Cash Needed", calculateOutOfPocket(data)),
  ] as KeyValuePair[];

  const getExpenseDataPoints = () => {
    return [
      ["Expense", "Cost"],
      createDataPoint("Mortgage", calculateMonthlyMortgagePayment(data)),
      createDataPoint("Vacancy", calculateMonthlyVacancyCost(data)),
      createDataPoint("Management", calculateMonthlyManagementCost(data)),
      createDataPoint("Repairs", calculateMonthlyRepairsCost(data)),
      createDataPoint("CapEx", calculateMonthlyCapitalExpendituresCost(data)),
      createDataPoint("Insurance", data.monthlyInsurance),
      createDataPoint("Tax", calculateMonthlyTaxCost(data)),
      createDataPoint("HOA", data.monthlyHoaCost),
      createDataPoint("Other Expenses", data.otherMonthlyExpenses),
      createDataPoint("Electricity", data.monthlyElectricyCost),
      createDataPoint("Water & Sewer", data.monthlyWaterAndSewerCost),
      createDataPoint("Garbage", data.monthlyGarbageCost),
      createDataPoint("PMI", data.monthlyPmiCost),
    ];
  };

  const getIncomeDataPoints = () => {
    return [
      ["Income", "Value"],
      createDataPoint("Rent", data.monthlyRent),
      createDataPoint("Other", data.otherMonthlyIncome),
    ];
  };

  const fiftyPercentRule = [
    createKeyValuePair(
      "Total Monthly Income",
      calculateMonthlyTotalIncome(data)
    ),
    createKeyValuePair(
      "x50% for Expenses",
      calculateMonthlyTotalIncome(data) / 2
    ),
    createKeyValuePair(
      "Mortgage Payment",
      calculateMonthlyMortgagePayment(data)
    ),
    createKeyValuePair(
      "Monthly Cashflow using 50% Rule",
      calculateMonthlyTotalIncome(data) / 2 -
        calculateMonthlyMortgagePayment(data)
    ),
  ];

  const displayKeyValuePairs = (pairs: KeyValuePair[]) => {
    return pairs.map((x) => (
      <Row>
        <Col xs={8}>{x.key}</Col>
        <Col xs={4} className="font-weight-bold text-right">
          {x.value}
        </Col>
      </Row>
    ));
  };

  const displayKeyValuePairs2 = (fiftyPercentRule: KeyValuePair[]) => {
    return fiftyPercentRule.map((x) => (
      <Row>
        <Col md={5}></Col>
        <Col md={7}>
          <Row>
            <Col xs={8}>{x.key}</Col>
            <Col xs={4} className="font-weight-bold text-right">
              {x.value}
            </Col>
          </Row>
        </Col>
      </Row>
    ));
  };

  const displayKeyValuePairs3 = (pairs: KeyValuePair[]) => {
    return (
      <Row>
        {pairs.map((x) => (
          <Col md={3} className="pl-md-0">
            <Row className="py-md-2">
              <Col md={12} xs={8}>
                {x.key}
              </Col>
              <Col md={12} xs={4} className="font-weight-bold ">
                <span className="d-none d-sm-block">{x.value}</span>
                <span className="text-right d-block d-sm-none">{x.value}</span>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    );
  };

  const getExpenseTabKeyValuePairs = [
    createKeyValuePair(
      "Total Operating Expeneses",
      calculateTotalMonthyOperatingExpenses(data)
    ),
    createKeyValuePair(
      "Mortgage Expeneses",
      calculateMonthlyMortgagePayment(data)
    ),
  ] as KeyValuePair[];

  const getIncomeTabKeyValuePairs = [
    createKeyValuePair("Monthly Income", calculateMonthlyTotalIncome(data)),
  ] as KeyValuePair[];

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{hasFullAddress && `${address} ${city} ${state}, ${zip}`}</h2>
      <Row>
        <Col>
          <p>{salesDescription}</p>
        </Col>
      </Row>
      <Row className="py-3">
        <Col md={4}>
          <Row>
            <Col md={12} xs={8}>
              Purchase Price
            </Col>
            <Col md={12} xs={4} className="font-weight-bold">
              <span className="d-none d-sm-block">
                {`$${toCurrency(data.purchasePrice)}`}
              </span>
              <span className="text-right d-block d-sm-none">
                {`$${toCurrency(data.purchasePrice)}`}
              </span>
            </Col>
          </Row>
        </Col>
        <Col md={8}>
          {displayKeyValuePairs3([
            createKeyValuePair(
              "Monthly Income",
              calculateMonthlyTotalIncome(data)
            ),
            createKeyValuePair(
              "Monthly Expenses",
              calculateMonthlyTotalExpenses(data)
            ),
            createKeyValuePair(
              "Monthly Cashflow",
              calculateProjectedTotalAnnualCashflow(data) / 12
            ),
            createKeyValuePair(
              "Pro Forma Cap",
              calculateProFormaCap(data),
              true
            ),
            createKeyValuePair(
              "Net Operating Income",
              calculateNetOperatingIncome(data)
            ),
            createKeyValuePair("Total Cash Needed", calculateOutOfPocket(data)),
            createKeyValuePair(
              "Cash on Cash ROI",
              calculateProjectedCashOnCashROI(data),
              true
            ),
            createKeyValuePair(
              "Purchase Cap Rate",
              calculatePurchaseCapRate(data),
              true
            ),
          ])}
        </Col>
      </Row>
      <Row>
        <Col md={4}>{displayKeyValuePairs(summary)}</Col>
        <Col md={8}>
          <Tabs
            id="pie-charts"
            activeKey={key}
            onSelect={(k: string) => setKey(k)}
            variant="pills"
            className="justify-content-center py-3"
          >
            <Tab eventKey="expenses" title="Expenses">
              {displayKeyValuePairs2(getExpenseTabKeyValuePairs)}
              <div className="justify-content-center">
                <Chart
                  // width={"500px"}
                  height={"300px"}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={getExpenseDataPoints()}
                  options={{}}
                  rootProps={{ "expense-chart": "1" }}
                />
              </div>
            </Tab>
            <Tab eventKey="income" title="Income">
              <div className="pt-3">
                {displayKeyValuePairs2(getIncomeTabKeyValuePairs)}
                <div className="justify-content-center">
                  <Chart
                    // width={"500px"}
                    height={"300px"}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={getIncomeDataPoints()}
                    options={{}}
                    rootProps={{ "income-chart": "1" }}
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="50percentRule" title="50 % Rule">
              <div className="pt-3">
                {displayKeyValuePairs2(fiftyPercentRule)}
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default ReportSummary;
