import React from 'react'
import styles, { layout } from '../styles'
import { socialMedia, footerLinks } from '../Constants'
import { discount, logo } from '../assets'

const Footer = () =>
(
    <section className={`${styles.flexCenter} ${styles.padding} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col justify-start mr-10'>
                <img src={logo} alt="logo" className='w-[266px] object-contain h-[72px]' />
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
            </div>

        </div>
        <div className='flex-1.5 w-full flex flex-wrap flex-row justify-between md:mt-0 mt-10'>
            {footerLinks.map((footerlink) => (
                <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                    <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                        {footerlink.title}
                    </h4>
                    <ul className='list-none mt-4'>
                        {footerlink.links.map((link, index) => (
                            <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>{link.name}</li>
                        ))}
                    </ul>

                </div>
            ))}

        </div>
        <div className='flex w-full justify-between items-center md:flex-row flex-col pt-6 mt-6 border-t-[1px] border-t-[#3f3e45]'>
            <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
            <div className={`flex flex-row md:mt-0 mt-6`}>
                {socialMedia.map((social, index) => (
                    <img key={social.id} src={social.icon} alt="social" className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`} />
                ))}
            </div>

        </div>
    </section>
)


export default Footer
