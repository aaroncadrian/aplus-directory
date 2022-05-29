import { WebDirectoryEnvironment } from './web-directory-environment.interface';

export const environment: WebDirectoryEnvironment = {
  production: true,

  apollo: {
    // TODO: Pass production variable for uri
    uri: '',
  },
};
