import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

export default function useLang() {
  return useContext(LanguageContext);
}
