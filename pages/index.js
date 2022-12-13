import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from "../components/Banner.js"

export default function Home() {

  const handleOnBanner = () => {
    console.log('hi')
  }
  return (
    <>
    <Head>
      <title>Coffee Shop Finder</title>
    </Head>
    <div>
      <Banner buttonText="Find Coffee Shops Nearby" handleOnClick={handleOnBanner}/>
    </div>
    </>
  )
}
