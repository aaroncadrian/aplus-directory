import { gql, useQuery } from '@apollo/client';
import { Person } from '@aplus/shared/people/domain';

const DESCRIBE_PERSON = gql`
  query DescribePersonPage_DescribePerson($personId: ID!) {
    describePerson(personId: $personId) {
      id
      firstName
      lastName
      phones {
        id
        phoneNumber
        phoneType
      }
    }
  }
`;

export const useDescribePerson = (props: { personId: string | undefined }) => {
  const { personId } = props;

  const { loading, data, error } = useQuery<{ describePerson: Person }>(
    DESCRIBE_PERSON,
    {
      variables: {
        personId,
      },
      skip: !personId,
    }
  );

  return {
    loading,
    data: data?.describePerson,
    error,
  };
};
