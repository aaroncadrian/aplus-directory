import React from 'react';
import { FieldInputProps, FieldRenderProps } from 'react-final-form';
import { NonCancelableEventHandler } from '@awsui/components-react/internal/events';

export type AwsSelectRenderProps<
  FieldValue,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue
> = Omit<FieldRenderProps<T>, 'input'> & {
  input: Omit<
    FieldInputProps<InputValue, T>,
    'onChange' | 'onBlur' | 'onFocus'
  > & {
    /**
     * Called when input focus is removed from the UI control.
     */
    onBlur: NonCancelableEventHandler;
    /**
     * Called when input focus is set onto the UI control.
     */
    onFocus: NonCancelableEventHandler;
    /**
     * Called whenever a user changes the input value (by typing or pasting).
     * The event `detail` contains the current value of the field.
     */
    onChange: (event: unknown) => void;
  };
};

export function renderAwsSelect<
  FieldValue,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue
>(
  component: (
    props: AwsSelectRenderProps<FieldValue, T, InputValue>
  ) => React.ReactNode
) {
  return (
    fieldRenderProps: FieldRenderProps<FieldValue, T, InputValue>
  ): JSX.Element => {
    return (
      <>
        {component(
          fieldRenderProps as unknown as AwsSelectRenderProps<
            FieldValue,
            T,
            InputValue
          >
        )}
      </>
    );
  };
}
