import { useEffect, useState } from 'react';
import { GaugeBar } from '../../utils/utils';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';
import { ReactComponent as Dot } from '/src/assets/icons/dot.svg';
import Plan from './Plan/Plan';
import Progress from './Progress/Progress';
import Complete from './Complete/Complete';

function Projects() {
  const [isComplete, setIsComplete] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(1); // 초기 탭을 숫자로 설정
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleTabClick = (tabIndex: number): void => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    setIsComplete(true);
  }, []);

  return (
    <>
      <Header />
      <div className="h-inner bg-gr-50">
        {/* 대제목 + 게이지바 */}
        <div className="flex flex-col justify-between bg-white w-full">
          <div className="flex flex-col w-full h-[6.625rem] pt-24 px-20 pb-20 bg-white">
            <div className="flex justify-between items-center">
              <div className="w-[42px] h-[42px] bg-gr-400"></div>
              <div className="flex flex-col w-[18.125rem]">
                <div className="flex justify-between items-center mb-8">
                  <div className="truncate w-[12.75rem] text-18 font-semi">
                    지구 정복하기 위해 근육 키우기 지구 정복하기 위해 근육 키우기
                  </div>
                  <Dot />
                </div>
                <div className="flex-center">
                  <GaugeBar value={75} max={100} />
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
              </div>
            </div>
          </div>
        </div>
        {/* 탭메뉴 */}
        <div className="flex justify-between items-center w-full h-[3rem] bg-white px-20 border-b border-gr-400">
          <div className="flex">
            <button
              className={`px-4 py-8 text-20 mr-12 ${
                activeTab === 1 ? 'border-b-2 border-pm-500 text-pm-500 font-semi' : 'text-gr-600'
              }`}
              onClick={() => handleTabClick(1)}
            >
              계획
            </button>
            <button
              className={`px-4 py-8 text-20 mr-12 ${
                activeTab === 2 ? 'border-b-2 border-pm-500 text-pm-500 font-semi' : 'text-gr-600'
              }`}
              onClick={() => handleTabClick(2)}
            >
              진행
            </button>
            <button
              className={`px-4 py-8 text-20 mr-12 ${
                activeTab === 3 ? 'border-b-2 border-pm-500 text-pm-500 font-semi' : 'text-gr-600'
              }`}
              onClick={() => handleTabClick(3)}
            >
              완료
            </button>
          </div>
          {/* Select box */}
          <div>
            <div className="p-4">
              <label className="flex items-center space-x-2">
                <span className="text-gr-600 text-12 font-semi">날짜 표시</span>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="relative appearance-none form-checkbox h-18 w-18 border-[1.5px] rounded-2 border-gr-400 checked:bg-pm-500 checked:border-0 checked:bg-[url('../../assets/images/checked.png')] bg-no-repeat bg-center"
                />
              </label>
            </div>
          </div>
        </div>
        {/* 컨텐츠 */}
        <div className="inner-contents-other">
          {activeTab === 1 && <Plan />}
          {activeTab === 2 && <Progress />}
          {activeTab === 3 && <Complete />}
        </div>
      </div>
      <Navigation />
    </>
  );
}

export default Projects;
