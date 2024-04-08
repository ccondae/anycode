import { ENV } from "~/shared/environment";

export const DETAIL_ENDPOINT = {
  default: `${ENV.baseUrl}/api/question/detail`,
  finalDetail: (id: string) => {
    return `${DETAIL_ENDPOINT.default}/${id}`;
  },
};
export const DETAIL_KEY = {
  default: [`detail`],
  finalDetail: (id: string) => {
    return [...DETAIL_KEY.default, id];
  },
};
