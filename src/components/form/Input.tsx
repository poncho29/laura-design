import type { InputHTMLAttributes } from "react";

import '../../styles/components/form/Input.css';

type InputNative = InputHTMLAttributes<HTMLInputElement>
type CustomInput = {
  label?: string;
  error?: string;
  hint?: string;
}

type Props = InputNative & CustomInput;

export const Input = ({ label, error, hint, className, ...props }: Props) => {
  const { id, required } = props;
  const errorId = id ? `${id}-error` : undefined;
  const hintId = id && hint ? `${id}-hint` : undefined;
  const describedBy = [error ? errorId : undefined, hintId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
        {required
          ? <span className="field-required" aria-hidden="true"> *</span>
          : <span className="field-optional"> (opcional)</span>}
      </label>
      <input
        {...props}
        className={`field-control text-input${error ? ' is-invalid' : ''}${className ? ` ${className}` : ''}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      {hint && <p id={hintId} className="field-hint">{hint}</p>}
      {error && <p id={errorId} className="field-error">{error}</p>}
    </div>
  )
}
