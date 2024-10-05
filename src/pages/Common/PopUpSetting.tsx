import { ReactComponent as Close } from '/src/assets/icons/popup_close.svg';
import { ReactComponent as DefaultAvatar } from '/src/assets/images/avatar_default.svg';
import PopupSettingCard from './PopupSettingCard';
import { useEffect, useState } from 'react';
import popup_setting from '../../modules/popup_setting';
import { useMutation, useReactiveVar } from '@apollo/client';
import { CREATE_PROJECT } from '../../query/mutation';
// import category_name from '../../modules/category_name';
import refresh_home from '../../modules/refresh_home';

function PopUpSetting() {
  const [createProject, { error: errorCreateProject }] = useMutation(CREATE_PROJECT);
  // const [createCategory, { error: errorCreateCategory }] = useMutation(CREATE_CATEGORY);
  const popupState = useReactiveVar(popup_setting);
  // const categoryName = useReactiveVar(category_name);

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [showEmptyCategory, setShowEmptyCategory] = useState<number[]>([Date.now()]);
  const [projectName, setProjectName] = useState('');

  // 프로젝트명 입력 인풋값 저장
  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  const closePopupSetting = () => {
    popup_setting(false);
    setIsPopupOpen(false);
  };

  // 중목표 추가 버튼
  const addEmptyCategory = () => {
    setShowEmptyCategory([...showEmptyCategory, Date.now()]); // 현재 시간을 고유Id로 추가
  };
  // 삭제 버튼
  const removeCategoryGoal = (idToRemove: number) => {
    setShowEmptyCategory(showEmptyCategory.filter(id => id !== idToRemove)); // 선택된 인덱스만 제외하고 배열 업데이트
  };

  // 저장하기 버튼
  const onSaveSettings = () => {
    if (projectName) {
      // 프로젝트 생성
      createProject({ variables: { input: { name: projectName } } })
        .then(res => {
          console.log('createProject', res);
          setProjectName('');
          refresh_home(true); // 홈 화면 새로고침
          // const newProjectId = res.data.createProject.project.id;
          // if (newProjectId && categoryName) {
          //   // 카테고리 생성
          //   createCategory({ variables: { input: { projectId: newProjectId, name: categoryName } } })
          //     .then(res => {
          //       const newCategoryId = res.data.createProject.project.id;
          //       console.log('newCategoryId', newCategoryId);
          //       category_name('');
          //     })
          //     .catch(err => {
          //       console.error('createCategory', err);
          //     });
          // } else {
          //   throw new Error('프로젝트 ID 또는 카테고리 이름이 없습니다.');
          // }
        })
        .catch(err => {
          console.error('createProject', err);
        });
    }

    closePopupSetting();
  };

  useEffect(() => {
    if (popupState) setIsPopupOpen(true);
  }, [popupState]);

  if (errorCreateProject) return <div>Error: {errorCreateProject.message}</div>;
  // if (errorCreateCategory) return <div>Error: {errorCreateCategory.message}</div>;

  return (
    <>
      {isPopupOpen && (
        <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full bg-gr-50">
          <div className="flex-center h-[60px] bg-white">
            <div onClick={closePopupSetting} className="absolute top-18 left-26 items-center">
              <Close />
            </div>
            <div>계획 추가</div>
          </div>
          <div className="inner-contents-popup overflow-auto">
            <div className="flex flex-col">
              <div className="text-pm-500 text-12 font-semi mb-8">프로젝트명</div>
              <div className="flex justify-between w-full">
                <input
                  type="text"
                  placeholder="프로젝트명을 입력하세요"
                  required
                  value={projectName}
                  onChange={handleProjectNameChange}
                  className="truncate bg-white rounded-8 w-[calc(100%-3.75rem)] mr-12 focus:outline-none text-indent"
                ></input>
                <div className="flex-center w-[48px] h-[48px] bg-white rounded-12">
                  <DefaultAvatar />
                </div>
              </div>
            </div>
            <div className="mt-20">
              {showEmptyCategory.map(id => (
                <PopupSettingCard key={id} onRemove={() => removeCategoryGoal(id)} />
              ))}
            </div>
            <div
              onClick={addEmptyCategory}
              className="flex-center w-[64px] h-[24px] mt-12 bg-gr-700 rounded-4 text-white text-12"
            >
              + 중목표
            </div>
          </div>
          <div onClick={onSaveSettings} className="flex-center my-[14px] bg-pm-500 h-[48px] mx-20 rounded-8 text-white">
            저장하기
          </div>
        </div>
      )}
    </>
  );
}

export default PopUpSetting;
