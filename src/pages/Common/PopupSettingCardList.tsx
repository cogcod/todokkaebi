// import { appUtils } from '../../utils/utils';
import CustomDatePicker from './CustomDatePicker';
import { ReactComponent as Minus } from '/src/assets/icons/popup_minus.svg';
import { ReactComponent as Calendar } from '/src/assets/icons/calendar.svg';

function PopupSettingCardList({ onRemove }: { onRemove: () => void }) {
  /**
   * 현재 예상 상황
   *  - 소분류의 이름/시작날짜/종료날짜를 apollo에 배열로 저장
   *  - '저장하기' 클릭 시 apollo에 저장된 배열을 for문을 돌려서
   *  - 배열 갯수만큼 api 요청 중
   */
  return (
    <div>
      {/* 소분류 태스크 설정 */}
      <div className="flex-center justify-between w-full mt-8 pl-8 py-10">
        <div className="flex-center">
          <div onClick={onRemove} className="flex-center w-[16px] h-[16px] bg-gr-100">
            <Minus />
          </div>
          <input
            type="text"
            placeholder="텍스트를 입력하세요"
            className="truncate mr-12 ml-12 focus:outline-none text-gr-700 text-12"
          />
        </div>
        {/* 날짜 설정 */}
        <div>
          <div className="flex-center">
            {/* {appUtils.convertUTCDateToString(data.startDate)}&nbsp;~&nbsp;
          {appUtils.convertUTCDateToString(data.endDate)} */}
          </div>
          <div className="flex flex-col">
            <div className="flex-center h-18">
              <div className="text-gr-600 text-10 mr-4">시작 날짜</div>
              <CustomDatePicker />
              <Calendar className="ml-8" />
            </div>
            <div className="flex-center h-18">
              <div className="text-gr-600 text-10 mr-4">종료 날짜</div>
              <CustomDatePicker />
              <Calendar className="ml-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupSettingCardList;
