export const QUESTION_LIST_MOCK_DATA = {
  content: [
    {
      id: 1,
      title: "이거 왜 안되용 ㅠㅠ",
      content: "이거 왜 안되용 ㅠㅠ",
      createdAt: "2024-04-06T22:00:35",
      likeCount: 0,
      viewCount: 0,
      commentCount: 1,
      categories: [
        {
          id: 21,
          name: "Kotlin",
          count: 1,
        },
      ],
    },
  ],
  pageable: {
    pageNumber: 0,
    pageSize: 10,
    sort: {
      empty: true,
      unsorted: true,
      sorted: false,
    },
    offset: 0,
    paged: true,
    unpaged: false,
  },
  totalPages: 1,
  totalElements: 1,
  last: true,
  size: 10,
  number: 0,
  sort: {
    empty: true,
    unsorted: true,
    sorted: false,
  },
  numberOfElements: 1,
  first: true,
  empty: false,
};
