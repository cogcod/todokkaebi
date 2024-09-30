import { gql } from '@apollo/client';

// ==[query : 조회]==

// 카카오 로그인 - url 조회
export const GET_KAKAO_AUTH_URL = gql`
  query GetKakaoLoginUrl {
    getKakaoLoginUrl {
      url
    }
  }
`;

// 회원정보 조회
export const GET_USER_INFO = gql`
  query GetUserInfo {
    getUserInfo {
      id
      email
      nickname
      birthday
    }
  }
`;
