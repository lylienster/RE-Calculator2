import React from "react";
import SingleInput from "./SingleInput";
import { Form } from "./App";

interface Props {
  form: Form;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PropertyInfo = ({ form, handleOnChange, handleTextOnChange }: Props) => {
  const { askingPrice } = form;
  return (
    <div>
      <div className="input-group row py-1">
        <label className="col-md-2">Address</label>
        <div className="col-md-4">
          <div className="input-group">
            <input
              className={"form-control"}
              name={"address"}
              value={form.address}
              onChange={handleTextOnChange}
              type={"text"}
            />
          </div>
        </div>
      </div>
      <SingleInput
        label="Asking Price"
        inputName="askingPrice"
        inputValue={askingPrice}
        handleOnChange={handleOnChange}
        prefix={"$"}
      />
    </div>
  );
};

export default PropertyInfo;
