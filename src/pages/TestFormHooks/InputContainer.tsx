import React from "react";
import NumberFormat from "react-number-format";
import { Col, FormControl } from "react-bootstrap";

interface Props {
  register: any;
  label: string;
  value?: number | string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  prefix?: string;
}

const InputContainer = ({
  value,
  name,
  label,
  //   required,
  //   disabled,
  type,
  register,
  prefix,
}: Props) => {
  return (
    <Col md={3}>
      <label>{label}</label>
      {type === "number" ? (
        <NumberFormat
          className="form-control"
          isNumericString={true}
          thousandSeparator={true}
          prefix={prefix}
          defaultValue={value}
          ref={register}
        />
      ) : (
        <FormControl
          type={type}
          name={name}
          ref={register}
          defaultValue={value}
        />
      )}
    </Col>
  );
};

export default InputContainer;
