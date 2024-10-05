import { useEffect, useRef, useState } from 'react';
import { GaugeBar } from '../../utils/utils';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';
import { ReactComponent as Dot } from '/src/assets/icons/dot.svg';
import Plan from './Plan/Plan';
import Progress from './Progress/Progress';
import Complete from './Complete/Complete';
import { ReactComponent as Edit } from '/src/assets/icons/float_edit.svg';
import { ReactComponent as Remove } from '/src/assets/icons/float_remove.svg';
import projectIdValue from '../../modules/projectId';
import { useLazyQuery, useReactiveVar } from '@apollo/client';
import { GET_PROJECT_DETAIL } from '../../query/query';
import { ProjectDetail } from '../../utils/interface';
import { ReactComponent as Avatar } from '/src/assets/images/avatar_default.svg';

import custom_alert from '../../modules/custom_alert';
import CustomAlert from '../Common/CustomAlert';
import show_date from '../../modules/show_date';

function Projects() {
  const [getProjects, { loading, error }] = useLazyQuery(GET_PROJECT_DETAIL);
  const [isComplete, setIsComplete] = useState(false); // 대메뉴 완료 상태
  const [activeTab, setActiveTab] = useState<number>(1); // 초기 탭을 숫자로 설정
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const alertState = useReactiveVar(custom_alert);

  const [projectDetail, setProjectDetail] = useState<ProjectDetail | null>(null); // 대분류 상세

  const menuRef = useRef<HTMLDivElement | null>(null);
  const selecetedCardId = useReactiveVar(projectIdValue);

  // 날짜 표시 체크
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    show_date(!isChecked);
  };

  // 탭 메뉴 클릭
  const handleTabClick = (tabIndex: number): void => {
    setActiveTab(tabIndex);
  };

  // 수정/삭제 메뉴
  const openEditMenu = () => {
    setIsOpen(true);
  };
  const moveToEditPage = () => {
    alert('준비중입니다');
  };
  const removeThisProject = () => {
    custom_alert({
      ...alertState,
      isOpen: true,
      title: '목표 삭제',
      content: `${projectDetail?.name}\n
      목표를 삭제하시겠어요?`,
      projectId: `${projectDetail?.id}`,
    });
  };

  useEffect(() => {
    getProjects({ variables: { input: { id: selecetedCardId } } })
      .then(response => {
        if (response.data && response.data.getProject.project) {
          setProjectDetail(response.data.getProject.project); // 대분류 상세
          if (projectDetail?.completeTask === 100) {
            setIsComplete(true);
          }
        }
      })
      .catch(err => {
        console.error('err', err);
      });
    if (show_date()) setIsChecked(true);
  }, []);

  useEffect(() => {
    // menuRef.current(플로팅 메뉴) 있으면 다른 곳 클릭 시 닫기
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <div className="h-inner bg-gr-50">
        {/* 대제목 + 게이지바 */}
        <div className="relative flex flex-col justify-between bg-white w-full">
          <div className="flex flex-col w-full h-[6.625rem] pt-24 px-20 pb-20 bg-white">
            <div className="flex justify-between items-center">
              <Avatar />
              <div className="flex flex-col w-[18.125rem]">
                <div className="flex justify-between items-center mb-8">
                  <div className="truncate w-[12.75rem] text-18 font-semi">{projectDetail?.name} </div>
                  <div onClick={openEditMenu}>
                    <Dot />
                  </div>
                </div>
                <div className="flex-center">
                  <GaugeBar value={projectDetail?.completeTask ? projectDetail.completeTask : 0} max={100} />
                  <div>
                    {isComplete ? (
                      <div className="flex-center w-[3rem] h-20 ml-12 text-12 font-semi text-pm-600 bg-pm-400 rounded-4">
                        완료
                      </div>
                    ) : (
                      <div className="flex-center w-[3rem] h-20 ml-12 text-pm-550 text-14 font-semi">
                        {projectDetail?.completeTask}%
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 플로팅 메뉴 */}
          {isOpen && (
            <div
              ref={menuRef}
              className="absolute right-[20px] top-[29px] w-[176px] h-[104px] bg-white rounded-8 shadow-lg z-20"
            >
              <ul className="p-8">
                <li onClick={moveToEditPage} className="flex-center justify-between pl-20 py-8 pr-8 mb-8">
                  <p className="text-gr-700 text-16">수정</p>
                  <Edit />
                </li>
                <li onClick={removeThisProject} className="flex-center justify-between pl-20 py-8 pr-8">
                  <p className="text-red text-16">삭제</p>
                  <Remove />
                </li>
              </ul>
            </div>
          )}
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
                  className="relative checked_icon_pm appearance-none form-checkbox h-18 w-18 border-[1.5px] rounded-2 border-gr-400"
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
      <CustomAlert />
    </>
  );
}

export default Projects;
