import i18next from "i18next"
import {initReactI18next} from "react-i18next"

// @ts-ignore
import common_en from "./en/common.json"
// @ts-ignore
import common_es from "./es/common.json"



export function initializeI18next(): void {
  i18next.use(initReactI18next).init({
    debug: true,
    interpolation: { escapeValue: false },
    react: {
      // https://react.i18next.com/latest/trans-component#trans-props
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "b", "i", "ul", "ol", "li"],
    },
    resources: {
      en: {
        common: common_en,
      },
      es: {
        common: common_es,
      },
    },
    lng: "en",
    fallbackLng: "en",
  })
}
