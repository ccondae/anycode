import styled from "styled-components";

import { Icon } from "~/shared/icons";

interface ReviewerProps {
  reviewerName: string;
}

const Item = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const Reviewer = ({ reviewerName }: ReviewerProps) => {
  return (
    <Item>
      <Icon.Crown />
      {reviewerName}
    </Item>
  );
};
