export type QuestionType = {
  title: string;
  language?: string;
  purpose: string;
  content: string;
};

export type RegisteredQuestionType = QuestionType & {
  id: number;
  createdAt: Date;
  likeCount: number;
  viewCount: number;
  categories: string[];
  comments: string[];
};
