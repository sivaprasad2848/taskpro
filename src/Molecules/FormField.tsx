import React from "react";
// import Label from "../Atoms/Label";
import Input from "../Atoms/Input";

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormField: React.FC<FormFieldProps> = ({ label, name, type, value, onChange }) => {
  return (
    <div className="mb-4 bg-white">
      {/* <Label text={label} htmlFor={name} /> */}
      <Input type={type} name={name} placeholder={label} value={value} onChange={onChange}/>
    </div>
  );
};

export default FormField;
