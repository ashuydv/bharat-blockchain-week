import React from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'
import Hero from 'components/Hero'
import Events from 'components/Events'

const Home = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>BhartBlockchainWeek.xyz</title>
          <meta name="description" content="bharatblockchainweek.xyz" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
        </Head>
        <Hero
          title='Bharat Blockchain Week'
          description='NETWORK, OPPORTUNITIES, AND CULTURE !!'
          image=''
          button1='side event sheet'
          button2='submit your event'
        />
        <Events />
      </Layout>
    </div>
  )
}

export default Home