import { useEffect, useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import { DELETE_CATEGORY, DELETE_PROJECT } from '../../query/mutation';
import custom_alert from '../../modules/custom_alert';
import { useNavigate } from 'react-router-dom';
import refresh_plan from '../../modules/refresh_plan';

function CustomAlert() {
  const navigate = useNavigate();
  const [deleteCategory, { loading: loadingCategory, error: errorCategory }] = useMutation(DELETE_CATEGORY);
  const [deleteProject, { loading: loadingProject, error: errorProject }] = useMutation(DELETE_PROJECT);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const AlertValue = useReactiveVar(custom_alert);

  // Alert 닫기
  const closeAlert = () => {
    setIsAlertOpen(false);
    custom_alert({
      ...AlertValue,
      isOpen: false,
      title: '',
      content: ``,
      categoryId: '',
    });
  };

  // 중분류(카테고리) 삭제
  const removeThisCategory = () => {
    // 상태변수 초기화
    custom_alert({
      ...AlertValue,
      isOpen: false,
      title: '',
      content: ``,
      categoryId: '',
    });

    // 카테고리 삭제
    deleteCategory({ variables: { input: { categoryId: AlertValue.categoryId } } })
      .then(result => {
        console.log('deleteCategory', result);
        refresh_plan(true); // 화면 새로고침
      })
      .catch(error => {
        console.error(error);
      });
  };

  // 대분류(프로젝트) 삭제
  const removeThisProject = () => {
    custom_alert({
      ...AlertValue,
      isOpen: false,
      title: '',
      content: ``,
      projectId: '',
    });

    deleteProject({ variables: { input: { projectId: AlertValue.projectId } } })
      .then(result => {
        console.log('deleteProject', result);
        navigate('/home');
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    setIsAlertOpen(AlertValue.isOpen);
  }, [AlertValue]);

  if (loadingCategory) return <div>Loading...</div>;
  if (errorCategory) return <div>Error: {errorCategory.message}</div>;
  if (loadingProject) return <div>Loading...</div>;
  if (errorProject) return <div>Error: {errorProject.message}</div>;

  return (
    <>
      {isAlertOpen && (
        <div
          onClick={closeAlert}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
        >
          <div className="overflow-hidden flex flex-col justify-between bg-white rounded-lg shadow-lg text-center w-[17.125rem] h-[11.125rem]">
            <div className="px-10 py-24">
              <h2 className="h-26 mb-8 text-18 font-semi">{AlertValue.title}</h2>
              <p className="text-gr-700 font-regular text-16 mb-6">{AlertValue.content}</p>
              {/* <p className="text-gr-700 font-regular text-16 mb-6">
                변경된 내용이 저장되지 않았어요. <br /> 이대로 돌아가실 건가요?
              </p> */}
            </div>
            <div className="flex border-t border-gr-500 h-[3rem]">
              <button className="w-1/2 text-gr-700 border-r border-gr-500" onClick={closeAlert}>
                취소
              </button>
              <button
                className="w-1/2 text-pm-500"
                onClick={AlertValue.categoryId ? removeThisCategory : removeThisProject}
              >
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomAlert;
