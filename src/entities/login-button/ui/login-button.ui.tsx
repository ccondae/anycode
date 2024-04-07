import styled from "styled-components";

import { useReumi } from "~/shared/hooks";

const Button = styled.button`
  width: 160px;
  height: 39px;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export const LoginButton = () => {
  const { goToReumi } = useReumi();
  return <Button onClick={goToReumi}>{"로그인 / 회원가입"}</Button>;
};
