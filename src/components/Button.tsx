import React from "react";

type ButtonProps = {
  children: React.ReactNode; // محتوای داخل دکمه
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // تابع کلیک
  variant?: "primary" | "secondary" | "outline" | "danger"; // انواع دکمه
  className?: string; // کلاس‌های اضافی
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // سایر خصوصیات دکمه

const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
