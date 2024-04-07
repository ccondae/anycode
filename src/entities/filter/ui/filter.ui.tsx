import { useState } from "react";
import styled from "styled-components";

const filterArr = ["Popular questions", "All questions", "Answered", "Wait to be answered"];

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const Li = styled.li`
  color: ${(props) => props.theme.colors.tabBar};
  cursor: pointer;
  &.active {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Filter = () => {
  const [select, setSelect] = useState("Popular questions");

  return (
    <Ul>
      {filterArr.map((item) => (
        <Li key={item} className={select === item ? "active" : ""} onClick={() => setSelect(item)}>
          {item}
        </Li>
      ))}
    </Ul>
  );
};
