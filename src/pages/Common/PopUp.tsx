import { ReactComponent as Close } from '/src/assets/icons/popup_close.svg';
import { ReactComponent as Avatar } from '/src/assets/icons/avatar.svg';

function PopUp() {
  return (
    <div className="none top-0 left-0 flex flex-col justify-between w-full h-full bg-gr-50">
      <div className="flex-center h-[60px] bg-white">
        <div className="absolute top-18 left-26 items-center">
          <Close />
        </div>
        <div>계획 추가</div>
      </div>
      <div className="inner-contents-popup">
        <div className="flex flex-col">
          <div className="text-pm-500 text-12 font-semi mb-8">프로젝트 명</div>
          <div className="flex justify-between w-full">
            <input className="bg-white rounded-8 w-[calc(100%-3.75rem)] mr-12"></input>
            <div className="flex-center w-[48px] h-[48px] bg-white rounded-12">
              <Avatar />
            </div>
          </div>
        </div>
        <div className="mt-20">목표설정 카드</div>
        <div className="flex-center w-[64px] h-[24px] mt-12 bg-gr-700 rounded-4 text-white text-12">+ 중목표</div>
      </div>
      <div className="flex-center mb-[2.125rem] bg-pm-500 h-[48px] mx-20 rounded-8 text-white">저장하기</div>
    </div>
  );
}

export default PopUp;
