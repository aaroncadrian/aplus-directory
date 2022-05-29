import { gql, useQuery } from '@apollo/client';

const LIST_PEOPLE = gql`
  query ListPeople {
    listPeople {
      id
      firstName
      lastName
    }
  }
`;

export function WebDirectoryPeopleFeatureList() {
  const { data } = useQuery(LIST_PEOPLE);

  return (
    <div>
      <h1>Welcome to WebDirectoryPeopleFeatureList!</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default WebDirectoryPeopleFeatureList;
