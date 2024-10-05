import dayjs from 'dayjs';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';
import HomeCard from './HomeCard';
import DefaultAlert from '../Common/DefaultAlert';
import alertValue from '../../modules/alert';
import { appUtils } from '../../utils/utils';
import { useQuery } from '@apollo/client';
import { GET_ALL_PROJECTS } from '../../query/query';
import { useEffect, useState } from 'react';
import PopUp from '../Common/PopUp';

function Home() {
  const currentDate = dayjs().format('YYYY년 MM월 DD일');
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS, { skip: !appUtils.isLoggedIn() });
  const [projectsData, setProjectsData] = useState([]);

  // 다짐하기
  const handleMakeAPromise = () => {
    if (!appUtils.isLoggedIn()) {
      alertValue(true);
    } else {
      alert('준비중입니다');
    }
  };

  useEffect(() => {
    if (data && data.getAllProjects.success === true) setProjectsData(data?.getAllProjects.projects);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="relative h-full bg-gr-50">
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
          {/* 컨텐츠 */}
          <div className="inner-contents-home">
            {projectsData.length !== 0 ? (
              projectsData.map((data, idx: number) => {
                return <HomeCard key={idx} data={data} />;
              })
            ) : (
              <div className="text-center mt-6">
                <div className="text-20 font-semi text-gr-700">진행 중인 프로젝트가 없습니다.</div>
                <p className="mt-10 text-16 text-gr-600">+ 버튼을 눌러 새 프로젝트를 추가해보세요</p>
              </div>
            )}
          </div>
        </div>
        <Navigation />
        <DefaultAlert />
        <PopUp />
      </div>
    </>
  );
}
export default Home;
