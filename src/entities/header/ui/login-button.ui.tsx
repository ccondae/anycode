import styled from "styled-components";

import { useReumi } from "~/shared/hooks";

const Button = styled.button`
  width: 160px;
  height: 39px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.body2};
`;

export const LoginButton = () => {
  const { goToReumi } = useReumi();
  return <Button onClick={goToReumi}>로그인 / 회원가입</Button>;
};

// entities는 UI를 기준으로 정의하는게 아니라 데이터를 기준으로 정의해야할것같아요
// login은 header에 관심사가 있는게 아니라 auth 라는 관점에서 보는게 적절할 것 같습니다.
// login 기능이 header에 종속적이게 되면 역으로 봤을 때 헤더가 아닌 다른 곳에선 login을 할 수 없다는 맥락처럼도 읽혀요!
// serach-input도 마찬가지입니다.
