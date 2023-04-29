import type { InputHTMLAttributes } from "react";

import '../../styles/components/form/input.css';

type InputNative = InputHTMLAttributes<HTMLInputElement>
type CustomInput = {label?: string}

type Props = InputNative & CustomInput;


export const Input = ({label, ...props}: Props) => {
  return (
    <div className="input-custom-group">
      <label htmlFor={props.id}>{label}</label>
      <input className="text-input" {...props}/>
    </div>
  )
}
