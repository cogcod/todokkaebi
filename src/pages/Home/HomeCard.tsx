import { useEffect, useState } from 'react';
import { appUtils, GaugeBar } from '../../utils/utils';
import { ReactComponent as Alarm } from '/src/assets/icons/card_alarm.svg';
import alertValue from '../../modules/alert';
import { useNavigate } from 'react-router-dom';

function HomeCard() {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(false);
  }, []);

  // 카드 상세
  const moveToDetail = () => {
    if (!appUtils.isLoggedIn()) {
      alertValue(true);
    } else {
      navigate('/projects');
    }
  };

  return (
    <div
      onClick={moveToDetail}
      className="flex flex-col mb-20 w-full h-[6.625rem] rounded-16 pt-16 px-16 pb-12 bg-white"
    >
      <div className="flex justify-between">
        <div className="w-[42px] h-[42px] bg-gr-400"></div>
        <div className="flex flex-col pl-12">
          <div className="flex justify-between items-center mb-8">
            <div className="truncate w-[12.75rem] text-18 font-semi">
              지구 정복하기 위해 근육 키우기 지구 정복하기 위해 근육 키우기
            </div>
            <div>
              {isComplete ? (
                <div className="flex-center w-[3rem] h-20 ml-12 text-12 font-semi text-pm-600 bg-pm-400 rounded-4">
                  완료
                </div>
              ) : (
                <div className="flex-center w-[3rem] h-20 ml-12 text-pm-550 text-14 font-semi">77%</div>
              )}
            </div>
          </div>
          <div>
            <GaugeBar value={75} max={100} />
          </div>
        </div>
      </div>
      <div className="flex mt-12 pt-8 border-t border-gr-200">
        <div>
          <Alarm />
        </div>
        <div className="ml-4 text-gr-600 text-12 font-regular">2020.20.09 ~ 2020.20.99</div>
      </div>
    </div>
  );
}

export default HomeCard;
