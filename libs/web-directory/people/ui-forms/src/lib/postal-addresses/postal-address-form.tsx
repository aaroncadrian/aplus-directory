import { FormField, Input, SpaceBetween } from '@awsui/components-react';
import { Field } from 'react-final-form';
import { renderAwsField } from '../_internal/render-aws-field';

const FIELDS = [
  {
    name: 'line1',
    label: 'Line 1',
  },
  {
    name: 'line2',
    label: 'Line 2',
  },
  {
    name: 'city',
    label: 'City',
  },
  {
    name: 'state',
    label: 'State',
  },
  {
    name: 'zipCode',
    label: 'Zip Code',
  },
  {
    name: 'country',
    label: 'Country',
  },
];

export const PostalAddressForm = () => {
  return (
    <SpaceBetween size={'m'}>
      {FIELDS.map((field) => (
        <Field key={field.name} name={field.name}>
          {renderAwsField(({ input: { value, onChange, onFocus, onBlur } }) => (
            <FormField label={field.label}>
              <Input
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={(event) => onChange(event.detail.value)}
              />
            </FormField>
          ))}
        </Field>
      ))}
    </SpaceBetween>
  );
};
