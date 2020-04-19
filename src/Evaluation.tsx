import React from "react";
import SingleInput from "./SingleInput";
import { FormData } from "./Calculator";
import {
  calculateMonthlyCashFlow,
  calculateROIWithoutMortgage,
  calculateROI,
} from "./helpers";

interface Props {
  form: FormData;
}

const Evaluation = ({ form }: Props) => {
  return (
    <div>
      <h2>6) Evaluation</h2>
      <SingleInput
        label="Cashflow"
        inputValue={calculateMonthlyCashFlow(form)}
        prefix="$"
        suffix="/mo."
        disabled={true}
      />
      <SingleInput
        label="ROI (without mortgage)"
        inputValue={calculateROIWithoutMortgage(form)}
        suffix="%"
        disabled={true}
      />
      <SingleInput
        label="ROI"
        inputValue={calculateROI(form)}
        suffix="%"
        disabled={true}
      />
    </div>
  );
};

export default Evaluation;
