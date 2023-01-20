import KeranjangItem from '@/components/bag/KeranjangItem'
import Link from 'next/link'
import React, { Component } from 'react'

export default class bag extends Component {
    render() {
        return (
            <>

                {/* navbar simple, jadikan component terpisah */}
                <div className="bg-accent w-full h-[8vh] flex justify-between items-center px-[4%]">
                    <div className='flex'>
                        <Link href='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </Link>
                        <p className='text-white font-bold text-md ml-2'>Keranjang</p>
                    </div>
                    <Link href='/profile' >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4_62)">
                                <circle cx="12.5" cy="12.5" r="12" stroke="white" />
                                <path d="M21 20V19C21 18.4696 20.5522 17.9609 19.7552 17.5858C18.9582 17.2107 17.8772 17 16.75 17H8.25C7.12283 17 6.04183 17.2107 5.2448 17.5858C4.44777 17.9609 4 18.4696 4 19V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.1667 13.3333C14.4679 13.3333 16.3333 11.4679 16.3333 9.16667C16.3333 6.86548 14.4679 5 12.1667 5C9.86548 5 8 6.86548 8 9.16667C8 11.4679 9.86548 13.3333 12.1667 13.3333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_62">
                                    <rect width="25" height="25" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
                <KeranjangItem />
                <div className="grid grid-cols-[auto_35%] fixed bottom-0 items-center w-full h-[8vh] rounded-t-xl bg-white z-30 shadow-[0_-1px_10px_0px_rgba(0,0,0,1)]">
                    <div className='py-2.5 px-6'>
                        <p className='font-normal text-xs'>Total Belanja</p>
                        <p className='font-bold text-md'>Rp. 129.950</p>
                    </div>
                    <Link href="/checkout" className='bg-accent text-white h-full flex justify-center items-center font-bold text-sm'>Checkout (100)</Link>
                </div>
            </>
        )
    }
}
