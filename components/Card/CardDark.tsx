import { Card } from '@/components'
import type { CardProps } from '@/components/types'

export const CardDark = (props: CardProps) => {
  const { children, className } = props
  const classNames = ['text-bg-dark', className ?? ''].join(' ')
  return <Card className={classNames}>{children}</Card>
}

export default CardDark
