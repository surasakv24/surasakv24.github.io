import type { LayoutProps } from '@/components/types'
import { NavigationBar } from '@/components'
import { getBrandTitle, getResumeFile } from '@/libs/profile'

export const Layout = ({ children }: LayoutProps) => {
  const brandTitle = getBrandTitle()
  const resume = getResumeFile()
  console.log('resume: ', resume)

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <NavigationBar title={brandTitle} resume={resume} />
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
