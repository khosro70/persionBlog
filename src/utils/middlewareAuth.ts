import { NextRequest } from "next/server";

export const middlewareAuth = async (request: NextRequest) => {
  const accessToken = request.cookies.get("accessToken");
  const refreshToken = request.cookies.get("refreshToken");
  const options = {
    method: "GET",
    credentials: "include" as RequestCredentials,
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
    },
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
    options
  );
  const data = await res.json();
  const user = data?.data?.user;
  return user;
};
