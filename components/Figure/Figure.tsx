import type { FigureProps } from '@/components/types'

export const Figure = (props: FigureProps) => {
  const { children, className } = props
  const classNames = ['figure', className].join(' ').trim()

  return <figure className={classNames}>{children}</figure>
}

export default Figure
