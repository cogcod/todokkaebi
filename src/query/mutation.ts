import { gql } from '@apollo/client';

// ==[mutaion : 추가/수정/삭제]==

// 카카오 로그인 - 인증 후 토큰 발급
export const COMPLETE_KAKAO_CERTIFICATION = gql`
  mutation KakaoAuth($code: String!) {
    kakaoAuth(input: { code: $code }) {
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
