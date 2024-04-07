import styled from "styled-components";

const Button = styled.button`
  width: 160px;
  height: 39px;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const LoginButton = () => {
  return <Button>{"로그인 / 회원가입"}</Button>;
};
