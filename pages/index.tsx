import { Layout } from '@/components'
import { ReactNode } from 'react'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

Home.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Home
