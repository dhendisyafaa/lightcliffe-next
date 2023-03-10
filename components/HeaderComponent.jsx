import Link from 'next/link'
import React from 'react'

const HeaderComponent = () => {
    return (
        <div className="header bg-accent w-full h-[8vh] flex justify-end items-center pr-[4%]">
            <Link href='/profile'>
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

    )
}

export default HeaderComponent