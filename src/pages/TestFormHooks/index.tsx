import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Report from "../Partials/Report";
import PropertyInfo from "./PropertyInfo";
import PurchaseInfo from "./PurchaseInfo";
import RentalPropertyInfo, {
  convertToRentalPropertyInfo,
} from "./RentalPropertyInfo";
import RentalInfo from "./RentalInfo";
import { useLocalStorage } from "../../helpers";
import _ from "lodash";

const TestFormHooks = () => {
  const [savedData, setSavedData] = useLocalStorage(
    "savedData",
    {} as RentalPropertyInfo
  );

  var defaults = {
    downPaymentPercentage: 20,
    loanInterestRate: 4,
    loanPeriod: 30,
    vacancyRate: 5,
    repairsAndMaintenanceRate: 5,
    capitalExpendituresRate: 12.5,
    propertyManagementRate: 11,
    annualIncomeGrowth: 5,
    annualExpensesGrowth: 5,
    annualPropertyValueGrowth: 5,
    salesExpenses: 6,
  } as RentalPropertyInfo;

  const [data, setData] = useState(_.isEmpty(savedData) ? defaults : savedData);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    var convertedData = convertToRentalPropertyInfo(data);
    setSavedData(convertedData);
    setData(convertedData);
  };

  return (
    <>
      <Container>
        <h1 className="text-center">{`Buy & Hold Analysis`}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PropertyInfo register={register} data={data} />
          <PurchaseInfo register={register} data={data} />
          <RentalInfo register={register} data={data} />
          <div className="text-center py-3">
            <Button type="submit">Run Report</Button>
          </div>
        </form>
        <div style={{ wordBreak: "break-word" }}>{JSON.stringify(data)}</div>
        <Report data={data} />
      </Container>
    </>
  );
};

export default TestFormHooks;
