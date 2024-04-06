import { useToast } from "~/shared/common-ui/toast";

export const RootPage = () => {
  const { toast } = useToast();
  return (
    <div className="">
      {`
    "엄마 쟤 이름은 왜 '장미'에요?"
    "그건 저 아이의 엄마가 장미를 좋아하기 때문이란다."
    "그럼 제 이름은 왜 이래요?"
    "그래,르미아."
    `}
      <button
        onClick={() => {
          toast({ title: "hello world" });
        }}
      >
        온클릭
      </button>
    </div>
  );
};
