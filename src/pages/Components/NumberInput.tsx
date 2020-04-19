import React from "react";
import { FormControl } from "react-bootstrap";

interface Props {
  value: number;
  name: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput = ({ value, name, required = false, onChange }: Props) => {
  return (
    <FormControl
      value={Number.isNaN(value) ? "" : value}
      type="number"
      onChange={onChange}
      name={name}
      //isValid={required && value ? true : false}
      isInvalid={required && !value ? true : false}
    />
  );
};

export default NumberInput;
