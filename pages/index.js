import CardProduct from '@/components/card/CardProduct'
import CarouselComponent from '@/components/CarouselComponent'
import CategoryComponent from '@/components/CategoryComponent'
import SearchBar from '@/components/SearchBar'
import TitleSection from '@/components/TitleSection'
import Head from 'next/head'
import Carousel1 from '../public/products/2.png'

// export default function Layout({children} = {children: React.ReactNode}) {

import BagComponent from '@/components/BagComponent'
import Layout from '@/components/Layout'
import { Component } from 'react'

export default class index extends Component {

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
      <Layout>
        <Head>
          <title>Lightcliffe</title>
          <meta name="description" content="Lightcliffe | Books Store Online" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="my-[18px] sm:mx-14 md:mx-20 lg:mx-28 mx-[20px] flex flex-col gap-[20px]">
          <div className="grid grid-cols-[auto_8%] items-center gap-[20px]">
            <SearchBar />
            <div className="flex justify-center">
              <BagComponent/>
            </div>
          </div>
          <CarouselComponent imgCarousel={Carousel1} />
          <div className="mt-4">
            <CategoryComponent />
          </div>
          <div className='mt-10'>
            <TitleSection
              title={'Top Seller bulan ini...'}
            />
            <div className="flex gap-3 mt-5 mb-40 overflow-x-scroll scrollbar-hide py-3 px-4 bg-[#e65b8038] rounded-lg">
              {this.navLink.map(({ nameProduct, priceProduct, releaseDate, authorName }, index) =>
                <CardProduct nameProduct={nameProduct} priceProduct={priceProduct} releaseDate={releaseDate} authorName={authorName} key={index}/>
              )}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}