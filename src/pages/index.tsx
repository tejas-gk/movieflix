import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { signOut } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import { NextPageContext } from 'next'
import { useCurrentUser } from '@/hooks/currentUser'
import Navbar from '@/components/Navbar'
import Billboard from '@/components/Billboard'
import MovieList from '@/components/MovieList'
import useMoviesList from '@/hooks/useMovieList'
const inter = Inter({ subsets: ['latin'] })


export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }
  return {
    props: {
    },
  }
}

export default function Home() {
  const { data: movies = [] } = useMoviesList();
  console.log('de', movies)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Billboard />
      <div>

        <MovieList
          title='Popular Movies'
          data={movies}
        />
      </div>
    </>
  )
}

