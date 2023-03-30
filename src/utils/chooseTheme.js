//zrob dokumentacje

/**
 * 
 * @param {boolean} DarkTheme - if true, returns dark theme, else returns light theme 
 * @returns {object} - object with theme colors
 * @example - const theme = ChooseTheme(true)
 */
function ChooseTheme(DarkTheme) {
    const themeColors = {
        light: {
            cardColor: "bg-white/75 shadow-lg",
            input: 'border-info placeholder:text-gray-500 focus:outline-info focus:border-info',
            checkbox: 'checkbox-info',
            textPrimary: "text-info",
            textSecondary: "text-black",
            badge: 'bg-info text-black',
            aside: 'bg-gray-300/75',
            todoColors: 'bg-gray-200 text-black'
        },
        dark: {
            cardColor: "bg-gray-700/[0.825]",
            checkbox: 'checkbox-success',
            input: 'bg-transparent border-success text-white focus:outline-success focus:border-success',
            textPrimary: "text-success",
            textSecondary: "text-white",
            badge: 'badge-success',
            aside: 'bg-black/75',
            todoColors: 'bg-gray-600/75 text-white'
        }
    }
    if (DarkTheme) return themeColors.dark
    return themeColors.light
}

export default ChooseTheme
