import Image from 'next/image'
import { BsFillPlayFill } from 'react-icons/bs'
import FavoriteButton from './FavoriteButton'
import { useRouter } from 'next/router'
import { BiChevronDown } from 'react-icons/bi'
import useInfoModalStore from '@/hooks/useInfoModalStore'
interface MovieCardProps {
    data: Record<string, any>
}
export default function MovieCard({
    data,
}: MovieCardProps) {
  const router = useRouter()
  const {openModal}=useInfoModalStore()
  return (
    <div className='group bg-zinc-900 col-span relative h-[12vh]'>
      <img
        src={data.thumbnailUrl}
        alt={data.title}
        // width={200}
        // height={300}
        className='
        cursor-pointer
        object-cover
        transition        duration-200
        shadow-2xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-100
        w-full
        h-[12vw]
        '
      />
      <div className='
        opacity-0
        absolute top-0 
        transition duration-200
        z-10
        invisible
        sm:visible
        delay-100
        w-full
        scale-0
        group-hover:scale-110
        group:hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      '>
        <img
          src={data.thumbnailUrl}
          alt={data.title}
          className='
          cursor-pointer
          object-cover
          transition        duration-200
          shadow-2xl
          rounded-t-md
          w-full
          h-[12vw]
          '
        />
        <div
          className='
        z-10
        bg-zinc-800
        p-2
        lg:p-4
        absolute
        w-full
        transition duration-200
        shadow-md
        rounded-b-md
      '
        >
          <div
            className='flex flex-row items-center gap-3'
          >
            <div className='
            cursor-pointer
            w-6 h-6 lg:w-10 lg:h-10
            bg-white
            rounded-full
            flex items-center justify-center
            transition duration-200
            group-hover:bg-neutral-100
          '
              onClick={
                () => router.push(`/watch/${data.id}`)
              }
            >
              <BsFillPlayFill
                size={30}
              />
            </div>
            <FavoriteButton movieId={data.id} />
            <div
              onClick={() => {
                openModal(data?.id)
              }}
              className="cursor-pointer 
            ml-auto
             w-6 h-6 
             group/item
            lg:w-10 lg:h-10
             border-white botder-2 
            rounded-full 
            flex justify-center items-center transition 
            hover:border-neutral-100">
              <BiChevronDown size={30}
                className='text-white group-hover/item:text-neutral-100 w-4'
              />
            </div>
          </div>
          <p
            className='text-green-400 font-semibold mt-4
        '
          >
            New <span className='text-white'>2023</span>
          </p>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-white font-semibold text-sm lg:text-lg'>
              {data.title}
            </p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-white font-semibold text-[10px] lg:text-sm'>
              {data.duration}
            </p>
          </div>

        </div>
      </div>
     

    </div>
  )
} 
