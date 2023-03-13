import React from 'react'
import { getSession } from 'next-auth/react'
import { NextPageContext } from 'next'
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

export default function profiles() {
  return (
    <div>profiles</div>
  )
}
