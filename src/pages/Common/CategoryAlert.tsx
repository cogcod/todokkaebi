import { useEffect, useState } from 'react';
import { useMutation, useReactiveVar } from '@apollo/client';
import { DELETE_CATEGORY } from '../../query/mutation';
import refresh from '../../modules/refresh';
import category_alert from '../../modules/category_alert';

function CategoryAlert() {
  const [deleteCategory, { loading, error }] = useMutation(DELETE_CATEGORY);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const AlertValue = useReactiveVar(category_alert);

  const closeAlert = () => {
    setIsAlertOpen(false);
    category_alert({
      ...AlertValue,
      isOpen: false,
      title: '',
      content: ``,
      categoryId: '',
    });
  };
  const handleRemoveClick = () => {
    // 상태변수 초기화
    category_alert({
      ...AlertValue,
      isOpen: false,
      title: '',
      content: ``,
      categoryId: '',
    });

    // 카테고리 삭제 진행
    deleteCategory({ variables: { input: { categoryId: AlertValue.categoryId } } })
      .then(result => {
        console.log('deleteCategory', result);
      })
      .catch(error => {
        console.error(error);
      });

    refresh(true); // 상태값 업데이트 후 화면 새로고침
  };

  useEffect(() => {
    setIsAlertOpen(AlertValue.isOpen);
  }, [AlertValue]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
              <button className="w-1/2 text-pm-500" onClick={handleRemoveClick}>
                삭제하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryAlert;
