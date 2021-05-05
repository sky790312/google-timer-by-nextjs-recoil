import React from 'react'
import Head from 'next/head'
import { Container } from '@/GlobalStyles'
import { Timer } from '@/components/Timer'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Timer />
      </Container>
    </>
  )
}

export default Home
