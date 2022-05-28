import {
  FormField,
  Input,
  Select,
  SelectProps,
  SpaceBetween,
} from '@awsui/components-react';
import { Field } from 'react-final-form';
import DatePicker from '@awsui/components-react/date-picker';

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
  {
    name: 'nickname',
    label: 'Nickname',
  },
];

const GENDER_SELECT_OPTIONS: SelectProps.Options = [
  {
    label: 'Man',
    value: 'MAN',
  },
  {
    label: 'Woman',
    value: 'WOMAN',
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

      <Field name={'gender'}>
        {({ input: { value, onChange, onFocus, onBlur } }) => (
          <FormField label={'Gender'}>
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
          <FormField label={'Date of Birth'}>
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
