import * as React from "react";

export default function GlobalStyle() {
    React.useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
      /* CSS Reset */
      html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        box-sizing: border-box;
        background: #f7f8fa;
        color: #222;
        font-family: 'Segoe UI', Arial, sans-serif;
        font-size: 18px;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      button {
        font-family: inherit;
        font-size: inherit;
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
    return null;
}
