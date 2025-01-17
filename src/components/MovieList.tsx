import React from 'react'
import { isEmpty } from 'lodash'
import MovieCard from '@/components/MovieCard'

interface MovieListProps {
    data: Record<string, any>[] | null
    title: string
}
export default function MovieList({
    data,
    title,
}: MovieListProps) {
    console.log('data',data)
    // if (isEmpty(data)) {
    //     return null;
    // }
  return (
      <div className="px-4 md:px-12 mt-4 space-y-8">
          <div>
              <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
              <div className="grid grid-cols-4 gap-2">
                  {
                      data?.map((movie) => (
                          <MovieCard key={movie.id} data={movie} />
                        ))
                 }
              </div>
          </div>
      </div>
  )
}
