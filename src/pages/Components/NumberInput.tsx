import React from "react";
import { FormControl } from "react-bootstrap";

interface Props {
  value: number;
  name: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({
  value,
  name,
  required = false,
  onChange,
  disabled,
}: Props) => {
  return (
    <FormControl
      value={Number.isNaN(value) ? "" : value}
      type="number"
      onChange={onChange}
      name={name}
      //isValid={required && value ? true : false}
      isInvalid={
        required && (value === undefined || isNaN(parseInt(value.toString())))
          ? true
          : false
      }
      disabled={disabled}
    />
  );
};

export default NumberInput;
