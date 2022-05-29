import { FormField, Input, SpaceBetween } from '@awsui/components-react';
import { Field } from 'react-final-form';
import { renderAwsField } from '../_internal/render-aws-field';

export const EmailAddressForm = () => {
  return (
    <SpaceBetween size={'m'}>
      <Field name={'emailAddress'}>
        {renderAwsField(({ input: { value, onChange, onFocus, onBlur } }) => (
          <FormField label={'Email Address'}>
            <Input
              value={value}
              onBlur={onBlur}
              onFocus={onFocus}
              onChange={(event) => onChange(event.detail.value)}
            />
          </FormField>
        ))}
      </Field>
    </SpaceBetween>
  );
};
