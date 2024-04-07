const DEFAULT_KEY = ["comment"];

export const COMMENT_QUERY_KEY = {
  default: DEFAULT_KEY,
  upload: [DEFAULT_KEY, `${DEFAULT_KEY}-upload`],
  recommend: [DEFAULT_KEY, `${DEFAULT_KEY}-upload`],
} as const;
