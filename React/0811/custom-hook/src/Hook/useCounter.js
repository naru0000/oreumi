import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const [langState, setLangState] = useState({ en: 0, ko: 0, ja: 0 });

  const onIncrease = (language) => {
    setCount((prev) => prev + 1);

    setLangState((prev) => {
      return {
        en: (language = "en" ? prev.en + 1 : prev.en),
        ko: (language = "ko" ? prev.ko + 1 : prev.ko),
        ja: (language = "ja" ? prev.ja + 1 : prev.ja),
      };
    });
  };

  const onReset = () => {
    setCount(0);
    setLangState({ en: 0, ko: 0, ja: 0 });
  };

  return {
    count,
    onIncrease,
    onReset,
    langState,
  };
};

export default useCounter;
