import { FormField, Input, SpaceBetween } from '@awsui/components-react';
import { Field } from 'react-final-form';

export const EmailAddressForm = () => {
  return (
    <SpaceBetween size={'m'}>
      <Field name={'emailAddress'}>
        {({ input: { value, onChange, onFocus, onBlur } }) => (
          <FormField label={'Email Address'}>
            <Input
              value={value}
              onBlur={onBlur as any}
              onFocus={onFocus as any}
              onChange={(event) => onChange(event.detail.value)}
            />
          </FormField>
        )}
      </Field>
    </SpaceBetween>
  );
};
