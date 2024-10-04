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
    const kakaoTest = import.meta.env.VITE_KAKAO_TEST;

    if (code) {
      kakaoAuth({ variables: { input: { code: code, test: kakaoTest === 'true' } } })
        .then(({ data }) => {
          JwtStorageService.setAccessToken(data.kakaoAuth.accessToken);
          JwtStorageService.setRefreshToken(data.kakaoAuth.refreshToken);

          // JwtStorageService.setAccessToken(
          //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMTY5MjVhMy0zYTQwLTQ2YzAtOWY4MS1iYWI2YWRmNDJkYTEiLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNzI3OTYzMDg4LCJleHAiOjE3Mjc5NjQ4ODh9.ZHARxlfK6TODcO0RUzp5mvXDdcQazPlbkROgWDX1Fe0',
          // );
          // JwtStorageService.setRefreshToken(
          //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMTY5MjVhMy0zYTQwLTQ2YzAtOWY4MS1iYWI2YWRmNDJkYTEiLCJ0eXBlIjoiUkVGUkVTSCIsImlhdCI6MTcyNzk2MzA4OCwiZXhwIjoxNzI4MjIyMjg4fQ.L0-uXJqVYkWgRNTej0aIKlpEedJGZpalQDZxTOAmsVU',
          // );

          console.log('token', data);
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
