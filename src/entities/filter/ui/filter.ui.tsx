import { useState } from "react";
import styled from "styled-components";

interface LiProps {
  isActive: boolean;
}

const filterArr = ["Popular questions", "All questions", "Answered", "Wait to be answered"];

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Li = styled.li<LiProps>`
  color: ${(props) => (props.isActive ? props.theme.colors.white : props.theme.colors.tabBar)};
  cursor: pointer;
`;

export const Filter = () => {
  const [select, setSelect] = useState("Popular questions");

  return (
    <Ul>
      {filterArr.map((item) => (
        <Li key={item} isActive={select === item} onClick={() => setSelect(item)}>
          {item}
        </Li>
      ))}
    </Ul>
  );
};
