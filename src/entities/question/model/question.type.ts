export type QuestionWriteType = {
  title: string;
  githubUrl: string;
  content: string;
  code: string;
  categoryIds?: number[];
  purpose: string;
};

export type CategoryType = {
  id: number;
  name: string;
  count: number;
};

export type QuestionWriteResultType = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  categories: CategoryType[];
};

export type RegisteredQuestionType = QuestionWriteType & {
  id: number;
  createdAt: Date;
  likeCount: number;
  viewCount: number;
  categories: string[];
  comments: string[];
};
