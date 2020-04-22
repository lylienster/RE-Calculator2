import React from "react";
import { Row } from "react-bootstrap";
import { Data } from "../BrrrrCalculator";
import InputContainer from "../Components/InputContainer";

interface Props {
  data: Data;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RentalInfo = ({ data, handleOnChange }: Props) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Rental Info</h2>
      <Row>
        <InputContainer
          label="Total Gross Monthly Rent"
          value={data.monthlyRent}
          onChange={handleOnChange}
          name="monthlyRent"
          required={true}
        />
        <InputContainer
          label="Other Monthly Income"
          value={data.otherMonthlyIncome}
          onChange={handleOnChange}
          name="otherMonthlyIncome"
        />
      </Row>

      <h3 className="pt-md-3">Fixed Landlord-Paid Expenses</h3>
      <Row>
        <InputContainer
          label="Electricity"
          value={data.monthlyElectricyCost}
          onChange={handleOnChange}
          name="monthlyElectricyCost"
        />
        <InputContainer
          label={`Water & Sewer`}
          value={data.monthlyWaterAndSewerCost}
          onChange={handleOnChange}
          name="monthlyWaterAndSewerCost"
        />
        <InputContainer
          label="PMI"
          value={data.monthlyPmiCost}
          onChange={handleOnChange}
          name="monthlyPmiCost"
        />
        <InputContainer
          label="Garbage"
          value={data.monthlyGarbageCost}
          onChange={handleOnChange}
          name="monthlyGarbageCost"
        />
        <InputContainer
          label="HOAs"
          value={data.monthlyHoaCost}
          onChange={handleOnChange}
          name="monthlyHoaCost"
        />
        <InputContainer
          label="Monthly Insurance"
          value={data.monthlyInsurance}
          onChange={handleOnChange}
          name="monthlyInsurance"
        />
        <InputContainer
          label="Property Taxes"
          value={
            data.annualPropertyTaxes
              ? Number((data.annualPropertyTaxes / 12).toFixed())
              : 0
          }
          disabled={true}
        />
        <InputContainer
          label="Other Monthly Expenses"
          value={data.otherMonthlyExpenses}
          onChange={handleOnChange}
          name="otherMonthlyExpenses"
        />
      </Row>
      <h3 className="pt-md-3">Variable Landlord-Paid Expenses</h3>
      <Row>
        <InputContainer
          label="Vacancy"
          value={data.vacancyRate}
          onChange={handleOnChange}
          name="vacancyRate"
        />
        <InputContainer
          label="Repairs and Maintenance"
          value={data.repairsAndMaintenanceRate}
          onChange={handleOnChange}
          name="repairsAndMaintenanceRate"
        />
        <InputContainer
          label="Capital Expenditures"
          value={data.capitalExpendituresRate}
          onChange={handleOnChange}
          name="capitalExpendituresRate"
        />
        <InputContainer
          label="Management Fees"
          value={data.propertyManagementRate}
          onChange={handleOnChange}
          name="propertyManagementRate"
        />
      </Row>
      <h3 className="pt-md-3">Future Assumptions</h3>
      <Row>
        <InputContainer
          label="Annual Income Growth"
          value={data.annualIncomeGrowth}
          onChange={handleOnChange}
          name="annualIncomeGrowth"
        />
        <InputContainer
          label="Annual Property Value Growth"
          value={data.annualPropertyValueGrowth}
          onChange={handleOnChange}
          name="annualPropertyValueGrowth"
        />
        <InputContainer
          label="Annual Expenses Growth"
          value={data.annualExpensesGrowth}
          onChange={handleOnChange}
          name="annualExpensesGrowth"
        />
        <InputContainer
          label="Sales Expenese"
          value={data.salesExpenses}
          onChange={handleOnChange}
          name="salesExpenses"
        />
      </Row>
    </div>
  );
};

export default RentalInfo;
