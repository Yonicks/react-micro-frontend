import React, { Suspense } from "react";
const RemoteHelloWorld = React.lazy(() => import("remote/HelloWorld"));
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


export default function App() {
    const greeting = useUserGreeting(mockUser);
    const theme = useTheme();

    return (
        <div className="App">
            <div style={{
                background: theme.colors.background,
                color: theme.colors.text,
                fontFamily: theme.font.family,
                fontSize: theme.font.size,
                padding: 24
            }}>
                Host App with Shared Theme!
            </div>
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
