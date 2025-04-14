export type CategoryType = {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type PostType = {
  _id: string;
  title: string;
  slug: string;
  category: {
    _id: string;
    title: string;
    slug: string;
  };
  type: "free" | "premium";
  briefText: string;
  text: string;
  coverImage: string;
  readingTime: number;
  tags: [];
  author: {
    _id: string;
    name: string;
    avatar: string;
    avatarUrl: string;
  };
  related: postRelatedType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  coverImageUrl: string;
  id: string;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: postComment[];
  commentsCount: number;
};

export type postAnswerType = {
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  _id: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
    avatarUrl: string;
  };
};

export type postComment = {
  _id: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
    avatarUrl: string;
  };
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  answers: postAnswerType[];
};

export type postRelatedType = {
  _id: string;
  title: string;
  slug: string;
  category: {
    _id: string;
    title: string;
    slug: string;
  };
  coverImage: string;
  author: {
    _id: string;
    name: string;
    avatar: string;
    avatarUrl: string;
  };
  coverImageUrl: string;
  id: string;
};

export type AvatarComponentProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type AuthorPropsType = {
  name: string;
  avatarUrl: string;
};

export type PostInteractionType = {
  post: PostType;
};

export type SinglePostPropsType = {
  params: {
    postSlug: string;
  };
};
