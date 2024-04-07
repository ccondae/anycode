export interface CommentUpload {
  content: string;
  questionId: string | number;
}

export interface CommentUploadResponse {
  createAt: string;
  id: number;
  content: string;
  likeCount: number;
}
