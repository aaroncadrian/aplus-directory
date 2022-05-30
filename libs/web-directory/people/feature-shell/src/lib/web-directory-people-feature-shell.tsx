import { Route, Routes } from 'react-router-dom';
import ListPeoplePage from '@aplus/web-directory/people/feature-list';
import React from 'react';

const CreatePersonPage = React.lazy(
  () => import('@aplus/web-directory/people/feature-create')
);

export function WebDirectoryPeopleFeatureShell() {
  return (
    <Routes>
      <Route index element={<ListPeoplePage />} />

      <Route path={'create'} element={<CreatePersonPage />} />
    </Routes>
  );
}

export default WebDirectoryPeopleFeatureShell;
