import React, { useState } from "react";
import { Data } from "../BrrrrCalculator";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
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
  calculateMonthlyInsuranceCost,
  calculateMonthlyTaxCost,
  calculateTotalMonthyOperatingExpenses,
  calculateMonthlyTotalIncome,
} from "../../helpers";

interface Props {
  data: Data;
}

const Report = ({ data }: Props) => {
  const { address = "", city = "", state = "", zip = "" } = data;
  const hasFullAddress = address && city && state && zip;
  const [key, setKey] = useState("expenses");
  const summary = [
    {
      key: "Purchase Closing Costs",
      value: `$${toCurrency(data.purchaseClosingCost)}`,
    },
    {
      key: "Estimated Repairs",
      value: `$${toCurrency(data.estimateRepairCost)}`,
    },
    {
      key: "Total Project Cost",
      value: `$${toCurrency(calculateTotalProjectCost(data))}`,
    },
    {
      key: "After Repair Value",
      value: `$${data.afterRepairPrice}`,
    },
    {
      key: "Down Payment",
      value: `$${toCurrency(calculateDownPayment(data))}`,
    },
    {
      key: "Loan Amount",
      value: `$${toCurrency(calculateLoan(data))}`,
    },
    {
      key: "Amortized Over",
      value: `${data.loanPeriod} years`,
    },
    {
      key: "Loan Interest Rate",
      value: `${data.loanInterestRate}%`,
    },
    {
      key: `Monthly P&I`,
      value: `$${toCurrency(calculateMonthlyMortgagePayment(data))}`,
    },
    {
      key: `Total Cash Needed`,
      value: `$${toCurrency(calculateOutOfPocket(data))}`,
    },
  ];

  const formatDataPointValue = (number: number): number => {
    return Number((number || 0).toFixed(2));
  };
  const formatDataPointLabel = (label: string, value: number): string => {
    return `${label}: $${formatDataPointValue(value)}`;
  };

  const getExpenseDataPoints = () => {
    return [
      ["Expense", "Cost"],
      [
        formatDataPointLabel("Mortgage", calculateMonthlyMortgagePayment(data)),
        formatDataPointValue(calculateMonthlyMortgagePayment(data)),
      ],
      [
        formatDataPointLabel("Vacancy", calculateMonthlyVacancyCost(data)),
        formatDataPointValue(calculateMonthlyVacancyCost(data)),
      ],
      [
        formatDataPointLabel(
          "Management",
          calculateMonthlyManagementCost(data)
        ),
        formatDataPointValue(calculateMonthlyManagementCost(data)),
      ],
      [
        formatDataPointLabel("Repairs", calculateMonthlyRepairsCost(data)),
        formatDataPointValue(calculateMonthlyRepairsCost(data)),
      ],
      [
        formatDataPointLabel(
          "CapEx",
          calculateMonthlyCapitalExpendituresCost(data)
        ),
        formatDataPointValue(calculateMonthlyCapitalExpendituresCost(data)),
      ],
      [
        formatDataPointLabel("Insurance", calculateMonthlyInsuranceCost(data)),
        formatDataPointValue(calculateMonthlyInsuranceCost(data)),
      ],
      [
        formatDataPointLabel("Tax", calculateMonthlyTaxCost(data)),
        formatDataPointValue(calculateMonthlyTaxCost(data)),
      ],
    ];
  };

  const fiftyPercentRule = [
    {
      key: "Total Monthly Income",
      value: `$${toCurrency(calculateMonthlyTotalIncome(data))}`,
    },
    {
      key: "x50% for Expenses",
      value: `$${toCurrency(calculateMonthlyTotalIncome(data) / 2)}`,
    },
    {
      key: "Monthly Payment/Interest Payment",
      value: `$${toCurrency(calculateMonthlyMortgagePayment(data))}`,
    },
    {
      key: "Total Monthly Cashflow using 50% Rule",
      value: `$${toCurrency(
        calculateMonthlyTotalIncome(data) / 2 -
          calculateMonthlyMortgagePayment(data)
      )}`,
    },
  ];

  const getIncomeDataPoints = () => {
    return [
      ["Income", "Value"],
      [
        formatDataPointLabel("Rent", data.monthlyRent),
        formatDataPointValue(data.monthlyRent),
      ],
      [
        formatDataPointLabel("Other", data.otherMonthlyIncome),
        formatDataPointValue(data.otherMonthlyIncome),
      ],
    ];
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>{hasFullAddress && `${address} ${city} ${state}, ${zip}`}</h2>
      <Container>
        <Row>Test</Row>
        <Row>
          <Col md={4}>
            {summary.map((x) => (
              <Row>
                <Col md={8}>{x.key}</Col>
                <Col md={4} className="font-weight-bold text-right">
                  {x.value}
                </Col>
              </Row>
            ))}
          </Col>
          <Col md={8}>
            {/* <Row> */}
            <Tabs
              id="pie-charts"
              activeKey={key}
              onSelect={(k: string) => setKey(k)}
              variant="pills"
              className="justify-content-center"
            >
              <Tab eventKey="expenses" title="Expenses">
                <Row>
                  <Col md={6}></Col>
                  <Col md={4}>Total Operating Expeneses</Col>
                  <Col md={2} className="font-weight-bold text-right">
                    {`$${toCurrency(
                      calculateTotalMonthyOperatingExpenses(data)
                    )}`}
                  </Col>
                </Row>
                <Row>
                  <Col md={6}></Col>
                  <Col md={4}>Mortgage Expeneses</Col>
                  <Col md={2} className="font-weight-bold text-right">
                    {`$${toCurrency(calculateMonthlyMortgagePayment(data))}`}
                  </Col>
                </Row>
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
                <Row>
                  <Col md={6}></Col>
                  <Col md={4}>Monthly Income</Col>
                  <Col md={2} className="font-weight-bold text-right">
                    {`$${toCurrency(calculateMonthlyTotalIncome(data))}`}
                  </Col>
                </Row>
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
              </Tab>
              <Tab eventKey="50percentRule" title="50 % Rule">
                <div className="pt-3">
                  {fiftyPercentRule.map((x) => (
                    <Row>
                      <Col md={4}></Col>
                      <Col md={6}>{x.key}</Col>
                      <Col md={2} className="font-weight-bold text-right">
                        {x.value}
                      </Col>
                    </Row>
                  ))}
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Report;
