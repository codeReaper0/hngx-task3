import React, {useState} from "react";
import {Field, ErrorMessage} from "formik";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";

interface Input {
  name: string;
  label: string;
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >;
  placeholder: string;
}

const InputPassword: React.FC<Input> = ({
  name,
  label,
  icon: Icon,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full">
      <label className="text-sm font-semibold text-ash" htmlFor={name}>
        {label}
      </label>
      <div className="flex relative">
        <Icon className="w-6 z-10 pl-1 text-center text-ash absolute inset-y-0 left-1 flex items-center h-full" />
        <Field
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          autoComplete="off-autofill"
          className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-ash/30 placeholder:text-ash/30 outline-none focus:border-white bg-transparent autofill:bg-transparent  text-sm text-ash"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute bottom-2 right-2 p-1 z-10 text-ash/60 hover:bg-white/10 rounded-full"
        >
          {showPassword ? (
            <EyeSlashIcon className="w-4 z-10 text-ash" />
          ) : (
            <EyeIcon className="w-4 z-10 text-ash" />
          )}
        </button>
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="text-sm text-red-500"
      />
    </div>
  );
};

export default InputPassword;
