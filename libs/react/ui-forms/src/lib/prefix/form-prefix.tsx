import React, { useContext } from 'react';

const PrefixContext = React.createContext<string | undefined>(undefined);

export const useFormPrefix = () => {
  return useContext(PrefixContext);
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
