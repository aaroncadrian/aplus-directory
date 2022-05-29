import React from 'react';
import { FieldInputProps, FieldRenderProps } from 'react-final-form';
import { NonCancelableEventHandler } from '@awsui/components-react/internal/events';

export type AwsFieldRenderProps<
  FieldValue,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue
> = Omit<FieldRenderProps<T>, 'input'> & {
  input: Omit<
    FieldInputProps<InputValue, T>,
    'onChange' | 'onBlur' | 'onFocus'
  > & {
    onBlur: NonCancelableEventHandler<null>;
    /**
     * Called when input focus is moved to the UI control.
     */
    onFocus: NonCancelableEventHandler<null>;
    /**
     * Called whenever a user changes the input value (by typing or pasting).
     * The event `detail` contains the current value of the field.
     */
    onChange: (event: unknown) => void;
  };
};

export function renderAwsField<
  FieldValue,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue
>(
  component: (
    props: AwsFieldRenderProps<FieldValue, T, InputValue>
  ) => React.ReactNode
) {
  return (
    fieldRenderProps: FieldRenderProps<FieldValue, T, InputValue>
  ): JSX.Element => {
    return (
      <>
        {component(
          fieldRenderProps as unknown as AwsFieldRenderProps<
            FieldValue,
            T,
            InputValue
          >
        )}
      </>
    );
  };
}
