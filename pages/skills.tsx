import { Layout } from '@/components'
import { ReactNode } from 'react'
import { NextPageWithLayout } from './_app'

type SkillsProps = {}

const Skills: NextPageWithLayout = (props: SkillsProps) => {
  return (
    <div>
      <h1>Skills page</h1>
    </div>
  )
}

Skills.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Skills
