import { ENV } from "~/shared/environment";

export const CATEGORY_ENDPOINT = {
  default: `${ENV.baseUrl}/api/category`,
  popular: `${ENV.baseUrl}/api/category/popular`,
  findAll: `${ENV.baseUrl}/api/category/find-all`,
};

export const CATEGORY_KEY = {
  default: [`category`],
  popular: [`category-popular`],
  findAll: [`category-find-all`],
};
