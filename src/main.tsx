import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { JwtStorageService } from './services/auth/jwt-storage.service.ts';
// import useReissueAccessToken from './utils/useReissueAccessToken.tsx';

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
      // if (message.includes('인증되지 않은 접근입니다')) {
      //   try {
      //     const newAccessToken = await useReissueAccessToken(); // 토큰 재발급
      //     console.log('newAccessToken', newAccessToken);
      //     // if (newAccessToken) {
      //     //   operation.setContext(({ headers = {} }) => ({
      //     //     headers: {
      //     //       ...headers,
      //     //       authorization: `Bearer ${newAccessToken}`, // 새로운 accessToken으로 헤더 업데이트
      //     //     },
      //     //   }));
      //     //   return forward(operation); // 동일한 요청 다시 시도
      //     // }
      //   } catch (err) {
      //     console.error('Failed to reissue access token:', err);
      //   }
      // }
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
