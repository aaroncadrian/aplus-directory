import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { WebDirectoryPeopleFeatureShell } from '@aplus/web-directory/people/feature-shell';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { environment } from '../environments/environment';

const client = new ApolloClient({
  uri: environment.apollo.uri,
  cache: new InMemoryCache(),
});

export function App() {
  return (
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
  );
}

export default App;
