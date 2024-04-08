import styled from "styled-components";

import { Icon } from "~/shared/icons";

interface ReviewerProps {
  reviewerName: string;
  url: string;
}

const Item = styled.a`
  width: 100%;
  height: 21px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;

export const Reviewer = ({ reviewerName, url }: ReviewerProps) => {
  return (
    <Item href={url} target="_blank">
      <Icon.Crown />
      {reviewerName}
    </Item>
  );
};
