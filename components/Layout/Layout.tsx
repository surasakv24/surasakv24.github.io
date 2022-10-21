import type { LayoutProps } from '@/components/types'
import { NavigationBar } from '@/components'
import { getBrandTitle, getResumeFile } from '@/libs/profile'
import { getLinks } from '@/libs/config'

export const Layout = ({ children }: LayoutProps) => {
  const brandTitle = getBrandTitle()
  const resume = getResumeFile()
  const links = getLinks()

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <NavigationBar title={brandTitle} resume={resume} links={links} />
      </header>
      <main className="flex-grow-1">
        <span>{children}</span>
      </main>
      <footer>
        <span>footer</span>
      </footer>
    </div>
  )
}

export default Layout
