import React, { useCallback, useContext } from 'react';

const PrefixContext = React.createContext<string | undefined>(undefined);

export const useFormPrefix = () => {
  return useContext(PrefixContext);
};

export const usePrefixFieldName = () => {
  const prefix = useFormPrefix();

  return useCallback(
    (name: string) => {
      if (prefix) {
        return `${prefix}.${name}`;
      }

      return name;
    },
    [prefix]
  );
};

export const PrefixProvider = (props: {
  prefix: string;
  children?: React.ReactNode;
}) => {
  const { prefix, children } = props;

  return (
    <PrefixContext.Provider value={prefix}>{children}</PrefixContext.Provider>
  );
};
