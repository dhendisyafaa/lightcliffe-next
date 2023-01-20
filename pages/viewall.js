import CardProduct from '@/components/card/CardProduct'
import HeaderDetailComponent from '@/components/HeaderDetailComponent'
import React, { Component } from 'react'

export default class viewall extends Component {
  navLink = [
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
    {
      nameProduct: "Harry Potter and the Philosopher's Stone",
      priceProduct: "175.000",
      releaseDate: "1991",
      authorName: "J.K Rowling"
    },
  ]
  render() {
    return (
      <>
        <HeaderDetailComponent />
        <div className='my-6 flex flex-wrap justify-center gap-3'>
          {this.navLink.map(({ nameProduct, priceProduct, releaseDate, authorName }, index) =>
            <CardProduct nameProduct={nameProduct} priceProduct={priceProduct} releaseDate={releaseDate} authorName={authorName} />
          )}
        </div>
      </>
    )
  }
}
