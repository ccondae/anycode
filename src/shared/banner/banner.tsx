import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import bannerImg from "~/shared/icons/main/banner.png";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  height: 410px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 100%;
`;

export const Banner = () => {
  const location = useLocation();
  const isWritePage = location.pathname.includes("/question");
  return (
    <>
      {!isWritePage && (
        <Wrapper>
          <Img src={bannerImg} alt="banner" />
        </Wrapper>
      )}
    </>
  );
};
