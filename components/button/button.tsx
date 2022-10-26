import React, { ButtonHTMLAttributes } from 'react'
import { Button as AButton, ButtonProps as AButtonProps } from 'antd'

interface CustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

type ButtonProps = CustomProps | AButtonProps
const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props
  // 自定义属性
  return <AButton type='primary'>{children}</AButton>
}

export default Button
export type { ButtonProps }
