import React from "react";
import {
  calculateValueByPercentage,
  getNumbersOnly,
  toCurrency,
} from "./helpers";

interface Props {
  label: string;
  inputName: string;
  inputValue?: number;
  additionalInfoText?: string;
  disabled?: boolean;
  prefix?: string;
  suffix?: string;
  required?: boolean;
  roundValue?: boolean;
  isNumberInput?: boolean;
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFormValueByName: (inputName: string, value: number) => void;
  percentageValue: number;
  wholeMonthlyValue: number;
  disableYear?: boolean;
  monthAppendValue?: string;
}

const MonthYearPercentInput = ({
  label,
  inputName,
  additionalInfoText,
  percentageValue,
  wholeMonthlyValue,
  handleOnChange,
  setFormValueByName,
  disableYear,
  monthAppendValue,
}: Props) => {
  const monthlyValue = calculateValueByPercentage(
    wholeMonthlyValue,
    percentageValue
  );

  const handleYearInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value =
      (Number(getNumbersOnly(event.target.value)) / 12 / wholeMonthlyValue) *
      100;
    setFormValueByName(inputName, value);
  };

  const handleMonthInputOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value =
      (Number(getNumbersOnly(event.target.value)) / wholeMonthlyValue) * 100;
    setFormValueByName(inputName, value);
  };

  const monthValue = monthlyValue ? toCurrency(Math.ceil(monthlyValue)) : "";

  const value = Math.round(percentageValue * 100) / 100;
  const getYearInput = () => {
    if (disableYear) {
      return null;
    }

    const yearValue = monthlyValue
      ? toCurrency(Math.ceil(monthlyValue * 12))
      : "";
    return (
      <div className="col-md-3">
        <div className="input-group">
          <input
            className="form-control"
            value={yearValue}
            onChange={handleYearInputOnChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">/yr.</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="input-group row py-1">
      <label className="col-md-2">{label}</label>
      {/* Monthly Input */}
      <div className="col-md-4">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            className="form-control"
            value={monthValue}
            onChange={handleMonthInputOnChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">{monthAppendValue}</span>
          </div>
        </div>
      </div>
      {getYearInput()}
      {/* Percentage Input */}
      <div className="col-md-3">
        <div className="input-group">
          <input
            className="form-control"
            type="number"
            value={value}
            name={inputName}
            onChange={handleOnChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">%</span>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <span className="mx-auto">{additionalInfoText}</span>
      </div>
    </div>
  );
};

export default MonthYearPercentInput;
