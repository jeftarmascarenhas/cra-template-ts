import React, { FunctionComponent, ReactNode } from 'react'

interface Props {
  onClick?: () => void
  title?: string
  children: ReactNode
  disabled?: boolean
}

const Button: FunctionComponent<Props> = ({
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

export default Button
