import React from "react";
import {Field, ErrorMessage} from "formik";

interface Input {
  name: string;
  label: string;
  type: string;
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >;
  placeholder: string;
}

const Input: React.FC<Input> = ({
  name,
  label,
  type,
  icon: Icon,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <label className="text-sm font-semibold text-ash" htmlFor={name}>
        {label}
      </label>
      <div className="flex relative">
        <Icon className="w-6 z-10 pl-1 text-center text-ash absolute inset-y-0 left-1 flex items-center h-full" />
        <Field
          type={type}
          id={name}
          name={name}
          autoComplete="off-autofill"
          className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-ash/30 placeholder:text-ash/30 outline-none focus:border-white bg-transparent autofill:bg-transparent text-sm text-ash"
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-sm text-red-500"
      />
    </div>
  );
};

export default Input;
