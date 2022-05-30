import { gql, useMutation } from '@apollo/client';

const CREATE_PERSON = gql`
  mutation CreatePersonPage_CreatePerson($input: CreatePersonInput!) {
    createPerson(input: $input) {
      id
    }
  }
`;

export const useCreatePerson = () => {
  const [mutate, { loading, data, error }] = useMutation(CREATE_PERSON, {
    onError: () => void 0,
  });

  // TODO: Add type safety
  const execute = (props: { input: any }) => {
    const { input } = props;

    mutate({
      variables: {
        input,
      },
    });
  };

  return {
    execute,
    loading,
    error,
    data: data?.createPerson,
  };
};
