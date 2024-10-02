import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../../query/mutation';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';

function MyPage() {
  const [deleteUser, { loading, error }] = useMutation(DELETE_USER);
  const withdrawal = () => {
    console.log('회원탈퇴');
    deleteUser()
      .then(result => {
        console.log('성공!', result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="h-full">
      <Header />
      <div onClick={withdrawal} className="h-inner bg-gr-50">
        회원탈퇴
      </div>
      <Navigation />
    </div>
  );
}

export default MyPage;
