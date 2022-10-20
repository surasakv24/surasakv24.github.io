import { Layout } from '@/components'
import { ReactNode } from 'react'
import { NextPageWithLayout } from './_app'

type ExperiencesProps = {}

const Experiences: NextPageWithLayout = (props: ExperiencesProps) => {
  return (
    <div>
      <h1>Experiences page</h1>
    </div>
  )
}

Experiences.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Experiences
