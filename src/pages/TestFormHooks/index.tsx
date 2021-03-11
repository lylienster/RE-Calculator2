import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Report from "../Partials/Report";
import PropertyInfo from "./PropertyInfo";
import PurchaseInfo from "./PurchaseInfo";
import RentalPropertyInfo, {
  convertToRentalPropertyInfo,
} from "./RentalPropertyInfo";
import RentalInfo from "./RentalInfo";
import { useLocalStorage } from "../../helpers";

const TestFormHooks = () => {
  const [savedData, setSavedData] = useLocalStorage(
    "savedData",
    {} as RentalPropertyInfo
  );
  const [data, setData] = useState(savedData as RentalPropertyInfo);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    var convertedData = convertToRentalPropertyInfo(data);
    setSavedData(data);
    setData(convertedData);
  };

  return (
    <>
      <Container>
        <h1 className="text-center">{`Buy & Hold Analysis`}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PropertyInfo register={register} data={data} />
          <PurchaseInfo register={register} />
          <RentalInfo register={register} />
          <div>
            <input type="submit" value="Run Report" />
          </div>
        </form>
        <div style={{ wordBreak: "break-word" }}>{JSON.stringify(data)}</div>
        <Report data={data} />
      </Container>
    </>
  );
};

export default TestFormHooks;
