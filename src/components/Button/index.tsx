import React, { ReactNode } from 'react'

interface Props {
  onClick?: () => void
  title?: string
  children: ReactNode
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  onClick,
  title,
  children,
  disabled,
}: Props) => {
  return (
    <button onClick={onClick} type="button" title={title} disabled={disabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  onClick: (): void => {},
  disabled: false,
  title: '',
}

export default Button
