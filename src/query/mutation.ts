import { gql } from '@apollo/client';

// ==[MUTAION : PUT/POST/DELETE]==

// 카카오 로그인 - 인증 후 토큰 발급
export const COMPLETE_KAKAO_AUTHENTICATION = gql`
  mutation KakaoAuth($input: KakaoAuthCodeInput!) {
    kakaoAuth(input: $input) {
      refreshToken
      accessToken
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

// AccessToken 재발급
export const REISSUE_ACCESSTOKEN = gql`
  mutation ReissueAccessToken($input: ReissueAccessTokenInput!) {
    reissueAccessToken(input: $input) {
      accessToken
    }
  }
`;

// 소분류 업데이트
export const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      success
      task {
        id
        actualStartDate
        actualEndDate
        startDate
        endDate
        title
        check
        status
        categoryId
        totalProjectTask
        completeProjectTask
      }
    }
  }
`;

// 대분류(프로젝트) 삭제
export const DELETE_PROJECT = gql`
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
      success
      project {
        id
        name
        userId
        totalTask
        completeTask
        endDate
        startDate
      }
    }
  }
`;

// 중분류(카테고리) 삭제
export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($input: DeleteCategoryInput!) {
    deleteCategory(input: $input) {
      success
      category {
        id
        name
        projectId
        actualEndDate
        actualStartDate
        startedAt
        endedAt
      }
    }
  }
`;
