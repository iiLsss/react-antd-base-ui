import React, { ButtonHTMLAttributes } from "react"
import {Button as AButton, ButtonProps as AButtonProps} from 'antd'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps | AButtonProps> = (props) => {
  const { children } = props
  return <AButton type='primary'>{children}</AButton>
}

export default Button
export type { ButtonProps }
