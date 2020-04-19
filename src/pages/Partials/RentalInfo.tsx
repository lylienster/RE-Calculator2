import React from "react";
import { FormControl } from "react-bootstrap";
import { Data } from "../BrrrrCalculator";
import NumberInput from "../Components/NumberInput";
import { toCurrency } from "../../helpers";

interface Props {
  data: Data;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RentalInfo = ({ data, handleOnChange }: Props) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Rental Info</h2>
      <h3 className="pt-md-3">Income</h3>
      <label>Total Gross Monthly Rent</label>
      <NumberInput
        value={data.monthlyRent}
        onChange={handleOnChange}
        name="monthlyRent"
        required={true}
      />
      <label>Other Monthly Income</label>
      <NumberInput
        value={data.otherMonthlyIncome}
        onChange={handleOnChange}
        name="otherMonthlyIncome"
      />

      <h3 className="pt-md-3">Fixed Landlord-Paid Expenses</h3>
      <label>Electricity</label>
      <FormControl
        value={data.monthlyElectricyCost || ""}
        onChange={handleOnChange}
        name="monthlyElectricyCost"
      />
      <label>{`Water & Sewer`}</label>
      <FormControl
        value={data.monthlyWaterAndSewerCost || ""}
        onChange={handleOnChange}
        name="monthlyWaterAndSewerCost"
      />
      <label>PMI</label>
      <FormControl
        value={data.monthlyPmiCost || ""}
        onChange={handleOnChange}
        name="monthlyPmiCost"
      />
      <label>Garbage</label>
      <FormControl
        value={data.monthlyGarbageCost || ""}
        onChange={handleOnChange}
        name="monthlyGarbageCost"
      />
      <label>HOAs</label>
      <FormControl
        value={data.monthlyHoaCost || ""}
        onChange={handleOnChange}
        name="monthlyHoaCost"
      />
      <label>Property Taxes</label>
      <FormControl
        value={
          data.annualPropertyTaxes
            ? toCurrency(data.annualPropertyTaxes / 12)
            : ""
        }
        disabled={true}
      />
      <label>Other Monthly Expenses</label>
      <FormControl
        value={data.otherMontnlyExpenses || ""}
        onChange={handleOnChange}
        name="otherMontnlyExpenses"
      />

      <h3 className="pt-md-3">Variable Landlord-Paid Expenses</h3>
      <label>Vacancy</label>
      <NumberInput
        value={data.vacancyRate}
        onChange={handleOnChange}
        name="vacancyRate"
      />

      <label>Repairs and Maintenance</label>
      <NumberInput
        value={data.repairsAndMaintenanceRate}
        onChange={handleOnChange}
        name="repairsAndMaintenanceRate"
      />

      <label>Capital Expenditures</label>
      <NumberInput
        value={data.capitalExpendituresRate}
        onChange={handleOnChange}
        name="capitalExpendituresRate"
      />

      <label>Management Fees</label>
      <NumberInput
        value={data.propertyManagementRate}
        onChange={handleOnChange}
        name="propertyManagementRate"
      />

      <h3 className="pt-md-3">Future Assumptions</h3>
      <label>Annual Income Growth</label>
      <NumberInput
        value={data.annualIncomeGrowth}
        onChange={handleOnChange}
        name="annualIncomeGrowth"
      />

      <label>Annual Property Value Growth</label>
      <NumberInput
        value={data.annualPropertyValueGrowth}
        onChange={handleOnChange}
        name="annualPropertyValueGrowth"
      />

      <label>Annual Expenses Growth</label>
      <NumberInput
        value={data.annualExpensesGrowth}
        onChange={handleOnChange}
        name="annualExpensesGrowth"
      />

      <label>Sales Expenese</label>
      <NumberInput
        value={data.salesExpenses}
        onChange={handleOnChange}
        name="salesExpenses"
      />
    </div>
  );
};

export default RentalInfo;
