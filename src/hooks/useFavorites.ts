import useSWR from 'swr'
import fetcher from '@/lib/fetcher'


export default function useFavorites() {
   const { data, error, isLoading,mutate } = useSWR("/api/favorites", fetcher, {
     revalidateOnFocus: false,
     revalidateOnReconnect: false,
     revalidateIfStale: false,
   });
   return {
     data,
     isLoading: !error && !data,
     isError: error,
       Loading: isLoading,
     mutate
   };
}
