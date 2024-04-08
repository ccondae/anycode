import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  height: 100%;
  width: 0;
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);

  cursor: pointer;
  width: 182px;
  height: 44.06px;
  background-color: ${(props) => props.theme.colors.action};
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.body1};
  font-weight: 600;
`;

export const QuestionButton = () => {
  const location = useLocation();
  const isWritePage = location.pathname === "/question/write";
  const navigator = useNavigate();
  return <Wrap> {!isWritePage && <Button onClick={() => navigator("/question/write")}>질문하기</Button>}</Wrap>;
};
