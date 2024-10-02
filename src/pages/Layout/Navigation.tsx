import { ReactComponent as HomeSelected } from '/src/assets/images/navi_home_selected.svg';
import { ReactComponent as CalendarUnselected } from '/src/assets/images/navi_calendar_unselected.svg';
import { ReactComponent as Plus } from '/src/assets/images/navi_plus.svg';

function Navigation() {
  return (
    <div className="relative shrink-0 h-[60px] w-full bg-white border-t border-gr-400">
      <div className="flex h-full">
        <div className="flex-center w-1/2 align-center text-center">
          <div>
            <div className="flex-center">
              <HomeSelected />
            </div>
            <p className="text-pm-500 text-14">홈</p>
          </div>
        </div>
        <div className="flex-center w-1/2 text-center">
          <div>
            <div className="flex-center">
              <CalendarUnselected />
            </div>
            <p className="text-gr-400 ">캘린더</p>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -top-24 transform -translate-x-1/2 flex-center w-[60px] h-[60px] bg-pm-300 rounded-12">
        <Plus />
      </div>
    </div>
  );
}

export default Navigation;
