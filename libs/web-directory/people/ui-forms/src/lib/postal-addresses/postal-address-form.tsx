import { FormField, Input, SpaceBetween } from '@awsui/components-react';
import { renderAwsField } from '../_internal/render-aws-field';
import { PrefixedField } from '@aplus/react/ui-forms';

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
        <PrefixedField key={field.name} name={field.name}>
          {renderAwsField(
            ({ input: { value, onChange, onFocus, onBlur }, meta }) => (
              <FormField
                label={field.label}
                errorText={meta.touched && meta?.error?.message}
              >
                <Input
                  value={value}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  onChange={(event) => onChange(event.detail.value)}
                />
              </FormField>
            )
          )}
        </PrefixedField>
      ))}
    </SpaceBetween>
  );
};
