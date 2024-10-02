// import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';
import HomeCard from './HomeCard';
import DefaultAlert from '../Common/DefaultAlert';
import alertValue from '../../modules/alert';
import { appUtils } from '../../utils/utils';

function Home() {
  // const navigate = useNavigate()
  const currentDate = dayjs().format('YYYY년 MM월 DD일');

  // 다짐하기
  const handleMakeAPromise = () => {
    if (!appUtils.isLoggedIn()) {
      alertValue(true);
    } else {
      alert('준비중입니다');
    }
  };

  return (
    <>
      <div className="h-full bg-gr-50">
        <Header />
        <div className="h-inner">
          <div className="flex flex-col justify-between h-[13.4375rem] bg-white p-20">
            <div className="text-22 font-semi mb-24 text-black-100">
              깨비님, 오늘도 자기계발에
              <br /> 성공해보세요!
            </div>
            <div>
              <div className="text-16 font-semi text-black-100">{currentDate}</div>
              <div className="flex justify-between items-center mt-12 w-full h-[48px] bg-pm-400 rounded-12">
                <p className="pl-20 text-14 text-pm-700 font-semi">🔥 나의 첫 다짐을 작성해주세요 !</p>
                <div
                  onClick={handleMakeAPromise}
                  className="flex-center text-center w-[57px] h-[24px] mr-12 bg-pm-500 text-white text-12 font-semi rounded-8"
                >
                  다짐하기
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-20 pt-24 overflow-y-scroll"
            style={{
              height: 'calc(100% - 13.4375rem)',
            }}
          >
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </div>
        <Navigation />
        <DefaultAlert />
      </div>
    </>
  );
}
export default Home;
