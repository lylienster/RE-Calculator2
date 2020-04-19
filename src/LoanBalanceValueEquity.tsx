import React from "react";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
} from "recharts";
import { FormData } from "./Calculator";
import {
  calculateProjectionSalePrice,
  calculateProjectionLoanPayoff,
} from "./helpers";

interface Props {
  form: FormData;
}

interface GraphPoint {
  name: string;
  equity: number;
  loanPayoff: number;
  propertyValue: number;
}

const LoanBalanceValueEquity = ({ form }: Props) => {
  const getGraphPoints = (numberOfYear: number): GraphPoint[] => {
    const points: GraphPoint[] = [];
    for (let i = 0; i <= numberOfYear; i = i + 1) {
      const loanPayoff = Math.floor(
        calculateProjectionLoanPayoff({
          ...form,
          projectionYear: i,
        })
      );
      const propertyValue = Math.floor(
        calculateProjectionSalePrice({
          ...form,
          projectionYear: i,
        })
      );
      points.push({
        name: `Year ${i}`,
        equity: propertyValue - loanPayoff,
        loanPayoff: loanPayoff,
        propertyValue: propertyValue,
      });
    }

    return points;
  };

  const data = getGraphPoints(30);

  const opacity = 0.3;

  return (
    <div>
      <AreaChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" align="center" />
        <Area
          type="monotone"
          dataKey="propertyValue"
          stroke="#ffc658"
          fill="#ffc658"
          fillOpacity={opacity}
        />
        <Area
          type="monotone"
          dataKey="equity"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={opacity}
        />
        <Area
          type="monotone"
          dataKey="loanPayoff"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={opacity}
        />
      </AreaChart>
    </div>
  );
};

export default LoanBalanceValueEquity;
