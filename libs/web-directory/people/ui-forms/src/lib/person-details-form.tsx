import { FormField, Input, SpaceBetween } from '@awsui/components-react';
import { Field } from 'react-final-form';

const FIELDS = [
  {
    name: 'firstName',
    label: 'First Name',
  },
  {
    name: 'middleName',
    label: 'Middle Name',
  },
  {
    name: 'lastName',
    label: 'Last Name',
  },
];

export const PersonDetailsForm = () => {
  return (
    <SpaceBetween size={'m'}>
      {FIELDS.map((field) => (
        <Field key={field.name} name={field.name}>
          {({ input: { value, onChange, onFocus, onBlur } }) => (
            <FormField label={field.label}>
              <Input
                value={value}
                onBlur={onBlur as any}
                onFocus={onFocus as any}
                onChange={(event) => onChange(event.detail.value)}
              />
            </FormField>
          )}
        </Field>
      ))}
    </SpaceBetween>
  );
};
