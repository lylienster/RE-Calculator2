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

  const getExpenseDataPoints = () => {
    const getValue = (number: number): number => {
      return Number(number.toFixed(2));
    };
    const getLabel = (label: string, value: number): string => {
      return `${label}: $${value.toFixed(2)}`;
    };
    return [
      ["Expense", "Cost"],
      [
        getLabel("Mortgage", calculateMonthlyMortgagePayment(data)),
        getValue(calculateMonthlyMortgagePayment(data)),
      ],
      [
        getLabel("Vacancy", calculateMonthlyVacancyCost(data)),
        getValue(calculateMonthlyVacancyCost(data)),
      ],
      [
        getLabel("Management", calculateMonthlyManagementCost(data)),
        getValue(calculateMonthlyManagementCost(data)),
      ],
      [
        getLabel("Repairs", calculateMonthlyRepairsCost(data)),
        getValue(calculateMonthlyRepairsCost(data)),
      ],
      [
        getLabel("CapEx", calculateMonthlyCapitalExpendituresCost(data)),
        getValue(calculateMonthlyCapitalExpendituresCost(data)),
      ],
      [
        getLabel("Insurance", calculateMonthlyInsuranceCost(data)),
        getValue(calculateMonthlyInsuranceCost(data)),
      ],
      [
        getLabel("Tax", calculateMonthlyTaxCost(data)),
        getValue(calculateMonthlyTaxCost(data)),
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
                Test 2
              </Tab>
              <Tab eventKey="50percentRule" title="50 % Rule">
                Test 3
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Report;
