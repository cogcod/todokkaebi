import { gql } from '@apollo/client';

// ==[MUTAION : PUT/POST/DELETE]==

// 카카오 로그인 - 인증 후 토큰 발급
export const COMPLETE_KAKAO_AUTHENTICATION = gql`
  mutation KakaoAuth($code: String!) {
    kakaoAuth(input: { code: $code }) {
      accessToken
      refreshToken
    }
  }
`;

// 회원 가입
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      accessToken
      refreshToken
    }
  }
`;

// 회원정보 업데이트
export const UPDATE_USER_INFO = gql`
  mutation UpdateUserInfo($input: UpdateUserInfoInput!) {
    updateUserInfo(input: $input) {
      id
      email
      nickname
      birthday
    }
  }
`;

// 회원 탈퇴
export const DELETE_USER = gql`
  mutation DeleteUser {
    deleteUser {
      success
    }
  }
`;
