// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

import { WebDirectoryEnvironment } from './web-directory-environment.interface';

export const environment: WebDirectoryEnvironment = {
  production: false,

  apollo: {
    uri: 'http://localhost:3333/graphql',
  },
};
