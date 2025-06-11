import { useMemo } from "react";
import type {User} from "../types";

export function useUserGreeting(user: User) {
    // Only recompute greeting when the user changes
    return useMemo(() => {
        if (!user) return "Hello, guest!";
        return `Hello, ${user.name}!`;
    }, [user]);
}
