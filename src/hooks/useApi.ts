
import { useEffect, useState } from 'react';

interface ApiResponse<T> {
    data: T | null;
    path: string;
    error: string | null;
    loading: boolean;
}

export const useApi = <T>(url: string ): ApiResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [path, setPath] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url + path);
                if (path) {
                    setPath(path);
                }
                if (!response) {
                    throw new Error('Network response was not ok');
                }
                if (response.status === 404) {
                    setError('404 Not Found');
                    return;
                }
                if (response.status === 500) {
                    setError('500 Internal Server Error');
                    return;
                }
                const result: T = await response.json();
                setData(result);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading, path };
};

