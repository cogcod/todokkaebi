// import { useMutation } from '@apollo/client';
// import { DELETE_USER } from '../../query/mutation';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';
import { useNavigate } from 'react-router-dom';
import { appUtils } from '../../utils/utils';

function MyPage() {
  // const [deleteUser, { loading, error }] = useMutation(DELETE_USER);
  const navigate = useNavigate();

  const logout = () => {
    appUtils.logout();
    navigate('/');
  };

  // const withdrawal = () => {
  //   deleteUser()
  //     .then(result => {
  //       console.log('성공!', result);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="h-full">
      <Header />
      <div className="h-inner bg-gr-50 p-20">
        <div onClick={logout} className="mb-10">
          👉🏻 로그아웃
        </div>
        {/* <div onClick={withdrawal}>👉🏻 회원탈퇴</div> */}
      </div>
      <Navigation />
    </div>
  );
}

export default MyPage;
