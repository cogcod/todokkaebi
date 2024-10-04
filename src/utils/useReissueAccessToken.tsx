import { useMutation } from '@apollo/client';
import { JwtStorageService } from '../services/auth/jwt-storage.service';
import { REISSUE_ACCESSTOKEN } from '../query/mutation';

function useReissueAccessToken() {
  const [reissueAccessTokenMutation, { data, loading, error }] = useMutation(REISSUE_ACCESSTOKEN);

  const reissueAccessToken = async () => {
    try {
      const refreshToken = JwtStorageService.getRefreshToken(); // 저장된 refreshToken 가져오기

      console.log('refreshToken', refreshToken);
      if (!refreshToken) {
        throw new Error('No refresh token found');
      }

      const { data } = await reissueAccessTokenMutation({
        variables: {
          input: {
            refreshToken, // 리프레시 토큰 전달
          },
        },
      });

      const newAccessToken = data?.reissueAccessToken.accessToken;
      console.log('newAccessToken', newAccessToken);

      if (newAccessToken) {
        console.log('!!!!');
        JwtStorageService.setAccessToken(newAccessToken); // 새로 발급된 accessToken을 저장
        return newAccessToken;
      }

      throw new Error('Failed to reissue access token');
    } catch (err) {
      console.error('Error during access token reissue:', err);
      throw err;
    }
  };

  return { reissueAccessToken, data, loading, error };
}

export default useReissueAccessToken;
