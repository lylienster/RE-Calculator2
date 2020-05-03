import React, { useState, Profiler } from "react";
import { Container, Tabs, Tab, Button, Row } from "react-bootstrap";
import { Guid } from "guid-typescript";
import PropertyInfo from "./Partials/PropertyInfo";
import PurchaseInfo from "./Partials/PurchaseInfo";
import RentalInfo from "./Partials/RentalInfo";
import AnalysisOverTime from "./Partials/AnalysisOverTime";
import { useLocalStorage } from "../helpers";
import Report from "./Partials/Report";
import LoanBalanceValueEquity from "./Partials/LoanBalanceValueEquity";
import flow from "lodash/fp/flow";
import map from "lodash/fp/map";
import orderBy from "lodash/fp/orderBy";

export interface Data {
  reportId: string;
  reportTitle: string;
  dateCreated: string;

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
  otherMonthlyExpenses: number;

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

interface KeyValuePair {
  key: string;
  value: string;
}
const BuyAndHoldCalculator = () => {
  // const [savedData, setSavedData] = useLocalStorage("userInput", {} as Data);
  const [reports, setReports] = useLocalStorage("reports", [] as Data[]);
  const [selectedReportId, setSelectedReportId] = useLocalStorage(
    "selectedReportId",
    ""
  );
  let selectedReport = reports?.filter(
    (x: Data) => x.reportId === selectedReportId
  )[0] as Data;

  if (!selectedReport && reports.length > 0) {
    selectedReport = reports[0];
  }

  const [data, setData] = useState(selectedReport || ({} as Data));

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newForm = {
      ...data,
      [event.target.name]:
        event.target.type === "text" ||
        event.target.type === "textarea" ||
        value === ""
          ? value
          : Number(value),
    };
    setData(newForm);

    if (newForm.reportId) {
      const selectedReportIndex = reports.findIndex(
        (x: Data) => x.reportId === data.reportId
      );
      if (selectedReportIndex !== -1) {
        setReports([
          ...reports.slice(0, selectedReportIndex),
          newForm,
          ...reports.slice(selectedReportIndex + 1),
        ]);
      }
    }
    // setSavedData(newForm);
  };

  // const handleOnRender = (
  //   id: string,
  //   phase: string,
  //   actualTime: number,
  //   baseTime: number,
  //   startTime: number,
  //   commitTime: number
  // ) => {
  //   console.log(id, phase, actualTime, baseTime, startTime, commitTime);
  // };

  let tabTitles = flow(
    // orderBy((x: Data) => x.dateCreated, ["desc"]),
    map((x: Data) => {
      return {
        value: x.reportTitle,
        key: x.reportId,
      } as KeyValuePair;
    })
  )(reports) as KeyValuePair[];

  if (!tabTitles || tabTitles.length === 0 || !data.reportId) {
    (tabTitles || []).push({ value: "New" } as KeyValuePair);
  }

  const [key, setKey] = useState(selectedReportId);

  const handleOnSelect = (
    key: string,
    event: React.SyntheticEvent<unknown>
  ) => {
    if (key === data.reportTitle) {
      return;
    }

    if (key === "addReport") {
      event.preventDefault();
      setData({} as Data);
      // setSavedData({});
      setKey(undefined);
      return;
    }
    const previousIndex = reports.findIndex(
      (x: Data) => x.reportId === data.reportId
    );
    if (previousIndex !== -1) {
      setReports([
        ...reports.slice(0, previousIndex),
        data,
        ...reports.slice(previousIndex + 1),
      ]);
    }
    const index = reports.findIndex((x: Data) => x.reportId === key);
    const selectedReport = reports[index];
    setKey(key);
    setSelectedReportId(reports[index].reportId);
    setData({ ...selectedReport });
    // setSavedData({ ...selectedReport });
  };

  const handleSaveClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    let index = -1;
    if (data.reportId) {
      index = reports.findIndex((x: Data) => x.reportId === data.reportId);
    }

    if (index !== -1) {
      setReports([
        ...reports.slice(0, index),
        data,
        ...reports.slice(index + 1),
      ]);
      return;
    }

    data.reportId = Guid.create().toString();
    data.dateCreated = new Date().toISOString();
    // setSavedData(data);
    setReports([...reports, data]);
    setKey(data.reportId);
    setData(data);
  };
  return (
    // <Profiler id="Container" onRender={handleOnRender}>
    <Container>
      <h1 className="text-center">{`Buy & Hold Analysis`}</h1>
      <Tabs
        id="1"
        activeKey={key}
        onSelect={handleOnSelect}
        // className="justify-content-center py-3"
      >
        {tabTitles &&
          tabTitles.map((x: KeyValuePair, index: number) => {
            const title = x.value || `Report ${index + 1}`;
            return (
              <Tab eventKey={x.key} title={title}>
                {/* Test */}
              </Tab>
            );
          })}
        {data.reportId && (
          <Tab
            eventKey="addReport"
            title="Add New Report"
            disabled={!data.reportId}
          >
            Test
          </Tab>
        )}

        {/* <Tab eventKey="expenses" title={data.reportTitle}>
          <div className="float-right py-2">
            <Button style={{ width: "100px" }} onClick={handleSaveClick}>
              Save
            </Button>
          </div>
          <div className="clearfix"></div>
          <PropertyInfo data={data} handleOnChange={handleOnChange} />
          <PurchaseInfo data={data} handleOnChange={handleOnChange} />
          <RentalInfo data={data} handleOnChange={handleOnChange} />
          <hr className="solid" />
          <Report data={data} />
          <AnalysisOverTime data={data} />
          <LoanBalanceValueEquity data={data} />
          <div style={{ wordBreak: "break-word" }}>{JSON.stringify(data)}</div>
        </Tab>
        <Tab eventKey="income" title="Expenses">
          Test
        </Tab>*/}
      </Tabs>
      {!data.reportId && (
        <div className="float-right py-2">
          <Button onClick={handleSaveClick}>Create New Report</Button>
        </div>
      )}
      <div className="clearfix"></div>
      <PropertyInfo data={data} handleOnChange={handleOnChange} />
      <PurchaseInfo data={data} handleOnChange={handleOnChange} />
      <RentalInfo data={data} handleOnChange={handleOnChange} />
      <hr className="solid" />
      <Report data={data} />
      <AnalysisOverTime data={data} />
      <LoanBalanceValueEquity data={data} />
      <div style={{ wordBreak: "break-word" }}>{JSON.stringify(data)}</div>
    </Container>
    // </Profiler>
  );
};

export default BuyAndHoldCalculator;
