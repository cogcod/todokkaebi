import { useMutation } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { COMPLETE_KAKAO_AUTHENTICATION } from '../../query/mutation';
import { JwtStorageService } from '../../services/auth/jwt-storage.service';

function AuthCallback() {
  const [kakaoAuth, { loading, error }] = useMutation(COMPLETE_KAKAO_AUTHENTICATION);
  const location = useLocation();
  const [message, setMessage] = useState('Completing authentication');

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const code = searchParam.get('code');
    if (code) {
      kakaoAuth({ variables: { code } })
        .then(({ data }) => {
          console.log('## data', data);
          JwtStorageService.setAccessToken(data.kakaoAuth.accessToken);
          JwtStorageService.setRefreshToken(data.kakaoAuth.refreshToken);
          setMessage('Authentication successful. Redirecting...');
          setTimeout(() => {
            window.location.href = '/home';
          }, 2000);
        })
        .catch(err => {
          console.error('Authentication error:', err);
          setMessage('Authentication failed. Please try again.');
        });
    } else {
      setMessage('No authentication code found.');
    }
  }, [kakaoAuth, location]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>카카오 로그인 진행중...:D</div>
      <div>{message}</div>
    </>
  );
}

export default AuthCallback;
