import { useMutation } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { COMPLETE_KAKAO_CERTIFICATION } from '../../query/mutation';

function AuthCallback() {
  const [completeAuth, { loading, error }] = useMutation(COMPLETE_KAKAO_CERTIFICATION);
  const location = useLocation();
  const [message, setMessage] = useState('Completing authentication');

  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const code = searchParam.get('code');
    if (code) {
      completeAuth({ variables: { code } })
        .then(({ data }) => {
          console.log('## data', data);
          localStorage.setItem('accessToken', data.kakaoAuth.accessToken);
          localStorage.setItem('refreshToken', data.kakaoAuth.refreshToken);
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
  }, [completeAuth, location]);

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
