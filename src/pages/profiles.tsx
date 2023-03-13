import React from 'react'
import { getSession } from 'next-auth/react'
import { NextPageContext } from 'next'
import Image from 'next/image'
import { useCurrentUser } from '@/hooks/currentUser'
import { useRouter } from 'next/router'
export async function getServerSideProps(
    context: NextPageContext
) {
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

export default function Profiles() {
    const { data: user } = useCurrentUser()
    const Router = useRouter()
    return (
        <div className='flex items-center h-full justify-center'>
            <div className="flex flex-col">
                <h1 className='text-4xl font-bold text-white md:text-6xl'>Who is watching</h1>
                <div className="flex flex-col gap-4 mt-8 justify-center items-center">
                    <div
                        onClick={() => {
                            Router.push('/')
                         } }
                    >
                        <div className='group flex-row w-44 mx-auto'>
                            <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent 
                            group-hover:cursor-pointer overflow-hidden
                            '>
                                <Image
                                    src='/assets/default-blue.png'
                                    alt='avatar'
                                    width={200}
                                    height={200}
                                />

                            </div>
                            <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white
                            '>
                                {user?.email}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
