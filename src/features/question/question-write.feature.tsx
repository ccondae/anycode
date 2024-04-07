import { FormEvent, useEffect, useState } from "react";
import { styled } from "styled-components";

import { QUESTION_WRTIE_ENDPOINT } from "~/entities/question/api/question-write.key";
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
  & > input {
    box-sizing: border-box;
    padding: 8px 16px;
    width: 100%;
    height: 40px;
    border-radius: 8px;
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
  const { data: categories } = useCategoryAllQuery();
  const { mutate } = useQuestionWriteMutation();

  const [markdowns, setMarkDowns] = useState(initialMarkdown);
  const [findCategory, setFindCategory] = useState<{ [key: string]: CategoryType }>({});

  const handleMarkDown = (str: string, name: WriteMarkdownType) => {
    setMarkDowns((p) => ({ ...p, [name]: str }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { titleee, githubUrl } = e.currentTarget;

    // title.value는 예약어가 있는 것 같습니다. string이 아니라고 하네요.
    const data = {
      title: titleee.value || "",
      categoryIds: [1],
      githubUrl: githubUrl.value || "",
      ...markdowns,
    };
    mutate(data, {
      onError: (error) => {
        console.log(error);
      },
      onSettled: () => {},
      onSuccess: () => {},
    });
    return;
    try {
      const response = await fetch(QUESTION_WRTIE_ENDPOINT.default, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("");
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (Object.keys(findCategory).length == 0 && categories) {
      categories.map((category: CategoryType) => (findCategory[category.name] = category));
      setFindCategory({ ...findCategory });
    }
  }, [findCategory, categories]);

  return (
    <form action="" onSubmit={handleSubmit}>
      <QuestionContainer>
        <TextInputContainer>
          <label>{"제목"}</label>
          <input name={"titleee"} type={"text"} placeholder={"질문의 제목을 알기 쉽게 입력해주세요."} />
        </TextInputContainer>
        <TextInputContainer>
          <label>{"언어 선택하기"}</label>
          <input name={"category"} placeholder={"질문하는 코드의 언어를 써주세요."} />
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
          <input name={"githubUrl"} defaultValue={"https://github.com/"} />
        </TextInputContainer>
        <button>{"등록하기"}</button>
      </QuestionContainer>
    </form>
  );
};

export default QuestionWrite;
