export interface QuestionListType {
  content: QuestionListContent[];
  pageable: QuestionListPageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: QuestionListSort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface QuestionListContent {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  likeCount: number;
  viewCount: number;
  commentCount: number;
  categories: {
    id: number;
    name: string;
    count: number;
  }[];
}

interface QuestionListPageable {
  pageNumber: number;
  pageSize: number;
  sort: QuestionListSort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface QuestionListSort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
