export interface CommentUpload {
  content: string;
  questionId: string | number;
}

export interface CommentUploadResponse {
  createdAt: string;
  id: number;
  content: string;
  likeCount: number;
}
