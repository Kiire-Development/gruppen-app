/**das aktive Theme bekommen */
export const activeTheme = () => {
    let theme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = "dark"
    } else {
      theme = "light"
    }
    
    if (localStorage != undefined && (localStorage.getItem("theme") != undefined || null)) {
        theme = localStorage.getItem("theme")
    }
    return theme
}
/**Standartheme ändern */
export const setTheme = (theme: "dark" | "light") => {
    if (localStorage != undefined) {
        localStorage.setItem("theme", theme)
    }
}