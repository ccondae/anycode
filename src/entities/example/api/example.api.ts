import { UseSuspenseQueryResult, useSuspenseQuery } from "@tanstack/react-query";

export const useExampleQuery = (): UseSuspenseQueryResult<{ example: string }, Error> => {
  return useSuspenseQuery<{ example: string }>({
    queryKey: ["sky"],
    queryFn: async () => {
      return { example: "helloworld" };
    },
  });
};
