import React, { Suspense } from "react";

// Import the button from host, federated!
const SharedButton = React.lazy(() => import("host/SharedButton"));

function App() {
    return (
        <div>
            <h1>Remote App</h1>
            <Suspense fallback={<span>Loading shared button…</span>}>
                <SharedButton onClick={() => alert("Clicked!")}>Click Me!</SharedButton>
            </Suspense>
        </div>
    );
}

export default App;
