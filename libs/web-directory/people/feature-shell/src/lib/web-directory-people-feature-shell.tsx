import { Route, Routes } from 'react-router-dom';
import ListPeoplePage from '@aplus/web-directory/people/feature-list';
import React from 'react';

const CreatePersonPage = React.lazy(
  () => import('@aplus/web-directory/people/feature-create')
);

const DescribePersonPage = React.lazy(
  () => import('@aplus/web-directory/people/feature-describe')
);

export function WebDirectoryPeopleFeatureShell() {
  return (
    <Routes>
      <Route index element={<ListPeoplePage />} />

      <Route path={'create'} element={<CreatePersonPage />} />

      <Route path={':personId'} element={<DescribePersonPage />} />
    </Routes>
  );
}

export default WebDirectoryPeopleFeatureShell;
