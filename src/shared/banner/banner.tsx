import { styled } from "styled-components";

const Warpper = styled.div`
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
  return (
    <Warpper>
      <Img src="src/shared/icons/main/banner.png" alt="" />
    </Warpper>
  );
};
