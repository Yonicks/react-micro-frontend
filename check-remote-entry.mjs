import fetch from "node-fetch";

// You can list as many remotes as you want here:
const remotes = [
    {
        name: "remote (local preview)",
        url: "http://localhost:3001/assets/remoteEntry.js",
    },
    {
        name: "host (local preview)",
        url: "http://localhost:3000/assets/remoteEntry.js",
    },
    // Add your production URLs for GitHub Pages or wherever you deploy:
    // { name: "remote (prod)", url: "https://yourusername.github.io/repo/assets/remoteEntry.js" }
];

const results = await Promise.all(remotes.map(async ({ name, url }) => {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        if (text.length < 100) throw new Error("File too small, probably not valid remoteEntry.js");
        return `[PASS] ${name}: ${url}`;
    } catch (e) {
        return `[FAIL] ${name}: ${url} (${e.message})`;
    }
}));

results.forEach(r => console.log(r));

const failed = results.some(r => r.startsWith("[FAIL]"));
process.exit(failed ? 1 : 0);
