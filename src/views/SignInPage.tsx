"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import RHFTextField from "@/components/RHFTextField";
import { SingInFormValuesType } from "@/types/auth";
import { SignInFormSchema } from "@/validations/authValidation";
import { useAuth } from "@/context/AuthContext";

function SignInPage() {
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SingInFormValuesType>({
    resolver: yupResolver(SignInFormSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values: SingInFormValuesType) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="mb-6 text-xl font-bold text-center text-secondary-500">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
      <Link href="/signup" className="mt-6 text-center text-secondary-500">
        ثبت نام
      </Link>
    </div>
  );
}

export default SignInPage;
