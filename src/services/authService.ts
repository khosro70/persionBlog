import http from "./httpService";
import { SingInFormValuesType, SingUpFormValuesType } from "@/types/auth";

export async function signupApi(data: SingUpFormValuesType) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function signinApi(data: SingInFormValuesType) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
