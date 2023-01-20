import Image from 'next/image'
import React, { Component } from 'react'

export default class CarouselComponent extends Component {
    render() {
        return (
            <>
                <Image
                    className='w-full h-32 sm:h-48 lg:h-56 rounded-lg'
                    src={this.props.imgCarousel}
                    alt="Carousel Photos"
                    object-fit= "contain"
                />

                <div className='indikator-carousel flex gap-1 mt-2.5'>
                    <button className='w-2 h-2 bg-grey rounded-full'></button>
                    <button className='w-2 h-2 bg-accent rounded-full'></button>
                    <button className='w-2 h-2 bg-grey rounded-full'></button>
                    <button className='w-2 h-2 bg-grey rounded-full'></button>
                    <button className='w-2 h-2 bg-grey rounded-full'></button>
                </div>
            </>
        )
    }
}
