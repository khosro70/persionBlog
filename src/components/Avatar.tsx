import Image from "next/image";
import React from "react";
import { AvatarComponentProps } from "types/blogs";

const Avatar: React.FC<AvatarComponentProps> = ({
  src,
  width = 24,
  height = 24,
  // alt,
}) => {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={height}
      className="ml-2 rounded-full ring-1 ring-secondary-300"
      alt={`avatar`}
    />
  );
};

export default Avatar;
