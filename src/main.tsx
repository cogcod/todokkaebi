import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
// import { onError } from '@apollo/client/link/error';
import { JwtStorageService } from './services/auth/jwt-storage.service.ts';

// api 통신 시 header 설정 추가
const authLink = setContext((_, { headers }) => {
  const accessToken = JwtStorageService.getToken();
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

// link-error level 핸들링
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   // TODO : 토큰 만료 시 자동 갱신
//   if (graphQLErrors) {
//     graphQLErrors.forEach(({ message, locations, path }) => {
//       console.log(`[GraphQL error] Message: ${message}, Location: ${locations}, Path: ${path}`);
//     });
//   }
//   if (networkError) {
//     console.log(`[Network error]: ${networkError}`);
//   }
// });

// error, auth 링크 하나로 결합하여 순서대로 처리
const httpLink = new HttpLink({ uri: 'http://54.180.61.91:5000/graphql/' });
const link = ApolloLink.from([authLink.concat(httpLink)]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
);
