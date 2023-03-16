import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function useBillboard() {
    const { data, error ,isLoading} = useSWR("/api/random", fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
    });
    return {
        billboard: data,
        isLoading: !error && !data,
        isError: error,
        Loading: isLoading,
    };
}


