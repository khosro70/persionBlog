import Spinner from "@/components/Spinner";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-x-4">
      <span className="text-lg text-secondary-500">درحال بارگذاری پست ها</span>
      <Spinner />
    </div>
  );
}

export default loading;
