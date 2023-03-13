import Image from 'next/image'
import NavbarItem from '@/components/NavbarItem'
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import MobileMenu from './MobileNav'
import { useState,useEffect } from 'react'
import AccountMenu from './AccountMenu'

const TOP_OFFSET = 66


export default function Navbar() {
    const [visible, setVisible] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)

    const toggleAccountMenu = () => {
        setShowAccountMenu(!showAccountMenu)
    }

    const toggleMenu = () => {
        setVisible(!visible)
    }

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    

  return (
      <nav className="w-full fixed z-40">
          <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-300 ease-in-out bg-zinc-900/90
          ">
              <Image
                  src='/assets/logo.png'
                  alt='logo'
                  width={100}
                  height={100}
                />
          <div className='lg:flex flex-row hidden ml-8 gap-7
          '>
              <NavbarItem label='Home' active />
              <NavbarItem label='Movies' />
                  <NavbarItem label='Series' />
                  <NavbarItem label='New and Popular' />
                    <NavbarItem label='My List' />
          </div>
          {/* mobile */}
              <div
          onClick={toggleMenu}
                  className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative
            '>
              <p className='text-white text-sm transition'>Browse</p>
              <BsChevronDown className='text-white text-sm transition' />
                  <MobileMenu
                        visible={visible}
                  />
              </div>
              <div className='flex flex-row ml-auto gap-7 items-center
              '>
                  <div className='flex flex-row items-center gap-2
                    '>
                      <BsSearch className='text-white text-xl' />
                   
                  </div>
        
                  <div className='flex flex-row items-center gap-2
                    '>
                      <BsBell className='text-white text-xl' />

                  </div>
                  <div
                      onClick={toggleAccountMenu}
                      className='flex flex-row items-center gap-2 relative cursor-pointer
                    '>
                      <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden
                      '>
                          <Image
                              src='/assets/default-blue.png'
                              alt='avatar'
                              width={200}
                              height={200}
                            />
                      </div>
                      <BsChevronDown className={`text-white text-xl ${showAccountMenu ? 'transform rotate-180' : ''} transition
                      `}
                      />
                      <AccountMenu
                          visible={showAccountMenu}
                        />
                  </div>


              </div>
          </div>  

     </nav>
  )
}
