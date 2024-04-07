import { Link } from "react-router-dom";
import styled from "styled-components";

import { usePageNation } from "~/shared/hooks";

const PageNationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
const PageNationItem = styled(Link)<{ $isCurrent: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.headline6};
  color: ${({ theme, $isCurrent }) => ($isCurrent ? theme.colors.white : theme.colors.gray)};
`;

interface IPageNationProps {
  page: number;
}

export const PageNation = ({ page }: IPageNationProps) => {
  const { currentPage, pages, isNoPrev, isNoNext } = usePageNation(page, 5);

  return (
    <PageNationContainer>
      {!isNoPrev && <Link to={`?page=${pages[0] - 1}`}>{"<"}</Link>}
      {pages.map((page) => (
        <PageNationItem key={page} $isCurrent={currentPage === page} to={`?page=${page}`}>
          {page}
        </PageNationItem>
      ))}
      {!isNoNext && <Link to={`?page=${pages[pages.length - 1] + 1}`}>{">"}</Link>}
    </PageNationContainer>
  );
};
