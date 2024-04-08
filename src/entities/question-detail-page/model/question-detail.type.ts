export interface QuestionDetailType {
  id: number;
  title: string;
  githubUrl: string;
  content: string;
  code: string;
  purpose: string;
  likeCount: number;
  viewCount: number;
  createdAt: string;
  categories: Category[];
  comments: Comment[];
}
export interface Category {
  id: number;
  name: string;
  count: number;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  likeCount: number;
}
export interface ProfileHeaderProps {
  userProfile: {
    userName: string;
    questionCount: number;
    answerCount: number;
  };
  viewCount: number;
  commnetCount: number;
  likeCount: number;
}
