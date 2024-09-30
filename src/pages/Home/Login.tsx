import { useQuery, useReactiveVar } from '@apollo/client';
import examValue from '../../modules/exam';
import { GET_KAKAO_AUTH_URL } from '../../query/query';

function Login() {
  const { loading, error, data } = useQuery(GET_KAKAO_AUTH_URL);
  const exam = useReactiveVar(examValue);
  console.log('apollo 전역변수 test ==>', exam);
  // examValue('state 값 변경');

  const handleKakaoLogin = () => {
    if (data && data.getKakaoLoginUrl) {
      window.location.href = data.getKakaoLoginUrl.url;
    }
  };
  const moveToHome = () => {
    window.location.href = '/home';
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex w-full justify-center sm:mx-auto sm:w-full sm:max-w-sm text-6xl">👹</div>
        <div className="flex w-full justify-center my-10 sm:mx-auto sm:w-full sm:max-w-sm text-2xl">
          투두깨비에 오신 것을 환영합니다!😄
        </div>
        <div className="flex w-full justify-center bg-gray-500 border-solid border-2 border-gray-600 h-56 w-50 m-auto"></div>
        <div className="w-full justify-center sm:mx-auto sm:w-full sm:max-w-sm">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleKakaoLogin}
          >
            KAKAO LOGIN
          </button>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={moveToHome}
          >
            건너뛰기
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
