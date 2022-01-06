import type { NextPage } from 'next'
import Head from 'next/head'

import GlobalStyle from '../styles/globalStyles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space</title>
        <meta name="description" content="Space travels" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalStyle />
      <main>
        <h1>
          Earth
        </h1>
      </main>
    </>
  )
}

export default Home
