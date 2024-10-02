import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import alertValue from '../../modules/alert';
import { useReactiveVar } from '@apollo/client';

function DefaultAlert() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const alert = useReactiveVar(alertValue);

  const closeModal = () => {
    setIsModalOpen(false);
    alertValue(false);
  };
  const handleCofirmClick = () => {
    navigate('/');
    alertValue(false);
  };

  useEffect(() => {
    setIsModalOpen(alert);
  }, [alert]);

  return (
    <>
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
        >
          <div className="overflow-hidden flex flex-col justify-between bg-white rounded-lg shadow-lg max-w-md w-full text-center w-[17.125rem] h-[11.125rem]">
            <div className="px-10 py-24">
              <h2 className="h-26 mb-8 text-18 font-semi">로그인</h2>
              <p className="text-gr-700 font-regular text-16 mb-6">
                로그인 후 사용하실 수 있습니다. <br /> 로그인 화면으로 이동하시겠습니까?
              </p>
              {/* <p className="text-gr-700 font-regular text-16 mb-6">
                변경된 내용이 저장되지 않았어요. <br /> 이대로 돌아가실 건가요?
              </p> */}
            </div>
            <div className="flex border-t border-gr-500 h-[3rem]">
              <button className="w-1/2 text-gr-700 border-r border-gr-500" onClick={closeModal}>
                취소
              </button>
              <button className="w-1/2 text-pm-500" onClick={handleCofirmClick}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DefaultAlert;
