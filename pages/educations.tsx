import { CardBody, CardContainer, CardDark, Layout } from '@/components'
import { GetStaticProps } from 'next'
import { ReactNode } from 'react'
import { getEducations } from '@/libs/profile'
import type { Education } from '@/libs/profile/types'

type EducationsProps = {
  educations: Education[]
}

export const getStaticProps: GetStaticProps<EducationsProps> = () => {
  return {
    props: {
      educations: getEducations(),
    },
  }
}

const Educations = ({ educations }: EducationsProps) => {
  return (
    <>
      <CardDark>
        <header className="card-header d-flex justify-content-center">
          <h1>
            <strong>
              <ins>Educations</ins>
            </strong>
          </h1>
        </header>
      </CardDark>
      {educations.map(
        (
          { degree, faculty, gpa, start, end, institution }: Education,
          index
        ) => (
          <CardDark key={`${index}-education`} className="mt-1">
            <CardBody>
              <CardContainer>
                <div className="text-center">
                  <h2 className="border-top border-bottom text-center">
                    <strong>{degree}</strong>
                  </h2>
                  <h3>{faculty}</h3>
                  <div>
                    <span>GPA. {gpa}</span>
                  </div>
                  <span className="text-muted">{`${start} - ${end}`}</span>
                  <div>
                    <span>{institution}</span>
                  </div>
                </div>
              </CardContainer>
            </CardBody>
          </CardDark>
        )
      )}
    </>
  )
}

Educations.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Educations
