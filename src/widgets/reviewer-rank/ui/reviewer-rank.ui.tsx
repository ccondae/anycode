import styled from "styled-components";

import { Reviewer } from "~/entities/reviewer";
import { Sidebar } from "~/entities/sidebar";

import { mockData } from "../model/reviewer-rank.model";

const ReviewerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`;

export const ReviewerRank = () => {
  const listElements = mockData.map(({ id, username }) => <Reviewer key={id} reviewerName={username} />);

  return (
    <Sidebar title="리뷰어 랭킹">
      <ReviewerList>{listElements}</ReviewerList>
    </Sidebar>
  );
};
