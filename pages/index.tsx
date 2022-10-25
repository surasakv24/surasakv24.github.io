import {
  CardBody,
  CardDark,
  Figure,
  FigureCaption,
  ImageLink,
  Layout,
} from '@/components'
import { InferGetStaticPropsType } from 'next'
import { ReactNode } from 'react'
import { getProfile } from '@/libs/profile'
import type { Social } from '@/libs/profile/types'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

export const getStaticProps = async () => {
  const profile = getProfile()
  const { profileImage } = profile
  const { base64, img } = await getPlaiceholder(profileImage)

  return {
    props: {
      image: {
        ...img,
        blurDataURL: base64,
      },
      profile,
    },
  }
}

const Home = ({
  profile,
  image,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    profileImageWidth,
    profileImageHeight,
    fullName,
    jobTitle,
    socials,
    aboutMe,
  } = profile
  return (
    <CardDark className="pt-2">
      <Figure className="px-3 pt-3">
        <div className="d-flex justify-content-center">
          <Image
            {...image}
            placeholder="blur"
            className="rounded-circle border border-3"
            width={profileImageWidth}
            height={profileImageHeight}
            objectFit="cover"
            objectPosition="50% 25%"
            alt={fullName}
          />
        </div>
        <FigureCaption className="text-center text-capitalize mt-3">
          <h1 className="text-light">
            <strong>{fullName}</strong>
          </h1>
          <h2 className="border-top border-bottom text-muted">{jobTitle}</h2>
        </FigureCaption>
      </Figure>

      <CardBody>
        <aside className="d-flex justify-content-center gap-3">
          {socials?.map(({ link, title, image }: Social, index) => (
            <ImageLink
              key={`${index}-image-link`}
              link={{ href: link }}
              image={{
                alt: title,
                src: `/images/${image}`,
                width: 45,
                height: 45,
              }}
            />
          ))}
        </aside>
      </CardBody>

      <CardBody>
        <article className="text-center">
          <header>
            <h3>
              <strong>
                <ins>About Me</ins>
              </strong>
            </h3>
          </header>
          {aboutMe?.map((text, index) => (
            <div key={`${index}-about-me`}>{text}</div>
          ))}
        </article>
      </CardBody>
    </CardDark>
  )
}

Home.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Home
