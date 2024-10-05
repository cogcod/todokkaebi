import { ReactComponent as Remove } from '/src/assets/icons/popup_card_remove.svg';
import { ReactComponent as Plus } from '/src/assets/icons/popup_plus.svg';
import PopupSettingCardList from './PopupSettingCardList';
import { useEffect, useState } from 'react';
import category_name from '../../modules/category_name';

function PopupSettingCard({ onRemove }: { onRemove: () => void }) {
  const [showEmptyTask, setShowEmptyTask] = useState<number[]>([Date.now()]);
  const [categoryName, setCategoryName] = useState('');

  // 카테고리명 입력 인풋값 저장
  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  // 하위목표 추가 버튼
  const addTaskGoal = () => {
    setShowEmptyTask([...showEmptyTask, Date.now()]); // 현재 시간을 고유Id로 추가
  };
  // 삭제 버튼
  const removeTaskGoal = (idToRemove: number) => {
    setShowEmptyTask(showEmptyTask.filter(id => id !== idToRemove)); // 선택된 인덱스만 제외하고 배열 업데이트
  };

  useEffect(() => {
    category_name(categoryName);
  }, [categoryName]);

  return (
    <div className="relative bg-white rounded-12 p-20 mb-20">
      {/* 중분류 제목 설정 */}
      <div className="flex-center justify-between mb-8">
        <div className="flex-center text-pm-500 text-12  font-semi">목표 설정</div>
        <div onClick={onRemove} className="flex-center w-[18px] h-[18px] bg-gr-200">
          <Remove />
        </div>
      </div>
      <div className="flex justify-between mb-4 py-8 border-b border-gr-200">
        <div className="w-full">
          <input
            type="text"
            placeholder="목표명을 입력하세요"
            value={categoryName}
            onChange={handleProjectNameChange}
            className="truncate w-full mx-1 focus:outline-none text-gr-800 text-15"
          />
        </div>
      </div>
      {/* 소분류 태스크 설정 */}
      {showEmptyTask.map(id => (
        <PopupSettingCardList key={id} onRemove={() => removeTaskGoal(id)} />
      ))}

      <div onClick={addTaskGoal} className="flex-center w-full h-[32px] bg-gr-100 rounded-4">
        <div>
          <Plus />
        </div>
        <div className="text-gr-700 text-12 ml-4">하위 목표를 추가하세요</div>
      </div>
    </div>
  );
}

export default PopupSettingCard;
