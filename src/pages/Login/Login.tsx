import { useLazyQuery } from '@apollo/client';
import { GET_KAKAO_LOGIN_URL } from '../../query/query';
import { ReactComponent as KakaoLogo } from '/src/assets/icons/kakao_logo.svg';
import { useNavigate } from 'react-router-dom';
// import { JwtStorageService } from '../../services/auth/jwt-storage.service';

function Login() {
  const navigate = useNavigate();
  const [getKakaoLoginUrl, { loading, error }] = useLazyQuery(GET_KAKAO_LOGIN_URL);

  const handleKakaoLogin = () => {
    const kakaoTest = import.meta.env.VITE_KAKAO_TEST;
    const input = { test: kakaoTest === 'true' };

    getKakaoLoginUrl({ variables: { input } })
      .then(response => {
        const kakaoLoginUrl = response.data.getKakaoLoginUrl.url;
        window.location.href = kakaoLoginUrl;
      })
      .catch(err => {
        console.error('Error fetching Kakao login URL:', err);
      });
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
