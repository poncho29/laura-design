import { TextareaHTMLAttributes } from "react";

import '../../styles/components/form/Textarea.css';

type TextareaNative = TextareaHTMLAttributes<HTMLTextAreaElement>
type CustomInput = {
  label?: string;
  error?: string;
  hint?: string;
  /** Shows a "current/max" counter (needs maxLength). */
  counter?: boolean;
}

type Props = TextareaNative & CustomInput;

export const Textarea = ({ label, error, hint, counter, className, ...props }: Props) => {
  const { id, required, maxLength, value } = props;
  const errorId = id ? `${id}-error` : undefined;
  const hintId = id && hint ? `${id}-hint` : undefined;
  const describedBy = [error ? errorId : undefined, hintId].filter(Boolean).join(' ') || undefined;
  const length = typeof value === 'string' ? value.length : 0;

  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
        {required
          ? <span className="field-required" aria-hidden="true"> *</span>
          : <span className="field-optional"> (opcional)</span>}
      </label>
      <textarea
        {...props}
        className={`field-control textarea${error ? ' is-invalid' : ''}${className ? ` ${className}` : ''}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
      <div className="field-meta">
        <div>
          {hint && <p id={hintId} className="field-hint">{hint}</p>}
          {error && <p id={errorId} className="field-error">{error}</p>}
        </div>
        {counter && maxLength ? (
          <span className="field-counter" aria-hidden="true">{length}/{maxLength}</span>
        ) : null}
      </div>
    </div>
  )
}
