/**die aktive Sprache bekommen */
export const activeLang = () => {
    let lang;
    if (window.navigator.language == "de-DE") {
      lang = "de"
    } else {
      lang = "en"
    }
    
    if (localStorage != undefined && (localStorage.getItem("lang") != undefined )) {
        lang = localStorage.getItem("lang")
    }
    return lang
}
/**Standartsprache ändern */
export const setLang = (lang: "de" | "en") => {
    if (localStorage != undefined) {
        localStorage.setItem("lang", lang)
    }
}