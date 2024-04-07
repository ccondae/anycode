import { useQuery } from "@tanstack/react-query";

import { Header } from "~/widgets/header";

export const RootPage = () => {
  const page = useQuery({
    queryKey: ["fds"],
    queryFn: async () => {
      const response = await fetch("/api/question/page/popular?size=10&page=0", {
        method: "POST",
      });
      const data = await response.json();
      console.log(response);
      return data;
    },
  });
  console.log(page.data);
  return (
    <>
      <Header />
    </>
  );
};
