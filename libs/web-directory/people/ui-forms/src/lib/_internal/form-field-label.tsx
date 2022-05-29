import React from 'react';

export interface FormFieldLabelProps {
  children?: React.ReactNode;
  optional?: boolean;
}

export const FormFieldLabel = (props: FormFieldLabelProps) => {
  const { children, optional } = props;

  return (
    <span>
      {children} {optional && <i> - optional</i>}
    </span>
  );
};
