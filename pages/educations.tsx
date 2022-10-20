import { Layout } from '@/components'
import { ReactNode } from 'react'
import { NextPageWithLayout } from './_app'

type EducationsProps = {}

const Educations: NextPageWithLayout = (props: EducationsProps) => {
  return (
    <div>
      <h1>Educations page</h1>
    </div>
  )
}

Educations.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Educations
