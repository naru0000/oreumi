import useLang from "./Hook/useLang";
// 언어 변경 횟수 카운터 추가
import useCounter from "./Hook/useCounter";

export default function LangSelector() {
  const { languageData, currentLanguage, changeLanguage } = useLang();
  // 언어 변경 횟수 카운터 추가
  const { count, onIncrease, onReset, langState } = useCounter();

  return (
    <>
      <h2>{languageData.languageSelector}</h2>
      {/* 언어 변경 횟수 카운터 추가 */}
      <p>언어를 {count}번 변경하였습니다.</p>
      <p>영어: {langState.en}번</p>
      <p>한국어: {langState.ko}번</p>
      <p>일본어: {langState.ja}번</p>
      <button
        onClick={() => {
          changeLanguage("en");
          // 언어 변경 횟수 카운터 추가
          onIncrease("en");
        }}
        disabled={currentLanguage === "en"}
      >
        English
      </button>
      <button
        onClick={() => {
          changeLanguage("ko");
          // 언어 변경 횟수 카운터 추가
          onIncrease("ko");
        }}
        disabled={currentLanguage === "ko"}
      >
        한국어
      </button>
      <button
        onClick={() => {
          changeLanguage("ja");
          // 언어 변경 횟수 카운터 추가
          onIncrease("ja");
        }}
        disabled={currentLanguage === "ja"}
      >
        日本語
      </button>
      {/* 언어 변경 횟수 카운터 추가 */}
      <button
        onClick={() => {
          onReset();
        }}
      >
        카운터 리셋
      </button>
    </>
  );
}
