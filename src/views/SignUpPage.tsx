"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import RHFTextField from "@/components/RHFTextField";
import { SignUpFormSchema } from "@/validations/authValidation";
import { SingUpFormValuesType } from "@/types/auth";
import { useAuth } from "@/context/AuthContext";

function SignUpPage() {
  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingUpFormValuesType>({
    resolver: yupResolver(SignUpFormSchema),
    mode: "onTouched",
  });

  // با ثبت نام اتوماتیک توکن ها ست می شه
  const onSubmit = async (values: SingUpFormValuesType) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="mb-6 text-xl font-bold text-center text-secondary-500">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          name="name"
          label="نام و نام خانوادگی"
          register={register}
          isRequired={true}
          errors={errors}
        />
        <RHFTextField
          name="email"
          label="ایمیل"
          register={register}
          dir="ltr"
          isRequired={true}
          errors={errors}
        />
        <RHFTextField
          name="password"
          label="رمز عبور"
          register={register}
          type="password"
          dir="ltr"
          isRequired={true}
          errors={errors}
        />
        <div>
          {isSubmitting ? (
            <Loading />
          ) : (
            <Button type="submit" variant="primary" className="w-full">
              تایید
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
