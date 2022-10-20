import { LayoutProps } from '@/components/types'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <span>header</span>
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
