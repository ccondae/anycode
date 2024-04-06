import { Banner } from "src/shared/banner/index";
import { Header } from "src/widgets/header/index";
import { Top } from "~/widgets/Top";

export const RootPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Top />
    </>
  );
};
