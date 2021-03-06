import {
  Autosuggest,
  Button,
  Grid,
  Input,
  SpaceBetween,
} from '@awsui/components-react';
import { FieldArray } from 'react-final-form-arrays';
import { Field } from 'react-final-form';
import { GridProps } from '@awsui/components-react/grid';
import { FormFieldLabel } from './_internal/form-field-label';
import { renderAwsField } from './_internal/render-aws-field';
import { parsePhoneNumber } from '@aplus/react/ui-forms';

const GRID_DEF: ReadonlyArray<GridProps.ElementDefinition> = [
  { colspan: { default: 12, m: 4 } },
  { colspan: { default: 12, m: 4 } },
  { colspan: { default: 12, m: 4 } },
];

const PHONE_TYPE_OPTIONS = [
  {
    value: 'Cell',
  },
  {
    value: 'Home',
  },
  {
    value: 'Work',
  },
];

export const PhoneNumbersForm = () => {
  return (
    <SpaceBetween size={'m'}>
      <FieldArray name={'phones'}>
        {({ fields }) => (
          <>
            {(fields.length ?? 0) > 0 && (
              <Grid gridDefinition={GRID_DEF}>
                <div>
                  <FormFieldLabel>Phone Number</FormFieldLabel>
                </div>
                <div>
                  <FormFieldLabel optional>Phone Type</FormFieldLabel>
                </div>
                <div></div>
              </Grid>
            )}

            {fields.map((name, index) => (
              <Grid key={name} gridDefinition={GRID_DEF}>
                <Field name={`${name}.phoneNumber`} parse={parsePhoneNumber}>
                  {renderAwsField(
                    ({ input: { value, onChange, onFocus, onBlur } }) => (
                      <Input
                        autoFocus
                        value={value}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChange={(event) => onChange(event.detail.value)}
                      />
                    )
                  )}
                </Field>

                <Field name={`${name}.phoneType`}>
                  {renderAwsField(
                    ({ input: { value, onChange, onFocus, onBlur } }) => (
                      <Autosuggest
                        options={PHONE_TYPE_OPTIONS}
                        enteredTextLabel={(value) => value}
                        value={value}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChange={(event) => onChange(event.detail.value)}
                      />
                    )
                  )}
                </Field>

                <SpaceBetween size={'s'} direction={'horizontal'}>
                  <Button
                    formAction={'none'}
                    onClick={() => fields.move(index, index - 1)}
                    disabled={index === 0}
                  >
                    Move Up
                  </Button>

                  <Button
                    formAction={'none'}
                    onClick={() => fields.move(index, index + 1)}
                    disabled={index + 1 === fields.length}
                  >
                    Move Down
                  </Button>

                  <Button
                    formAction={'none'}
                    onClick={() => fields.remove(index)}
                  >
                    Remove
                  </Button>
                </SpaceBetween>
              </Grid>
            ))}
          </>
        )}
      </FieldArray>

      <FieldArray name={'phones'}>
        {({ fields }) => (
          <Button
            formAction={'none'}
            onClick={() => {
              fields.push({
                phoneType: '',
                phoneNumber: '',
              });
            }}
          >
            Add Phone
          </Button>
        )}
      </FieldArray>
    </SpaceBetween>
  );
};
