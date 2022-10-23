import { CardBody, CardDark, ImageLink, Layout } from '@/components'
import { GetStaticProps } from 'next'
import { ReactNode } from 'react'
import { getProfile } from '@/libs/profile'
import type { Profile, Social } from '@/libs/profile/types'
import Image from 'next/image'

type HomeProps = {
  profile: Profile
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      profile: getProfile(),
    },
  }
}

const Home = ({ profile }: HomeProps) => {
  const {
    profileImage,
    profileImageWidth,
    profileImageHeight,
    fullName,
    jobTitle,
    socials,
    aboutMe,
  } = profile
  return (
    <CardDark className="pt-2">
      <div className="mx-auto p-3">
        <Image
          src={profileImage}
          alt="avatar"
          className="rounded-circle border border-3"
          width={profileImageWidth}
          height={profileImageHeight}
          objectFit="cover"
          objectPosition="50% 25%"
        />
      </div>

      <CardBody>
        <div className="text-center text-capitalize">
          <h1>
            <strong>{fullName}</strong>
          </h1>
          <h2 className="border-top border-bottom text-muted">{jobTitle}</h2>
        </div>
      </CardBody>

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
