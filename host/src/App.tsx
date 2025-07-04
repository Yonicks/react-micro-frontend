import React, { Suspense } from "react";
const RemoteHelloWorld = React.lazy(() => import("remote/HelloWorld"));
import { APP_NAME, APP_GRETTINGS} from "shared/src/constants";
import type {User} from "shared/src/types";
import { capitalize, formatEmail } from "shared/src/utils";
import { useUserGreeting } from "shared/src/hooks/useUserGreeting";
import { useApi } from "shared/src/hooks/useApi";
import { useSharedStore } from "shared/src/store";


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


export default function App() {
    const greeting = useUserGreeting(mockUser);
    // const { theme, toggleTheme } = useTheme();
    const { data, loading, error } = useApi<User>("https://jsonplaceholder.typicode.com/users/1");

    const user = useSharedStore((state) => state.user);
    const setUser = useSharedStore((state) => state.setUser);
    const theme = useSharedStore((state) => state.theme);
    const toggleTheme = useSharedStore((state) => state.toggleTheme);
    const notification = useSharedStore((state) => state.notification);
    const setNotification = useSharedStore((state) => state.setNotification);



    return (
        <div className="App">
            <div>
                <h2>{APP_GRETTINGS} Host App</h2>
                <div>Theme: {theme}</div>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <br /><br />
                <div>
                    User: {user ? user.name : "None"}
                    <button onClick={() => setUser({ id: "1", name: "Yoni" })}>
                        Set User
                    </button>
                </div>
                <br />
                <div>
                    Notification: {notification ?? "None"}
                    <button onClick={() => setNotification("Hello from Host!")}>
                        Show Notification
                    </button>
                    <button onClick={() => setNotification(null)}>Clear</button>
                </div>
            </div>


            <div>
                <h2>Host App</h2>
                {loading && "Loading..."}
                {error && <div style={{color: "red"}}>{error.message}</div>}
                {data && <div>Predicted website for Yoni: {data.website}</div>}
            </div>
            {/*<div*/}
            {/*    style={{*/}
            {/*        background: theme.colors.background,*/}
            {/*        color: theme.colors.text,*/}
            {/*        fontFamily: theme.font.family,*/}
            {/*        fontSize: theme.font.size,*/}
            {/*        padding: 24,*/}
            {/*        minHeight: "100vh",*/}
            {/*        transition: "background 0.3s, color 0.3s",*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Host App with Shared Theme!*/}
            {/*    <br />*/}
            {/*    <button*/}
            {/*        style={{*/}
            {/*            background: theme.colors.primary,*/}
            {/*            color: theme.colors.secondary,*/}
            {/*            border: "none",*/}
            {/*            padding: "10px 20px",*/}
            {/*            borderRadius: 6,*/}
            {/*            marginTop: 16,*/}
            {/*            cursor: "pointer",*/}
            {/*        }}*/}
            {/*        onClick={toggleTheme}*/}
            {/*    >*/}
            {/*        Toggle Light/Dark*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div>
                {greeting}
            </div>
            <div>
                Welcome, {capitalize(mockUser.name)}!
                <br />
                Email: {formatEmail(mockUser.email)}
            </div>            <div>SHARED CONSTANTS:{APP_NAME}</div>
            <h1>Host App</h1>
            <Suspense fallback={<div>Loading Remote…</div>}>
                <RemoteHelloWorld />
            </Suspense>
        </div>
    );
}
