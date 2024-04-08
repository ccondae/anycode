import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useToast } from "../common-ui/toast";
import { ROUTE } from "../route";
import { delay } from "../utils";

export const useReumi = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const { toast } = useToast();

  const goToReumi = async () => {
    if (isClicked) return;
    setIsClicked(true);
    toast({ title: "대신귀 여운르 미를 보여드 리갰습 니다" });
    await delay(3000);
    setIsClicked(false);
    navigate(ROUTE.reumi);
  };

  return { goToReumi };
};
