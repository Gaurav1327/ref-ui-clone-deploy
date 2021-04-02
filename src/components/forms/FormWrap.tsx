import React from 'react';
import SubmitButton from './SubmitButton';

interface FormWrapProps {
  title?: string;
  buttonText?: string;
  canSubmit?: boolean;
  onSubmit: (event: React.FormEvent) => void;
}

export default function FormWrap({
  children,
  title,
  buttonText,
  canSubmit = true,
  onSubmit,
}: React.PropsWithChildren<FormWrapProps>) {
  return (
    <form
      className="bg-secondary shadow-2xl rounded px-8 pt-6 pb-1"
      onSubmit={onSubmit}
    >
      {title && <h2 className="formTitle font-bold text-2xl text-center pb-2">{title}</h2>}
      {children}
      <SubmitButton disabled={!canSubmit} text={buttonText || title} />
    </form>
  );
}
