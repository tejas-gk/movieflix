import Input from '@/components/Input'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { useCurrentUser } from '@/hooks/currentUser'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [variant, setVariant] = useState<'register' | 'login'>('login')
    const { data: user } = useCurrentUser()

    

    const router = useRouter()

    const toggleVariant = useCallback(() => {
        setVariant((prev) => {
            if (prev === 'login') {
                return 'register'
            }
            return 'login'
        })
    }, [])

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles',
            })

            alert('Login Success')
            // router.push('/')
        } catch (error) {
            console.log(error);
        }
    },[email, password])

    const register = useCallback(async () => {
        try {
            const response = await axios.post('/api/register', {
                name,
                email,
                password,
            });
            alert('Register Success')
            login()
            alert('Login Success')
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login])


    return (
        <div
            className='relative h-full w-full bg-[url("/assets/hero.jpg")] bg-cover bg-center bg-no-repeat bg-fixed'
        >
            <div className='bg-black bg-opacity-50 h-full w-full'>
                <nav className='px-12 py-5
                '>
                    <Image
                        src='/assets/logo.png'
                        alt='logo'
                        width={100}
                        height={100}
                    />

                </nav>

                <div className='flex justify-center'>
                    <div className='bg-black bg-opacity-70 px-16 py-16 self-center lg:w-2/5 lg:max-w-md rounded-md w-full 
                    '>
                        <h2 className='text-4xl font-semibold mb-8 text-white'>
                            {variant === 'login' ? 'Login' : 'Register'}
                        </h2>

                        <div className="flex flex-col gap-4">
                            {
                                variant === 'register' && (
                                    <Input
                                        label='Name'
                                        type='text'
                                        id='name'
                                        value={name}
                                        onChange={
                                            (e) => {
                                                setName(e.target.value)
                                            }
                                        }
                                    />
                                )
                            }
                            <Input
                                label='Email'
                                type='email'
                                id='email'
                                value={email}
                                onChange={
                                    (e) => {
                                        setEmail(e.target.value)
                                    }
                                }

                            />
                            <Input
                                label='Password'
                                type='password'
                                id='password'
                                value={password}
                                onChange={
                                    (e) => {
                                        setPassword(e.target.value)
                                    }
                                }
                            />
                            <button
                                onClick={variant === 'login' ? login : register}
                                className='bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2
                             focus:ring-red-600 focus:border-transparent transition hover:bg-red-700
                             '>
                                {variant === 'login' ? 'Login' : 'Register'}
                            </button>
                            <div
                            className='flex flex-row items-center gap-4'
                            >
                                <div
                                    onClick={() => signIn('google')}
                                    className='w-10 h-10 bg-white rounded-full flex items-center justify-center transition'>
                                    <FcGoogle size={30} />
                                </div>
                                <div
                                    onClick={() => signIn('github', { callbackUrl: '/' })}
                                    className='w-10 h-10 cursor-pointer bg-white rounded-full flex items-center justify-center transition'>
                                    <FaGithub size={30} />
                                </div>
                                
                            </div>
                            <p
                                onClick={toggleVariant}
                                className='text-neutral-500 mt-2'>
                                {
                                    variant === 'login' ? 'Don\'t have an account?' : 'Already have an account?'
                                }
                                <a href='#' className='text-red-600'>here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
