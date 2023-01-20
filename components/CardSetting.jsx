import Image from 'next/image'
import React, { Component } from 'react'
import Next from '../public/icon/next.svg'

export default class CardSetting extends Component {
  render() {
    return (
      <div className="w-full flex justify-between shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] px-2 py-3 rounded-lg">
        <p className='font-sm text-normal'>{this.props.nameSetting}</p>
        <Image src={Next} alt="photo" />
      </div>
    )
  }
}
