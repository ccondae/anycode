import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const usePageNation = (totalPages: number, maxPages: number) => {
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const [pages, setPages] = useState<number[]>([1]);
  const isNoPrev = pages[0] === 1;
  const isNoNext = pages[pages.length - 1] === totalPages;

  useEffect(() => {
    const startPage = Math.floor((currentPage - 1) / maxPages) * maxPages + 1;
    const endPage = Math.min(startPage + maxPages - 1, totalPages);
    const newPages = [];

    for (let i = startPage; i <= endPage; i++) {
      newPages.push(i);
    }

    setPages(newPages);
  }, [searchParams, totalPages]);

  return {
    currentPage: currentPage,
    pages,

    isNoPrev,
    isNoNext,
  };
};
