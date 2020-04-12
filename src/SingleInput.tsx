import React from "react";

interface Props {
  label: string;
  inputName: string;
  inputValue: number;
  additionalInfoText?: string;
  disabled?: boolean;
  prefix?: string;
  suffix?: string;
  required?: boolean;
  roundValue?: boolean;
  isNumberInput?: boolean;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SingleInput = ({
  label,
  inputName,
  inputValue,
  additionalInfoText,
  handleOnChange,
  disabled,
  prefix,
  suffix,
  required,
  roundValue = true,
  isNumberInput,
}: Props) => {
  let isInvalid = "";
  if (required && !inputValue) {
    isInvalid = "is-invalid";
  }

  let value = roundValue ? Math.ceil(inputValue) : inputValue;

  //   value = value && !isNaN(value) ? Number(value).toCurrency() : "";

  return (
    <div className="input-group row py-1 ">
      <label className="col-md-2">{label}</label>
      <div className="col-md-4">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">{prefix}</span>
          </div>
          <input
            className={"form-control " + isInvalid}
            name={inputName}
            value={value}
            onChange={handleOnChange}
            disabled={disabled}
            type={isNumberInput ? "number" : ""}
          />
          <div className="input-group-append">
            <span className="input-group-text">{suffix}</span>
          </div>
        </div>
      </div>
      <div className="col-md-2">{additionalInfoText}</div>
    </div>
  );
};

export default SingleInput;
