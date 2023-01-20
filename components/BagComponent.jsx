import Image from 'next/image'
import Link from 'next/link'
import React, { Component } from 'react'
import BagIcon from '../public/icon/bag.svg'

export default class BagComponent extends Component {
  render() {
    return (
      <Link href="/bag">
        <Image
          src={BagIcon}
          alt="photo" />
      </Link>
    )
  }
}
