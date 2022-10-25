import type { FigureCaptionProps } from '@/components/types'

export const FigureCaption = (props: FigureCaptionProps) => {
  const { children, className } = props
  const classNames = ['figure-caption', className].join(' ').trim()

  return <figcaption className={classNames}>{children}</figcaption>
}
export default FigureCaption
