import { FormField, Input, SpaceBetween } from '@awsui/components-react';
import { Field } from 'react-final-form';
import { renderAwsField } from '../_internal/render-aws-field';

export const EmailAddressForm = (props: { autoFocus?: boolean }) => {
  const { autoFocus } = props;

  return (
    <SpaceBetween size={'m'}>
      <Field name={'emailAddress'}>
        {renderAwsField(
          ({ input: { value, onChange, onFocus, onBlur }, meta }) => (
            <FormField
              label={'Email Address'}
              errorText={meta.touched && meta?.error?.message}
            >
              <Input
                autoFocus={autoFocus}
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={(event) => onChange(event.detail.value)}
              />
            </FormField>
          )
        )}
      </Field>
    </SpaceBetween>
  );
};
