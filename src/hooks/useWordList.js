import { useState, useEffect } from "react";
import { fetchWords } from "../services/api";

export function useWordList(level, words, setWords) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        setError(null);
        fetchWords(level)
            .then((data) => {
                if (!cancelled) {
                    setWords(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (!cancelled) {
                    setError(err.message);
                    setLoading(false);
                }
            });
        return () => { cancelled = true; };
    }, [level]);

    return { words, loading, error }
}