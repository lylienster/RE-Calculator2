import React from "react";
import { Row, Col } from "react-bootstrap";
import { Data } from "../BuyAndHoldCalculator";
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
        <Col md={3}>
          <label>Check Rental Rates</label>
          <div className="calc-rentometer-link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.rentometer.com/"
            >
              <img
                alt="nil"
                src="data:image/png;base64,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"
                style={{ height: 36 }}
              />
            </a>
          </div>
        </Col>
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
