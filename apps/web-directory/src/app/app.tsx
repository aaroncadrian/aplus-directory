import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { WebDirectoryPeopleFeatureShell } from '@aplus/web-directory/people/feature-shell';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { environment } from '../environments/environment';
import { Suspense } from 'react';

const client = new ApolloClient({
  uri: environment.apollo.uri,
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={<Link to={'/people/create'}>Create Person</Link>}
            />

            <Route
              path={'people/*'}
              element={<WebDirectoryPeopleFeatureShell />}
            />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Suspense>
  );
}

export default App;
