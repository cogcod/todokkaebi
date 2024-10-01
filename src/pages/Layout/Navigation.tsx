import { ReactComponent as HomeSelected } from '/src/assets/images/navi_home_selected.svg';
import { ReactComponent as CalendarUnselected } from '/src/assets/images/navi_calendar_unselected.svg';
import { ReactComponent as Plus } from '/src/assets/images/navi_plus.svg';

function Navigation() {
  return (
    <div className="absolute bottom-0 left-0 h-[60px] w-full bg-white">
      <div className="flex h-full">
        <div className="flex-center w-1/2 align-center">
          <HomeSelected />
        </div>
        <div className="flex-center w-1/2">
          <CalendarUnselected />
        </div>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ">
        <Plus />
      </div>
    </div>
  );
}

export default Navigation;
