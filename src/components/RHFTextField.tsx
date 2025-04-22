/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface RHFTextFieldProps {
  type?: string;
  label: string;
  name: string;
  dir?: "ltr" | "rtl";
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  isRequired?: boolean;
  validationSchema?: Record<string, any>;
  [key: string]: any;
}

const RHFTextField: React.FC<RHFTextFieldProps> = ({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  ...rest
}) => {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="block mb-2 text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {hasError && typeof errors[name]?.message === "string" && (
        <span className="block mt-2 text-xs text-red-600">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default RHFTextField;
