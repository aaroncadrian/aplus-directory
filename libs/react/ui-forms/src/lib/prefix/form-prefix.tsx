import React, { useCallback, useContext, useMemo } from 'react';

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
  excludePreviousPrefix?: boolean;
}) => {
  const { prefix, children, excludePreviousPrefix = false } = props;

  const prevPrefix = useFormPrefix();

  const prefixValue = useMemo(() => {
    if (excludePreviousPrefix || !prevPrefix) {
      return prefix;
    }

    return `${prevPrefix}.${prefix}`;
  }, [prefix, excludePreviousPrefix, prevPrefix]);

  return (
    <PrefixContext.Provider value={prefixValue}>
      {children}
    </PrefixContext.Provider>
  );
};
