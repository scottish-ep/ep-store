import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { isArray } from '../utils'

import styles from '../styles/Home.module.scss'

import Header from '../components/Header/Header'
import Carousel from '../components/Carousel/Carousel'
import Layout from '../components/Layout/Layout'
import ProductPanel from '../components/ProductPanel/ProductPanel'
import Footer from '../components/Footer/Footer'

const AdsBannerArray = [
  {
    img: "",
    link: "#"
  },
  {
    img: "",
    link: "#"
  },
  {
    img: "",
    link: "#"
  }
]

const productInfoArray = [
  {
    link: "#",
    variance: [
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: require('../public/ProductPanelPlaceholder.png'),
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: ""
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
    ],
    brand: "Halio",
    title: "Nước Hoa Hồng KURAMOTO BIJIN Sake lees Toning Water 150ml",
    rating: {
      star: 3,
      number: 2
    },
    price: "1.512.000",
    saledPrice: "1.319.000",
  },
  {
    link: "#",
    variance: [
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: require('../public/ProductPanelPlaceholder.png'),
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: ""
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
    ],
    brand: "Halio",
    title: "Nước Hoa Hồng KURAMOTO BIJIN Sake lees Toning Water 150ml",
    rating: {
      star: 3,
      number: 2
    },
    price: "1.512.000",
    saledPrice: "1.319.000",
  },
  {
    link: "#",
    variance: [
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: require('../public/ProductPanelPlaceholder.png'),
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: ""
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
    ],
    brand: "Halio",
    title: "Nước Hoa Hồng KURAMOTO BIJIN Sake lees Toning Water 150ml",
    rating: {
      star: 3,
      number: 2
    },
    price: "1.512.000",
    saledPrice: "1.319.000",
  },
  {
    link: "#",
    variance: [
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: require('../public/ProductPanelPlaceholder.png'),
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: ""
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
    ],
    brand: "Halio",
    title: "Nước Hoa Hồng KURAMOTO BIJIN Sake lees Toning Water 150ml",
    rating: {
      star: 3,
      number: 2
    },
    price: "1.512.000",
    saledPrice: "1.319.000",
  },
  {
    link: "#",
    variance: [
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: require('../public/ProductPanelPlaceholder.png'),
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: ""
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
    ],
    brand: "Halio",
    title: "Nước Hoa Hồng KURAMOTO BIJIN Sake lees Toning Water 150ml",
    rating: {
      star: 3,
      number: 2
    },
    price: "1.512.000",
    saledPrice: "1.319.000",
  },
  {
    link: "#",
    variance: [
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: require('../public/ProductPanelPlaceholder.png'),
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: false
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: ""
      },
      {
        smallImage: require('../public/ProductPanelPlaceholder.png'),
        bigImage: "",
        soldOut: true
      },
    ],
    brand: "Halio",
    title: "Nước Hoa Hồng KURAMOTO BIJIN Sake lees Toning Water 150ml",
    rating: {
      star: 3,
      number: 2
    },
    price: "1.512.000",
    saledPrice: "1.319.000",
  },
]

const adsArray = [
  {
    img: "",
    link: "#"
  },
  {
    img: "",
    link: "#"
  }
]

const mostSearchArray = ["test1", "test2", "test3", "test4", "test5"]

const promotionArray = [
  {
    img: "",
    link: "#"
  },
  {
    img: "",
    link: "#"
  },
  {
    img: "",
    link: "#"
  },
  {
    img: "",
    link: "#"
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <Carousel className={styles.ads_banner__wrapper} isAuto={true} numberShow={1}>
          {isArray(AdsBannerArray) && AdsBannerArray.map((item: any, index: number) => (
            <Link key={index} href={item.link}>
              <Image
                src={item.img || require("../public/AdsBannerPlaceholder.png")}              
                width={1400}
                height={600}
                alt=""
              />
            </Link>
          ))}
        </Carousel>

        <Layout 
          className={styles.product_showcase__wrapper} 
          isShowMore={false} 
          title="HOT DEAL"
        >
          <Carousel className={styles.track} isAuto={true} numberShow={5}>
            {isArray(productInfoArray) && productInfoArray.map((item: any, index: number) => (
              <ProductPanel key={index} productInfo={item} />
            ))}
          </Carousel>
        </Layout>

        <Layout 
          className={styles.product_showcase__wrapper} 
          isShowMore={true} 
          title="BOX BÁN CHẠY"
        >
          <Carousel className={styles.track} isAuto={true} numberShow={5}>
            {isArray(productInfoArray) && productInfoArray.map((item: any, index: number) => (
              <ProductPanel key={index} productInfo={item} />
            ))}
          </Carousel>
        </Layout>

        <Layout
          className={styles.ads__wrapper}
          isShowMore={false}
          contentWrapperClassname={styles.content__wrapper}
        >
          {isArray(adsArray) && adsArray.map((item: any, index: any) => (
            <Link
              key={index}
              href={item.link || "#"}
            >
              <Image
                src={item.image || require("../public/AdsPlaceholder.png")}
                alt="" 
              />
            </Link>
          ))}
        </Layout>

        <Layout 
          className={styles.product_showcase__wrapper} 
          isShowMore={true} 
          title="MUA LẺ MỚI NHẤT"
        >
          <Carousel className={styles.track} isAuto={true} numberShow={5}>
            {isArray(productInfoArray) && productInfoArray.map((item: any, index: number) => (
              <ProductPanel key={index} productInfo={item} />
            ))}
          </Carousel>
        </Layout>

        <Layout 
          className={styles.product_showcase__wrapper} 
          isShowMore={true} 
          title="SẢN PHẨM ĐÃ XEM"
        >
          <Carousel className={styles.track} isAuto={true} numberShow={5}>
            {isArray(productInfoArray) && productInfoArray.map((item: any, index: number) => (
              <ProductPanel key={index} productInfo={item} />
            ))}
          </Carousel>
        </Layout>

        <Layout
          className={styles.most_search__wrapper}
          isShowMore={false}
          title="TÌM KIẾM NHIỀU NHẤT"
          contentWrapperClassname={styles.content__wrapper}
        >
          {isArray(mostSearchArray) && mostSearchArray.map((item: any, index: any) => (
            <div className={styles.chip} key={index}>
              {item}
            </div>
          ))}
        </Layout>

        <Layout 
          className={styles.product_showcase__wrapper} 
          isShowMore={true} 
          title="DÀNH RIÊNG CHO BẠN"
        >
          <Carousel className={styles.track} isAuto={true} numberShow={5}>
            {isArray(productInfoArray) && productInfoArray.slice(0, 4).map((item: any, index: number) => (
              <ProductPanel key={index} productInfo={item} />
            ))}
          </Carousel>
        </Layout>

        <Layout
          className={styles.promotion__wrapper}
          isShowMore={false}
          title="CHƯƠNG TRÌNH NỔI BẬT"
          contentWrapperClassname={styles.content__wrapper}
        >
          {isArray(promotionArray) && promotionArray.map((item: any, index: any) => (
            <Link
              key={index}
              href={item.link || "#"}
            >
              <Image
                src={item.image || require("../public/VerticalAdsPlaceholder.png")}
                alt="" 
              />
            </Link>
          ))}
        </Layout>
        <Footer className={styles.footer}/>
      </main>
    </>
  )
}
