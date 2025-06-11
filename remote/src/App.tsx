import React, { Suspense } from "react";
import { APP_NAME } from "shared/src/constants";
import type {User} from "shared/src/types";
import { capitalize, formatEmail } from "shared/src/utils";
import { useUserGreeting } from "shared/src/hooks/useUserGreeting";
import { useTheme } from "shared/src/ThemeContext";
import { useApi } from "../../shared/src/hooks/useApi";


const mockUser: User = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
// Import the button from host, federated!
const SharedButton = React.lazy(() => import("host/SharedButton"));

function App() {
    const greeting = useUserGreeting(mockUser);
    const { theme, toggleTheme } = useTheme();
    const { data, loading, error } = useApi<User>("https://jsonplaceholder.typicode.com/users/1");


    return (
        <div>
            <div>
                <h2>Remote App</h2>
                {loading && "Loading..."}
                {error && <div style={{color: "red"}}>{error.message}</div>}
                {data && <div>Predicted website for Yoni: {data.website}</div>}
            </div>
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
