import {
  CardBody,
  CardContainer,
  CardDark,
  ImageWithTitle,
  Layout,
} from '@/components'
import { GetStaticProps } from 'next'
import { ReactNode } from 'react'
import { getExperiences } from '@/libs/profile'
import type { Experience, UseTechnology } from '@/libs/profile/types'
import Link from 'next/link'

type ExperiencesProps = {
  experiences: Experience[]
}

export const getStaticProps: GetStaticProps<ExperiencesProps> = () => {
  return {
    props: {
      experiences: getExperiences(),
    },
  }
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <CardDark>
      <header className="card-header d-flex justify-content-center">
        <h1>
          <strong>
            <ins>Experiences</ins>
          </strong>
        </h1>
      </header>

      <CardBody>
        <CardContainer>
          {experiences.map(
            (
              {
                title,
                start,
                end,
                company,
                location,
                link,
                details,
                useTechnologies,
              }: Experience,
              index
            ) => (
              <div key={`${index}-experience`}>
                <div className="text-center">
                  <h2 className="border-top border-bottom">
                    <strong className="text-capitalize">{title}</strong>
                  </h2>
                  <div className="text-muted">{`${start} - ${end}`}</div>
                  <div>
                    <Link href={link}>
                      <a className="link-light">{company}</a>
                    </Link>
                  </div>
                  <span>{location}</span>
                </div>
                <ul className="pt-1">
                  {details?.map((detail, indexDetail) => (
                    <li key={`${indexDetail}-detail`}>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="container text-center">
                  <h3>Technologies</h3>
                  <div className="row g-3 row-cols-3 row-cols-md-6 justify-content-center">
                    {useTechnologies?.map(
                      ({ image, title }: UseTechnology, indexTech) => (
                        <ImageWithTitle
                          containerClassName="flex-column"
                          image={{
                            src: `/images/${image}`,
                            alt: title,
                            width: 50,
                            height: 50,
                          }}
                          title={title}
                          key={`${indexTech}-tech`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </CardContainer>
      </CardBody>
    </CardDark>
  )
}

Experiences.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Experiences
