import React from "react";
import { toCurrency } from "./helpers";

interface Props {
  label: string;
  inputName: string;
  inputValue?: number;
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFormValueByName: (inputName: string, value: number) => void;
}

const MonthYearInput = ({
  label,
  inputName,
  inputValue,
  handleOnChange,
  setFormValueByName,
}: Props) => {
  const handleYearInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value.replace(/\D/g, "")) / 12;
    setFormValueByName(inputName, value);
  };

  return (
    <div className="input-group row py-1 ">
      <label className="col-md-2">{label}</label>
      <div className="col-md-4">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            className="form-control"
            name={inputName}
            value={inputValue ? toCurrency(Math.ceil(inputValue)) : ""}
            onChange={handleOnChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">/mo.</span>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="input-group">
          <input
            className="form-control"
            value={inputValue ? toCurrency(inputValue * 12) : ""}
            onChange={handleYearInputOnChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">/yr.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthYearInput;
