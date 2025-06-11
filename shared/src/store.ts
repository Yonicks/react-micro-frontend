import { create } from "zustand";

// Example: global user, theme, and notification states
type User = {
    id: string;
    name: string;
} | null;

type ThemeMode = "light" | "dark";

type Store = {
    user: User;
    setUser: (user: User) => void;

    theme: ThemeMode;
    toggleTheme: () => void;

    notification: string | null;
    setNotification: (msg: string | null) => void;
};

export const useSharedStore = create<Store>((set) => ({
    user: null,
    setUser: (user) => set({ user }),

    theme: "light",
    toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

    notification: null,
    setNotification: (msg) => set({ notification: msg }),
}));
