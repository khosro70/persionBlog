export const setCookieOnReq = (cookies: {
  get: (name: string) => { name: string; value: string } | undefined;
}) => {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");
  const options = {
    method: "GET",
    credentials: "include" as RequestCredentials,
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value};${refreshToken?.name}=${refreshToken?.value}`,
    },
  };
  return options;
};
