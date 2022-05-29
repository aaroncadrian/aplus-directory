import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { WebDirectoryPeopleFeatureShell } from '@aplus/web-directory/people/feature-shell';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Link to={'/people/create'}>Create Person</Link>}
        />

        <Route path={'people/*'} element={<WebDirectoryPeopleFeatureShell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
