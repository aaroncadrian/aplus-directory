import {
  FormField,
  Input,
  Select,
  SelectProps,
  SpaceBetween,
} from '@awsui/components-react';
import { Field } from 'react-final-form';
import DatePicker from '@awsui/components-react/date-picker';
import { FormFieldLabel } from './_internal/form-field-label';
import { renderAwsField } from './_internal/render-aws-field';

const FIELDS = [
  {
    name: 'firstName',
    label: 'First Name',
    autoFocus: true,
  },
  {
    name: 'middleName',
    label: 'Middle Name',
    optional: true,
  },
  {
    name: 'lastName',
    label: 'Last Name',
  },
  {
    name: 'nickname',
    label: 'Nickname',
    optional: true,
  },
];

const GENDER_SELECT_OPTIONS: SelectProps.Options = [
  {
    value: 'Man',
  },
  {
    value: 'Woman',
  },
];

export const PersonDetailsForm = () => {
  return (
    <SpaceBetween size={'m'}>
      {FIELDS.map((field) => (
        <Field key={field.name} name={field.name}>
          {renderAwsField(({ input: { value, onChange, onFocus, onBlur } }) => (
            <FormField
              label={
                <FormFieldLabel optional={field.optional}>
                  {field.label}
                </FormFieldLabel>
              }
            >
              <Input
                autoFocus={field.autoFocus}
                value={value}
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={(event) => onChange(event.detail.value)}
              />
            </FormField>
          ))}
        </Field>
      ))}

      <Field name={'gender'}>
        {({ input: { value, onChange, onFocus, onBlur } }) => (
          <FormField label={<FormFieldLabel optional>Gender</FormFieldLabel>}>
            <Select
              options={GENDER_SELECT_OPTIONS}
              selectedOption={value}
              onBlur={onBlur as any}
              onFocus={onFocus as any}
              onChange={(event) => onChange(event.detail.selectedOption)}
            />
          </FormField>
        )}
      </Field>

      <Field name={'dateOfBirth'}>
        {({ input: { value, onChange, onFocus, onBlur } }) => (
          <FormField
            label={<FormFieldLabel optional>Date of Birth</FormFieldLabel>}
          >
            <DatePicker
              placeholder={'yyyy/mm/dd'}
              todayAriaLabel={'Today'}
              nextMonthAriaLabel={'Next Month'}
              previousMonthAriaLabel={'Previous Month'}
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
