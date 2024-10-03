import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Dot } from '/src/assets/icons/dot.svg';
import { ReactComponent as PinFilled } from '/src/assets/icons/pin_filled.svg';
import { ReactComponent as Edit } from '/src/assets/icons/float_edit.svg';
import { ReactComponent as Remove } from '/src/assets/icons/float_remove.svg';
import ProgressCardList from './ProgressCardList';

function ProgressCard() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const openEditMenu = () => {
    setIsOpen(true);
  };
  const moveToEditPage = () => {
    alert('준비중입니다');
  };
  const removeThisCard = () => {
    alert('준비중입니다');
  };

  useEffect(() => {
    // menuRef.current(플로팅 메뉴) 있으면 닫기
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

  return (
    <div className="relative bg-white rounded-12 pt-16 px-20 pb-20 mb-20">
      <div className="flex flex-col mb-4 border-b border-gr-200">
        <div className="flex-center justify-between mb-8">
          <div className="flex-center text-pm-600 text-10 w-[48px] h-[20px] bg-pm-400 rounded-4">33%</div>
          <div onClick={openEditMenu}>
            <Dot />
          </div>
        </div>
        <div className="flex-center justify-between py-8">
          <div className="flex">
            <PinFilled />
            <div className="ml-1 text-gr-800 text-15">노래 잘부르기</div>
          </div>
          {/* Select box */}
          <div>
            <div className="p-4">
              <label className="flex items-center space-x-2">
                <span className="text-gr-600 text-12 font-semi">전체선택</span>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="relative appearance-none form-checkbox h-18 w-18 border-[1.5px] rounded-2 border-gr-400 checked:bg-gr-100 checked:border-0 checked:bg-[url('../../assets/images/checked.png')] bg-no-repeat bg-center"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <ProgressCardList />
      <ProgressCardList />
      <ProgressCardList />
      {/* 플로팅 메뉴 */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-[12px] top-[22px] w-[176px] h-[104px] bg-white rounded-8 shadow-lg z-20"
        >
          <ul className="p-8">
            <li onClick={moveToEditPage} className="flex-center justify-between pl-20 py-8 pr-8 mb-8">
              <p className="text-gr-700 text-16">수정</p>
              <Edit />
            </li>
            <li onClick={removeThisCard} className="flex-center justify-between pl-20 py-8 pr-8">
              <p className="text-red text-16">삭제</p>
              <Remove />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProgressCard;
