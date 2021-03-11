import React from "react";
import { Col, FormControl } from "react-bootstrap";

interface Props {
  register: any;
  label: string;
  value?: number | string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
}

const InputContainer = ({
  value,
  name,
  label,
  //   required,
  //   disabled,
  type,
  register,
}: Props) => {
  return (
    <Col md={3}>
      <label>{label}</label>
      <FormControl
        type={type}
        name={name}
        ref={register}
        defaultValue={value}
      />
    </Col>
  );
};

export default InputContainer;
