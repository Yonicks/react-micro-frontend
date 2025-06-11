import React, { Suspense } from "react";
import { APP_NAME } from "shared/src/constants";
import type {User} from "shared/src/types";
import { capitalize, formatEmail } from "shared/src/utils";
import { useUserGreeting } from "shared/src/hooks/useUserGreeting";
import { useTheme } from "shared/src/ThemeContext";


const mockUser: User = {
    id: "1",
    name: "Yoni",
    email: "yoni@example.com",
};
// Import the button from host, federated!
const SharedButton = React.lazy(() => import("host/SharedButton"));

function App() {
    const greeting = useUserGreeting(mockUser);
    const { theme, toggleTheme } = useTheme();


    return (
        <div>
            <div
                style={{
                    background: theme.colors.background,
                    color: theme.colors.text,
                    fontFamily: theme.font.family,
                    fontSize: theme.font.size,
                    padding: 24,
                    minHeight: "100vh",
                    transition: "background 0.3s, color 0.3s",
                }}
            >
                Remote App with Shared Theme!
                <br />
                <button
                    style={{
                        background: theme.colors.primary,
                        color: theme.colors.secondary,
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: 6,
                        marginTop: 16,
                        cursor: "pointer",
                    }}
                    onClick={toggleTheme}
                >
                    Toggle Light/Dark
                </button>
            </div>
            <div>
                {greeting}
            </div>
            <div>
                Welcome, {capitalize(mockUser.name)}!
                <br />
                Email: {formatEmail(mockUser.email)}
            </div>
            <div>SHARED CONSTANTS:{APP_NAME}</div>
            <h1>Remote App</h1>
            <Suspense fallback={<span>Loading shared button…</span>}>
                <SharedButton onClick={() => alert("Clicked!")}>Click Me!</SharedButton>
            </Suspense>
        </div>
    );
}

export default App;
