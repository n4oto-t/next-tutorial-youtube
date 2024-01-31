import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // マウント時の動作を定義
    document.body.style.backgroundColor = "lightblue";
    // アンマウント時の動作を定義
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
