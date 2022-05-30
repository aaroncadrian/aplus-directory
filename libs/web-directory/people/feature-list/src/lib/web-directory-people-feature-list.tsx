import { gql, useQuery } from '@apollo/client';
import {
  BreadcrumbGroup,
  Button,
  Header,
  SpaceBetween,
  Table,
  TableProps,
} from '@awsui/components-react';
import { Person } from '@aplus/shared/people/domain';
import React from 'react';
import { get } from 'lodash/fp';
import { useNavigate } from 'react-router-dom';

const LIST_PEOPLE = gql`
  query ListPeople {
    listPeople {
      id
      firstName
      lastName
    }
  }
`;

const COLUMN_DEFS: TableProps.ColumnDefinition<Person>[] = [
  {
    id: 'firstName',
    header: 'First Name',
    cell: (item: Person): React.ReactNode => item.firstName,
  },
  {
    id: 'lastName',
    header: 'Last Name',
    cell: (item: Person): React.ReactNode => item.lastName,
  },
];

const trackById = get('id');

export function WebDirectoryPeopleFeatureList() {
  const { loading, data } = useQuery(LIST_PEOPLE);

  const navigate = useNavigate();

  return (
    <SpaceBetween size={'l'}>
      <BreadcrumbGroup
        items={[
          {
            text: 'Directory',
            href: '/',
          },
          {
            text: 'People',
            href: '/people',
          },
        ]}
        onClick={(event) => {
          console.log('onclick');
          event.preventDefault();
        }}
        onFollow={(event) => {
          console.log('onfollow');

          event.preventDefault();
          navigate(event.detail.href);
        }}
      />

      <Table
        header={
          <Header
            actions={
              <Button onClick={() => navigate('create')} variant={'primary'}>
                Create Person
              </Button>
            }
          >
            People
          </Header>
        }
        trackBy={trackById}
        columnDefinitions={COLUMN_DEFS}
        loading={loading}
        items={data?.listPeople}
        empty={'There are no items'}
      />
    </SpaceBetween>
  );
}

export default WebDirectoryPeopleFeatureList;
