import { useEffect, useRef, useState } from 'react';
import PlanCardList from './PlanCardList';
import { ReactComponent as Dot } from '/src/assets/icons/dot.svg';
import { ReactComponent as PinFilled } from '/src/assets/icons/pin_filled.svg';
import { ReactComponent as Edit } from '/src/assets/icons/float_edit.svg';
import { ReactComponent as Remove } from '/src/assets/icons/float_remove.svg';
import { Categories } from '../../../utils/interface';
import custom_alert from '../../../modules/custom_alert';
import { useReactiveVar } from '@apollo/client';

function PlanCard({ data }: { data: Categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const alertState = useReactiveVar(custom_alert);

  // 수정/삭제 메뉴
  const openEditMenu = () => {
    setIsOpen(true);
  };
  const moveToEditPage = () => {
    alert('준비중입니다');
  };
  const removeThisCard = () => {
    custom_alert({
      ...alertState,
      isOpen: true,
      title: '목표 삭제',
      content: `${data.name}\n
      목표를 삭제하시겠어요?`,
      categoryId: `${data.id}`,
    });
  };

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

  return (
    <div className="relative bg-white rounded-12 p-20 mb-20">
      <div className="flex justify-between mb-4 py-8 border-b border-gr-200">
        <div className="flex-center">
          <PinFilled />
          <div className="ml-1 text-gr-800 text-15">{data?.name}</div>
        </div>
        <div onClick={openEditMenu}>
          <Dot />
        </div>
      </div>
      {data && data.tasks ? (
        data.tasks.map((data, idx: number) => {
          return <PlanCardList key={idx} data={data} />;
        })
      ) : (
        <></>
      )}
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

export default PlanCard;
