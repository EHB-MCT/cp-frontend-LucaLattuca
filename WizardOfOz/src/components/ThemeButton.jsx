import { useTheme } from "./ThemeProvider";



const ThemeButton = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-button">
            <div className={`lightDiv-${theme}`}>
                <img src="/cp-frontend-LucaLattuca/theme/light-mode.svg" alt="Light mode icon"
                        style={{ filter: theme === "light" ? "invert(1)" : "invert(0)", width: 28, height: 28 }}/>
            </div>

            <div className={`darkDiv-${theme}`} >
                <img src="/cp-frontend-LucaLattuca/theme/dark-mode.svg" alt="Dark mode icon" style={{width: 20, height: 20}} />
            </div>
        </button>
    );

}

export default ThemeButton;