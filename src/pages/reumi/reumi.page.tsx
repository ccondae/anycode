import { useState } from "react";
import styled from "styled-components";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { ASSET_REUMI } from "~/shared/asset";
import { Banner } from "~/shared/banner";
import { Header } from "~/shared/common-ui";

const REUMI_JOOJUP_LIST = [
  "르미씨 예민한 질문일 수 도 있지만 너무 궁금해서 물어봅니다. \n르미씨는 천국에서 쫓겨난 건가요 자발적으로 내려온 건가요 \n아님 추락 사고 였나요?",
  "르미야 그거 알아? 사람이 너무 대단한걸 보면 단기 기억 상실증에 걸린대..르미야 그거 알아? 사람이 너무 대단한걸 보면 단기 기억 상실증에 걸린대..르미야 그거 알아? 사람이 너무 대단한걸 보면 단기 기억 상실증에 걸린대..르미야 그거 알아? 사람이 너무 대단한걸 보면 단기 기억 상실증에 걸린대..르미야 그거 알아? 사람이 너무 대단한걸 보면 단기 기억 상실증에 걸린대..르미야 그거 알아? 사람이 너무 대단한걸 보면 단기 기억 상실증에 걸린대..르미야 그거 알아? 사람이 너무 대단한걸 보면 단기 기억 상실증에 걸린대..르미야 그거 알아? 사람이 너무 대단한걸 보면 단기 기억 상실증에 걸린대..",
  "르미랑 동시대에 살아가는 나란 인간. 참 성공했다.",
  "르미야 시간 나면 치과에서 알바해 너만 보면 입이 안 다물어지니까",
  "봄이 사람으로 태어난다면.. 어쩌면 그 사람은 바로 르미가 아닐까?",
  '산타가 나에게 물었다. "얘야, 어떤 선물을 갖고 싶니?" 나는 웃으며 말했다.\n"100억이요!" 그러자 산타는 "좀 더 특별한건 없니?" 라고 되물었다.\n나는 대답했다. "... 르미를 그만 사랑하는 방법이요.." \n그러자 산타는 미소지으며 말했다. "계좌번호좀 불러줄래?"',
  '어느 겨울날 내가 아침에 버스에 올라타서\n"두명이요"하고 교통카드를 찍자\n아저씨가 의아해하면서\n너 혼자 탔는데 왜 두명 몫을 찍냐고 묻는거야\n그래서 난 이렇게 말했지\n"내 가슴 속에는 르미라는 한 사람이 더있거든요.."\n추운 아침이었지만 나의 뜨거운 가슴으로 버스안을 훈훈하게 데웠던 순간이었다',
  "짜장면한테 르미 음악을 들려 줬더니 짜장면이 저절로 비벼졌습니다.",
  "르미는 유모차입니다. 나를 애태우니까.",
  "르미 승마장 출입금지당했어요... 왜인지 알아요?  르미 외모 보면 말이 안 나와서...",
];

const generateRandomJoojup = () => {
  return REUMI_JOOJUP_LIST[Math.floor(Math.random() * 9)];
};

const reumeList = Object.values(ASSET_REUMI);

export const ReumiPage = () => {
  const [force, forceUpdate] = useState(0);
  force;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DialogPrimitive.Root>
        <Header />
        <Banner />
        <div style={{ marginTop: "50px" }}></div>

        <h1 style={{ textAlign: "center", fontSize: "30px" }}>안녕하 새요르 미의 팬패이 지애오 신것 을 환영해 요</h1>
        <div style={{ marginTop: "32px" }}></div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <span>🔥 각 포스트잇을 클릭하면 르미에 대한 Secret 정보가 등장해요! 🔥</span>
          <span>🎉 anycode의 디자이너 르미의 자기소개가 담겨있어요 🎉</span>
        </div>
        <div style={{ marginTop: "100px" }}></div>

        <ReumiContainer>
          {reumeList.map((postit) => (
            <DialogPrimitive.Trigger key={postit.src} asChild onClick={() => forceUpdate((s) => s + 1)}>
              <div style={{ width: "400px", height: "400px", cursor: "pointer" }}>
                <img src={postit.src} alt={postit.alt} width={"400px"} />
              </div>
            </DialogPrimitive.Trigger>
          ))}
        </ReumiContainer>

        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay
            style={{ position: "fixed", inset: "0px", zIndex: 1, backgroundColor: "rgba(44, 41, 50, 0.60)" }}
          />
          <DialogPrimitive.Content
            style={{
              position: "fixed",
              left: "50%",
              bottom: "50%",
              zIndex: 5,
              backgroundColor: "white",
              width: "100%",
              maxWidth: "400px",
              minHeight: "300px",
              transform: "translate(-50%)",
              display: "flex",
              justifyContent: "center",
              padding: "16px",
              borderRadius: "10px",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <DialogPrimitive.Title style={{ color: "black" }}>르미, 나의 빛</DialogPrimitive.Title>
            <DialogPrimitive.Description
              style={{ color: "black", flexGrow: "1", marginTop: "16px", lineHeight: "200%" }}
            >
              {generateRandomJoojup()}
            </DialogPrimitive.Description>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </div>
  );
};
const ReumiContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;
