import { useNavigate } from 'react-router-dom';
import { ReactComponent as Avatar } from '/src/assets/icons/avatar.svg';
import { appUtils } from '../../utils/utils';
import alertValue from '../../modules/alert';

function Header() {
  const navigate = useNavigate();

  // 마이페이지
  const moveToMyPage = () => {
    if (!appUtils.isLoggedIn()) {
      alertValue(true);
    } else {
      navigate('/mypage');
    }
  };
  const moveToHome = () => {
    navigate('/home');
  };

  return (
    <div className="flex shrink-0 justify-between items-center px-20 w-full h-[60px] bg-white">
      {/* <div className="flex shrink-0 justify-between items-center absolute top-0 left-0 w-full h-[60px] bg-white"> */}
      <div onClick={moveToHome}>LOGO</div>
      <div className="h-[36px] w-[36px] flex-center" onClick={moveToMyPage}>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
