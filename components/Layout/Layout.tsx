import type { LayoutProps } from '@/components/types'
import { NavigationBar, FooterDark } from '@/components'
import { getBrandTitle, getFullName, getResumeFile } from '@/libs/profile'
import { getFooter, getLinks } from '@/libs/config'
import Head from 'next/head'

export const Layout = ({ children }: LayoutProps) => {
  const brandTitle = getBrandTitle()
  const resume = getResumeFile()
  const links = getLinks()
  const footer = getFooter()
  const fullName = getFullName()

  return (
    <>
      <Head>
        <title>{fullName}</title>
      </Head>
      <div className="d-flex flex-column vh-100">
        <header className="fixed-top">
          <NavigationBar title={brandTitle} resume={resume} links={links} />
        </header>
        <main className="flex-grow-1 mt-5">
          <div className="container mt-3">{children}</div>
        </main>
        <footer className="mt-2">
          <FooterDark text={footer} />
        </footer>
      </div>
    </>
  )
}

export default Layout
