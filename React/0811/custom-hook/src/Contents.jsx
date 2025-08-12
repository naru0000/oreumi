import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
import useLang from "./Hook/useLang";
import useToggle from "./Hook/useToggle";

export default function Contents() {
  const { languageData, currentLanguage } = useLang();
  const { languages } = useContext(LanguageContext);
  const [isToggled, toggle] = useToggle(false);

  const showBtn = currentLanguage !== "ko";
  const translation = languages.ko;

  return (
    <>
      {showBtn && <button onClick={toggle}>{isToggled ? "🌐 번역 숨기기" : "🌐 번역보기"}</button>}
      <h3>{languageData.title}</h3>
      {isToggled && showBtn && <h4>🌐 {translation.title}</h4>}

      <p>{languageData.greeting}</p>
      {isToggled && showBtn && <h4>🌐 {translation.greeting}</h4>}

      <p>{languageData.description}</p>
      {isToggled && showBtn && <h4>🌐 {translation.description}</h4>}
    </>
  );
}
