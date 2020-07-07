import React from 'react'

interface Props {
  onClick: () => void
  title?: string
}

const Button: React.FC<Props> = ({ onClick, title }: Props) => {
  return (
    <button onClick={onClick} title={title}>
      Button Text
    </button>
  )
}
export default Button
