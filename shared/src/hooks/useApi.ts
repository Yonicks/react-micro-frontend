import { useEffect, useState } from "react";

export function useApi<T = any>(url: string, options?: RequestInit) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);

        fetch(url, options)
            .then(async (resp) => {
                if (!resp.ok) throw new Error(`Error ${resp.status}`);
                const json = await resp.json();
                if (!cancelled) setData(json);
            })
            .catch((e) => {
                if (!cancelled) setError(e);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [url, JSON.stringify(options)]);

    return { data, loading, error };
}
