import React, { Suspense } from "react";
import { APP_NAME } from "shared/src/constants";
import type {User} from "shared/src/types";

const mockUser: User = {
    id: "1",
    name: "Yoni",
    email: "yoni@example.com",
};
// Import the button from host, federated!
const SharedButton = React.lazy(() => import("host/SharedButton"));

function App() {
    return (
        <div>
            return <div>Welcome, {mockUser.name}!</div>;

            <div>SHARED CONSTANTS:{APP_NAME}</div>
            <h1>Remote App</h1>
            <Suspense fallback={<span>Loading shared button…</span>}>
                <SharedButton onClick={() => alert("Clicked!")}>Click Me!</SharedButton>
            </Suspense>
        </div>
    );
}

export default App;
