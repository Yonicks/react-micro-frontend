import React, { Suspense } from "react";
import { APP_NAME } from "shared/src/constants";
import type {User} from "shared/src/types";
import { capitalize, formatEmail } from "shared/src/utils";
import { useUserGreeting } from "shared/src/hooks/useUserGreeting";


const mockUser: User = {
    id: "1",
    name: "Yoni",
    email: "yoni@example.com",
};
// Import the button from host, federated!
const SharedButton = React.lazy(() => import("host/SharedButton"));

function App() {
    const greeting = useUserGreeting(mockUser);


    return (
        <div>
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
