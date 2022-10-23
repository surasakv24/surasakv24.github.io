import { CardBody, CardDark, ImageWithTitle, Layout } from '@/components'
import { ReactNode } from 'react'
import { getContacts } from '@/libs/profile'
import type { Contact } from '@/libs/profile/types'
import { GetStaticProps } from 'next'

type ContactsProps = {
  contacts: Contact[]
}

export const getStaticProps: GetStaticProps<ContactsProps> = () => {
  return {
    props: {
      contacts: getContacts(),
    },
  }
}

const Contacts = ({ contacts }: ContactsProps) => {
  const iconWidth = 45
  const iconHeight = 45
  return (
    <CardDark>
      <header className="card-header d-flex justify-content-center">
        <h1>
          <strong>
            <ins>Contacts</ins>
          </strong>
        </h1>
      </header>
      <CardBody className="d-flex flex-column gap-4">
        {contacts.map(({ title, image, text }: Contact, index) => (
          <ImageWithTitle
            containerClassName="flex-column justify-content-center text-center"
            image={{
              src: image,
              alt: title,
              width: iconWidth,
              height: iconHeight,
            }}
            title={text}
            key={`${index}-contact`}
          />
        ))}
      </CardBody>
    </CardDark>
  )
}

Contacts.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Contacts
