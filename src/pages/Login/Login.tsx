import { useQuery } from '@apollo/client';
import { GET_KAKAO_AUTH_URL } from '../../query/query';
import { ReactComponent as KakaoLogo } from '/src/assets/images/kakao_logo.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_KAKAO_AUTH_URL);

  const handleKakaoLogin = () => {
    if (data && data.getKakaoLoginUrl) {
      window.location.href = data.getKakaoLoginUrl.url;
    }
  };
  const moveToHome = () => {
    navigate('/home');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center text-center">
        <div className="w-52 h-56 bg-gr-50 rounded-20 mx-auto mb-[30px]"></div>
        <div className="mb-[132px]">
          <div className="text-pr-700 text-28 font-semi mb-[16px]">
            투두깨비와 함께
            <br />
            자기계발에 성공해 보세요!
          </div>
          <p className="text-18 text-gr-700">한 눈에 보는 나의 성장 과정</p>
        </div>
        <div className="px-20">
          <button
            className="flex justify-center items-center py-[14.5px] mb-[24px] btn-full bg-[#FEE500] rounded-6"
            onClick={handleKakaoLogin}
          >
            <KakaoLogo />
            <p className="ml-[8px]">카카오 로그인</p>
          </button>
          <button className="btn-full text-gr-700" onClick={moveToHome}>
            로그인 없이 둘러보기
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
