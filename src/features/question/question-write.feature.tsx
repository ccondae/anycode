import { ChangeEvent, KeyboardEvent, MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { useCategoryAllQuery } from "~/entities/question/api/use-category-all.query";
import { useQuestionWriteMutation } from "~/entities/question/api/use-question-write.mutataion";
import { CategoryType } from "~/entities/question/model/question.type";
import { QuestionWriteEditor } from "~/entities/question/ui";

const QuestionContainer = styled.div`
  margin: 20px 0;
  padding: 40px 20px;
  width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background: rgb(42, 39, 49);
  background: linear-gradient(60deg, rgba(42, 39, 49, 1) 0%, rgba(137, 128, 155, 1) 35%, rgba(42, 39, 49, 1) 100%);
  border-radius: 28px;
  & > button {
    cursor: pointer;
    padding: 12px 56px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.action};
    font-size: ${({ theme }) => theme.fontSize.button};
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 12px #00000040;
  }
`;

const TextInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  & > label {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.headline6};
  }
  & > .help {
    color: ${({ theme }) => theme.colors.white}60;
    font-size: ${({ theme }) => theme.fontSize.caption};
  }
  & > input {
    box-sizing: border-box;
    padding: 8px 16px;
    width: 100%;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.caption};
      color: ${({ theme }) => theme.colors.gray};
    }
  }
  .wrap {
    box-sizing: border-box;
    width: 100%;
    min-height: 40px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    & > button,
    & > div > input {
      padding: 2px 12px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 4px;
      border: none;
      line-height: 18px;
    }
    & > button {
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      border: none;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.black}40;
      &.exist {
        background-color: ${({ theme }) => theme.colors.main}80;
      }
    }
    & > div > input {
      height: 40px;
      width: 100%;
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.black};
      border-radius: 10px;
      &::placeholder {
        font-size: ${({ theme }) => theme.fontSize.caption};
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;
const DropInputBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const DropBox = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  padding: 8px 16px;
  width: 100%;
  min-height: 80px;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 5px ${({ theme }) => theme.colors.black}20;
`;

const initialMarkdown = {
  purpose: '<span style="color:#D9D9D9; font-size:12px;">코드를 사용하려는 목적에 대해 알기쉽게 입력해주세요.</span>',
  content: '<span style="color:#D9D9D9; font-size:12px;">작성된 코드의 질문을 입력해주세요.</span>',
  code: `
\`\`\`js
const solution = () => {
  let ans = "";
  return ans;
}
console.log(solution());
\`\`\`
  `,
};

export type WriteMarkdownType = "purpose" | "content" | "code";

const QuestionWrite = () => {
  const { data: categoryData } = useCategoryAllQuery();
  const { mutate } = useQuestionWriteMutation();
  const navigator = useNavigate();
  const [title, setTitle] = useState("");
  const [githubUrl, setGithubUrl] = useState("https://github.com/");
  const [markdowns, setMarkDowns] = useState(initialMarkdown);
  const [findCategory, setFindCategory] = useState<{ [key: string]: CategoryType }>({});
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const dropRef = useRef<HTMLDivElement | null>(null);

  const handleMarkDown = (str: string, name: WriteMarkdownType) => {
    setMarkDowns((p) => ({ ...p, [name]: str }));
  };
  const addSelectedCategory = (tmpCategory = "") => {
    if (!tmpCategory) return;
    const val = tmpCategory.trim();
    if (findCategory[val]) categories.push(findCategory[val].name);
    else categories.push(val);

    setCategory("");
    setCategories([...categories]);
  };

  const handleSelectedCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      addSelectedCategory(category);
      setCategory("");
    }
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const tmp = [...categories, category];
    const categoryIds: number[] = [];
    tmp.map((c) => {
      c = c.toLocaleLowerCase();
      if (findCategory[c]) {
        console.log(findCategory[c]);
        categoryIds.push(findCategory[c].id);
      }
    });
    // title.value는 예약어가 있는 것 같습니다. string이 아니라고 하네요.
    const data = {
      title,
      categoryIds,
      githubUrl,
      ...markdowns,
    };
    mutate(data, {
      onError: (error) => {
        console.log(error);
      },
      onSettled: () => {},
      onSuccess: (result) => {
        if (result.id) navigator(`/question/${result.id}`);
      },
    });
  };

  const deleteCategory = useCallback((category: string) => {
    setCategories((prev) => [...prev.filter((c) => c !== category)]);
  }, []);

  useEffect(() => {
    if (Object.keys(findCategory).length == 0 && categoryData) {
      categoryData.map((category: CategoryType) => (findCategory[category.name.toLowerCase()] = category));
      setFindCategory({ ...findCategory });
    }
  }, [findCategory, categoryData]);

  useEffect(() => {
    const handleOutsideClick = (event: globalThis.MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(event.target as Node)) {
        setCategory("");
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const renderCategory = () => {
    return (
      <>
        {categories.map((category: string, idx: number) => {
          return (
            <button
              className={findCategory[category.toLocaleLowerCase()] ? "exist" : ""}
              key={idx}
              onClick={() => deleteCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </>
    );
  };

  const renderDropBox = () => {
    return (
      <DropBox className={"wrap"}>
        {Object.entries(findCategory).map(([key, categoryData], idx: number) => {
          if (categories.includes(categoryData.name)) return null;
          if (!key.startsWith(category)) return null;
          return (
            <button key={idx} onClick={() => addSelectedCategory(key)}>
              {categoryData.name}
            </button>
          );
        })}
      </DropBox>
    );
  };

  return (
    <QuestionContainer>
      <TextInputContainer>
        <label>{"제목"}</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"질문의 제목을 알기 쉽게 입력해주세요."}
        />
      </TextInputContainer>
      <TextInputContainer>
        <label>{"언어 선택하기"}</label>
        <div className={"wrap"}>
          {renderCategory()}
          <DropInputBox ref={dropRef}>
            <input
              name={"category"}
              placeholder={"질문하는 언어를 입력 후 엔터로 등록해주세요."}
              value={category}
              onChange={handleSelectedCategory}
              onKeyUp={handleKeyUp}
            />
            {category && renderDropBox()}
          </DropInputBox>
        </div>
        <span className={"help"}>{"* 정확한 언어의 이름이 아니면 등록에서 제외되니 유의해주세요."}</span>
      </TextInputContainer>
      <QuestionWriteEditor
        title={"목적"}
        type={"purpose"}
        markdown={markdowns.purpose}
        setMarkdown={handleMarkDown}
        hasFakePlaceholder
      />
      <QuestionWriteEditor
        title={"질문"}
        type={"content"}
        markdown={markdowns.content}
        setMarkdown={handleMarkDown}
        hasFakePlaceholder
      />
      <QuestionWriteEditor title={"코드"} type={"purpose"} markdown={markdowns.code} setMarkdown={handleMarkDown} />
      <TextInputContainer>
        <label>{"Github link"}</label>
        <input value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
      </TextInputContainer>
      <button onClick={handleSubmit}>{"등록하기"}</button>
    </QuestionContainer>
  );
};

export default QuestionWrite;
