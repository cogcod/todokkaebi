import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
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
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(async ({ message, locations, path }) => {
      console.log(`[GraphQL error] Message: ${message}, Location: ${locations}, Path: ${path}`);
      // 토큰 만료시 자동 갱신
      if (message.includes('Unauthorized')) {
        // ====>
        // const newAccessToken = await refreshAccessToken();
        // if (newAccessToken) {
        //   JwtStorageService.setAccessToken(newAccessToken);
        //   // 새로운 accessToken이 발급되면, 동일한 요청을 다시 시도
        //   operation.setContext(({ headers }) => ({
        //     headers: {
        //       ...headers,
        //       authorization: `Bearer ${newAccessToken}`,
        //     },
        //   }));
        //   return forward(operation);
        //   // client.resetStore(); // 캐시를 초기화
        // }
      }
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// error, auth 링크 하나로 결합하여 순서대로 처리
const httpLink = new HttpLink({ uri: 'https://aws-api-todo.cothi.net/graphql' });
const link = ApolloLink.from([errorLink, authLink.concat(httpLink)]);

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
