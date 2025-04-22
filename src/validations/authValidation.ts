import * as yup from "yup";

export const SignUpFormSchema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام حداقل باید 5 رقم باشد")
      .max(30, "نام حداکثر باید 30 رقم باشد")
      .required("پر کردن این فیلد الزامی است"),
    email: yup
      .string()
      .email("ایمیل نامعتبر است")
      .required("پر کردن این فیلد الزامی است"),
    password: yup.string().required("پر کردن این فیلد الزامی است"),
  })
  .required();

export const SignInFormSchema = yup
  .object({
    email: yup
      .string()
      .email("ایمیل نامعتبر است")
      .required("پر کردن این فیلد الزامی است"),
    password: yup.string().required("پر کردن این فیلد الزامی است"),
  })
  .required();
