import React from "react";
import NumberInput from "./NumberInput";
import { Col, FormControl } from "react-bootstrap";

interface Props {
  label: string;
  value: number | string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputContainer = ({
  value,
  name,
  label,
  required,
  onChange,
  disabled,
  type,
}: Props) => {
  return (
    <Col md={3}>
      <label>{label}</label>
      {type === "text" ? (
        <FormControl
          value={value || ""}
          onChange={onChange}
          name={name}
          type="text"
        />
      ) : (
        <NumberInput
          value={value as number}
          onChange={onChange || (() => {})}
          name={name || ""}
          required={required}
          disabled={disabled}
        />
      )}
    </Col>
  );
};

export default InputContainer;
