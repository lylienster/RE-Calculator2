import React from "react";
import { Data } from "../BuyAndHoldCalculator";
import LoanBalanceValueEquity from "./LoanBalanceValueEquity";
import ReportSummary from "./ReportSummary";
import AnalysisOverTime from "./AnalysisOverTime";

interface Props {
  data: Data;
}

const Report = ({ data }: Props) => {
  return (
    <>
      <ReportSummary data={data} />
      <AnalysisOverTime data={data} />
      <LoanBalanceValueEquity data={data} />
    </>
  );
};

export default Report;
