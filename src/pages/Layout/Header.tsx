import { useNavigate } from 'react-router-dom';
import { ReactComponent as Avatar } from '/src/assets/images/avatar.svg';

function Header() {
  const navigate = useNavigate();
  const moveToMyPage = () => {
    navigate('/mypage');
  };

  return (
    <div className="flex justify-between items-center absolute top-0 left-0 w-full h-[60px] bg-white">
      <div>LOGO</div>
      <div className="h-[36px] w-[36px] flex justify-center items-center" onClick={moveToMyPage}>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
