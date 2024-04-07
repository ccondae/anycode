import { ChangeEvent, KeyboardEvent, MouseEvent, useCallback, useEffect, useState } from "react";
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
  background: linear-gradient(60deg, rgba(42, 39, 49, 1) 0%, rgba(137, 128, 155, 1) 35%, rgba(38, 20, 78, 1) 100%);
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
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.caption};
  }
  & > input {
    box-sizing: border-box;
    padding: 8px 16px;
    width: 100%;
    height: 40px;
    border-radius: 8px;
  }
  .wrap {
    box-sizing: border-box;
    padding: 8px 16px;
    width: 100%;
    min-height: 40px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white};

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    & > * {
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
    }

    & > input {
      min-width: 280px;
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.colors.black}20;
    }
  }
`;
const initialMarkdown = {
  purpose: "> 코드를 사용하려는 목적에 대해 알기쉽게 입력해주세요.",
  content: "> 작성된 코드의 질문을 입력해주세요.",
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

  const handleMarkDown = (str: string, name: WriteMarkdownType) => {
    setMarkDowns((p) => ({ ...p, [name]: str }));
  };
  const addSelectedCategory = () => {
    console.log(categories, category);
    if (!category) return;
    const val = category.trim();
    if (findCategory[val]) {
      categories.push(findCategory[val].name);
    } else {
      categories.push(val);
    }

    setCategories([...categories]);
  };
  const handleSelectedCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === "Enter" || e.key === " ") {
      addSelectedCategory();
      setCategory("");
    }
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const tmp = [...categories, category];
    const categoryIds: number[] = [];
    tmp.map((c) => {
      if (findCategory[c.toLocaleLowerCase()]) {
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

  const renderCategory = () => {
    return (
      <>
        {categories.map((category: string, idx: number) => {
          return (
            <button key={idx} onClick={() => deleteCategory(category)}>
              {category}
            </button>
          );
        })}
      </>
    );
  };

  useEffect(() => {
    if (Object.keys(findCategory).length == 0 && categoryData) {
      categoryData.map((category: CategoryType) => (findCategory[category.name.toLowerCase()] = category));
      setFindCategory({ ...findCategory });
    }
  }, [findCategory, categoryData]);

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
          <input
            name={"category"}
            placeholder={"질문하는 언어를 입력 후 엔터로 등록해주세요."}
            value={category}
            onChange={handleSelectedCategory}
            onKeyUp={handleKeyUp}
          />
        </div>
        <span className={"help"}>{"* 존재하지 않는 카테고리인 경우 등록이 제외 될 수 있습니다."}</span>
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
