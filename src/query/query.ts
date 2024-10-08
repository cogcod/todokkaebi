import { gql } from '@apollo/client';

// ==[QUERY : GET]==

// 카카오 로그인 - url 조회
export const GET_KAKAO_LOGIN_URL = gql`
  query GetKakaoLoginUrl($input: GetKakaoLoginUrlInput!) {
    getKakaoLoginUrl(input: $input) {
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

// 대분류 - 모든 프로젝트 조회
export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    getAllProjects {
      success
      total
      projects {
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

// 대분류 - 특정 프로젝트 조회
export const GET_PROJECT_DETAIL = gql`
  query GetProject($input: GetProjectInput!) {
    getProject(input: $input) {
      success
      project {
        id
        name
        userId
        totalTask
        completeTask
        endDate
        startDate
        categories {
          id
          name
          projectId
          actualEndDate
          actualStartDate
          startedAt
          endedAt
          tasks {
            id
            actualStartDate
            actualEndDate
            startDate
            endDate
            title
            check
            status
            categoryId
          }
        }
      }
    }
  }
`;
