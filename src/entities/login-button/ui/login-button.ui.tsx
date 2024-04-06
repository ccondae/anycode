import styled from "styled-components";

const Button = styled.button`
  width: 160px;
  height: 39px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.body2};
`;

export const LoginButton = () => {
  return <Button>로그인 / 회원가입</Button>;
};
