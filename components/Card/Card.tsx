import type { CardProps } from '@/components/types'

export const Card = (props: CardProps) => {
  const { children, className } = props
  const classNames = ['card', className ?? ''].join(' ').trim()
  return <div className={classNames}>{children}</div>
}

export default Card
