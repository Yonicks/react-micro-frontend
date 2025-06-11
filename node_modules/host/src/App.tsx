import React, { Suspense } from "react";
const RemoteHelloWorld = React.lazy(() => import("remote/HelloWorld"));
import { APP_NAME } from "shared/src/constants";
import type {User} from "shared/src/types";

const mockUser: User = {
    id: "1",
    name: "Yoni",
    email: "yoni@example.com",
};


export default function App() {
    return (
        <div className="App">
            return <div>Welcome, {mockUser.name}!</div>;
            <div>SHARED CONSTANTS:{APP_NAME}</div>
            <h1>Host App</h1>
            <Suspense fallback={<div>Loading Remote…</div>}>
                <RemoteHelloWorld />
            </Suspense>
        </div>
    );
}
