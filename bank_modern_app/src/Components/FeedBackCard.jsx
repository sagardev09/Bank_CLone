import React from 'react'
import { quotes } from '../assets'
import styles from '../styles'

const FeedBackCard = ({ content, name, title, img }) =>
(
    <div className={`flex flex-col justify-between rounded-[20px] px-10 py-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card`}>
        <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain' />
        <p className="font-poppins font-normal text-[18px] text-white my-10 leading-[32px]">{content}</p>
        <div className='flex flex-row'>
            <img src={img} alt="img" className='w-[48px] h-[48px] rounded-full' />
            <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-normal text-[20px] text-white leading-[32px] '>{name}</h4>
                <p className='font-poppins font-normal text-[16px] text-dimWhite  leading-[24px]'>{title}</p>

            </div>

        </div>

    </div>
)


export default FeedBackCard
