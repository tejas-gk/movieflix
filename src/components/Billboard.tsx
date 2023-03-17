import React, { useCallback } from 'react'
import useBillboard from '@/hooks/useBillboard'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import useInfoModalStore from '@/hooks/useInfoModalStore'
import PlayButton from './PlayButton';
export default function Billboard() {
    const { billboard } = useBillboard()
    const {openModal}=useInfoModalStore()
    const handleOpenModal = useCallback(() => {
        openModal(billboard?.id)
    }, [billboard?.id, openModal])
    return (
        <div className='relative h-[56.25vw]'>
            <video
                poster={billboard?.thumbnailUrl}
                src={billboard?.videoUrl}
                autoPlay
                loop
                muted
                className='w-full h-[56.25vw] object-cover object-center brightness-[60%]
                '
            />
            <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16
            '>
                <p className='text-white text-xl md:text-5xl h-full w-[50%] font-bold drop-shadow-xl lg:text-6xl'>
                    {billboard?.title}
                </p>
                <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] drop-shadow-xl
                '>
                    {billboard?.description}
                </p> 
                <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                    <PlayButton
                        movieId={billboard?.id}
                    />
                    <button
                        onClick={handleOpenModal}
                        className='bg-white/30
                     text-white 
                     rounded-md 
                     py-1 md:py-2
                      px-2 md:px-4 
                      w-auto 
                      text-xs lg:text-xl
                      font-semibold
                      flex flex-row items-center gap-2
                        transition duration-300 ease-in-out
                        hover:bg-white/50
                    '>
                    <AiOutlineInfoCircle className='text-xl' />
                    More Info
                    </button>
                </div>
            </div>
        </div>
    )
}




