import { createContext, useContext, useState, type ReactNode, useCallback } from "react";
import { lightTheme, darkTheme } from "./theme";

type Theme = typeof lightTheme;

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(lightTheme);

    const toggleTheme = useCallback(() => {
        setTheme(prev =>
            prev.mode === "light" ? darkTheme : lightTheme
        );
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
