import { useRecoilState } from "recoil";
import styled from "styled-components";

import { categoryState } from "../model/question-list-filter.atom";
import { Category } from "../model/question-list-filter.type";

interface filterType {
  uiName: string;
  apiName: Category;
}

const filterArr: filterType[] = [
  {
    uiName: "Popular questions",
    apiName: "popular",
  },
  {
    uiName: "Answered",
    apiName: "answered",
  },
  {
    uiName: "All questions",
    apiName: "all",
  },
  {
    uiName: "Wait to be answered",
    apiName: "not-answered",
  },
];

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

export const QuestionListFilter = () => {
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <Ul>
      {filterArr.map((item) => {
        return (
          <Li
            key={item.uiName}
            className={category === item.apiName ? "active" : ""}
            onClick={() => setCategory(item.apiName)}
          >
            {item.uiName}
          </Li>
        );
      })}
    </Ul>
  );
};
