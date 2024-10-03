import { ReactComponent as HomeSelected } from '/src/assets/icons/navi_home_selected.svg';
import { ReactComponent as CalendarUnselected } from '/src/assets/icons/navi_calendar_unselected.svg';
import { ReactComponent as Plus } from '/src/assets/icons/navi_plus.svg';
import { useNavigate } from 'react-router-dom';
import alertValue from '../../modules/alert';
import { appUtils } from '../../utils/utils';

function Navigation() {
  const navigate = useNavigate();

  // 홈
  const moveToHome = () => {
    navigate('/home');
  };
  // 캘린더
  const moveToCalendar = () => {
    if (!appUtils.isLoggedIn()) {
      alertValue(true);
    } else {
      alert('준비중입니다');
    }
  };
  // 계획 설정
  const moveToSetting = () => {
    if (!appUtils.isLoggedIn()) {
      alertValue(true);
    } else {
      alert('준비중입니다');
    }
  };

  return (
    <div className="relative shrink-0 h-[60px] w-full bg-white border-t border-gr-400">
      <div className="flex h-full">
        <div onClick={moveToHome} className="flex-center w-1/2 align-center text-center">
          <div>
            <div className="flex-center">
              <HomeSelected />
            </div>
            <p className="text-pm-500 text-14">홈</p>
          </div>
        </div>
        <div onClick={moveToCalendar} className="flex-center w-1/2 text-center">
          <div>
            <div className="flex-center">
              <CalendarUnselected />
            </div>
            <p className="text-gr-400 ">캘린더</p>
          </div>
        </div>
      </div>
      <div
        onClick={moveToSetting}
        className="absolute left-1/2 -top-24 transform -translate-x-1/2 flex-center w-[60px] h-[60px] bg-pm-300 rounded-12"
      >
        <Plus />
      </div>
    </div>
  );
}

export default Navigation;
