import Avatar from "@/components/Avatar";
import React from "react";
import { AuthorPropsType } from "types/blogs";

const Author: React.FC<AuthorPropsType> = ({ name, avatarUrl }) => {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} />
      <span className="text-sm text-secondary-500">{name}</span>
    </div>
  );
};

export default Author;
