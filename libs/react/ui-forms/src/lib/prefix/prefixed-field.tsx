import { Field, FieldProps, FieldRenderProps } from 'react-final-form';
import { usePrefixFieldName } from './form-prefix';

export type PrefixedFieldProps<
  FieldValue,
  RP extends FieldRenderProps<FieldValue, T, InputValue>,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue
> = FieldProps<FieldValue, RP, T, InputValue>;

export function PrefixedField<
  FieldValue,
  RP extends FieldRenderProps<FieldValue, T, InputValue>,
  T extends HTMLElement = HTMLElement,
  InputValue = FieldValue
>(props: PrefixedFieldProps<FieldValue, RP, T, InputValue>) {
  const { name, ...restProps } = props;
  const prefix = usePrefixFieldName();

  return (
    <Field<FieldValue, T, InputValue, RP> {...restProps} name={prefix(name)} />
  );
}
