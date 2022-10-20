import { Layout } from '@/components'
import { ReactNode } from 'react'
import { NextPageWithLayout } from './_app'

type ContactsProps = {}

const Contacts: NextPageWithLayout = (props: ContactsProps) => {
  return (
    <div>
      <h1>Contacts page</h1>
    </div>
  )
}

Contacts.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>
}

export default Contacts
