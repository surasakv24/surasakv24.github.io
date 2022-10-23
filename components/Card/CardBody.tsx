import type { CardProps } from '@/components/types'

export const CardBody = (props: CardProps) => {
  const { children, className } = props
  const classNames = ['card-body', className ?? ''].join(' ').trim()
  return <div className={classNames}>{children}</div>
}

export default CardBody
