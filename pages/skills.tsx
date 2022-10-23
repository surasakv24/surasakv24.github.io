import {
  CardBody,
  CardContainer,
  CardDark,
  ImageWithTitle,
  Layout,
} from '@/components'
import { GetStaticProps } from 'next'
import { ReactNode } from 'react'
import { getTechnologySkills } from '@/libs/profile'
import type { TechnologySkill } from '@/libs/profile/types'

type SkillsProps = {
  technologies: TechnologySkill[]
}

export const getStaticProps: GetStaticProps<SkillsProps> = () => {
  return {
    props: {
      technologies: getTechnologySkills(),
    },
  }
}

const Skills = ({ technologies }: SkillsProps) => {
  return (
    <CardDark>
      <header className="card-header d-flex justify-content-center">
        <h1>
          <strong>
            <ins>Skills</ins>
          </strong>
        </h1>
      </header>
      <CardBody>
        <CardContainer>
          <h2 className="border-top border-bottom text-center">
            <strong>Technologies skill</strong>
          </h2>
          <div className="container text-center mt-3">
            <div className="row g-3 row-cols-3 row-cols-md-6 justify-content-center">
              {technologies?.map(
                ({ image, title }: TechnologySkill, indexLogo) => (
                  <ImageWithTitle
                    containerClassName="flex-column"
                    image={{
                      src: image,
                      alt: title,
                      width: 50,
                      height: 50,
                    }}
                    title={title}
                    key={`${indexLogo}-logo`}
                  />
                )
              )}
            </div>
          </div>
        </CardContainer>
      </CardBody>
    </CardDark>
  )
}

Skills.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Skills
