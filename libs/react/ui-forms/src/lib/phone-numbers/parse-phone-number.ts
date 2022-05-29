const STRIP_NON_NUMERIC_REGEX = /\D/g;

const PARSE_PHONE_NUMBER_REGEX =
  /(?<area>\d{0,3})(?<prefix>\d{0,3})(?<suffix>\d{0,4})/;

export const parsePhoneNumber = (input: string): string => {
  const strippedInput = input.replace(STRIP_NON_NUMERIC_REGEX, '');

  const parsedInput = PARSE_PHONE_NUMBER_REGEX.exec(strippedInput);

  if (!parsedInput?.groups) {
    return input;
  }

  const { area, prefix, suffix } = parsedInput.groups;

  if (suffix) {
    return `(${area}) ${prefix}-${suffix}`;
  }

  if (prefix) {
    return `(${area}) ${prefix}`;
  }

  if (area) {
    return `${area}`;
  }

  return input;
};
