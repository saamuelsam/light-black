const inputContainer = document.querySelector('input')
const rootElemnt = document.documentElement

window.onload = getThemeFromLocalStorage




const lightTheme = {
    '--background-color': '#FFF',
    '--text-color': '#1A1A1A',
    '--button-background-color': '#9B8AFB',
}

const darkTheme = {
    '--background-color': '#1A1A1A',
    '--text-color': '#6200f5',
    '--button-background-color': '#FFF',
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme) {
    for (let [prop, value] of Object.entries(theme)) {
        changeProperty(prop, value)
    
    }
    saveThemeToLocalStorage(theme)
}
  function changeProperty(prop, value) {
    rootElemnt.style.setProperty(prop, value)
  }


    function saveThemeToLocalStorage(theme) {
        localStorage.setItem('theme', JSON.stringify(theme))
    } 

        function getThemeFromLocalStorage() {
            const theme = JSON.parse(localStorage.getItem('theme'))
            if (isThemeEqual(theme, darkTheme)) inputContainer.checked = true
            changeTheme(theme)
           

        } 

        function isThemeEqual(firstTheme, secondTheme) {
            for (let prop in firstTheme) {
              if (firstTheme[prop] != secondTheme[prop]) return false
            } 
            return true
        }