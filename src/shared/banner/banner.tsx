import { styled } from "styled-components";

import bannerImg from "~/shared/icons/main/banner.png";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  height: 410px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Banner = () => {
  return (
    <Wrapper>
      <Img src={bannerImg} alt="banner" />
    </Wrapper>
  );
};
