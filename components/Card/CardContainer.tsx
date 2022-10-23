import type { CardContainerProps } from '@/components/types'

export const CardContainer = (props: CardContainerProps) => {
  const { children, className, ...containerProps } = props
  const classNames = className ?? 'col col-lg-8'
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className={classNames} {...containerProps}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CardContainer
