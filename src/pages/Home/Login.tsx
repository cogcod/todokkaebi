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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">TODOKKAEBI</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          투두깨비에 오신 것을 환영합니다!😄
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleKakaoLogin}
            >
              KAKAO LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
