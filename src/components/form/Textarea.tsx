import { TextareaHTMLAttributes } from "react";

import '../../styles/components/form/Textarea.css';

type TextareaNative = TextareaHTMLAttributes<HTMLTextAreaElement>
type CustomInput = {label?: string}

type Props = TextareaNative & CustomInput;

export const Textarea = ({label, ...props}: Props) => {
  return (
    <div className="textarea-group">
      <label htmlFor={props.id}>{label}</label>
      <textarea className="textarea" {...props}/>
    </div>
  )
}
