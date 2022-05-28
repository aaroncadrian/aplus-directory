import { Route, Routes } from 'react-router-dom';
import WebDirectoryPeopleFeatureCreate from '@aplus/web-directory/people/feature-create';

export function WebDirectoryPeopleFeatureShell() {
  return (
    <Routes>
      <Route path={'create'} element={<WebDirectoryPeopleFeatureCreate />} />
    </Routes>
  );
}

export default WebDirectoryPeopleFeatureShell;
