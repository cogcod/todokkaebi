import { useState } from 'react';
import { Tasks } from '../../../utils/interface';
import { appUtils } from '../../../utils/utils';
import show_date from '../../../modules/show_date';

function ProgressCardList({ data }: { data: Tasks }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex-center justify-between pl-8 py-12">
      <div className="flex flex-col">
        <div className={`text-12 ${isChecked ? 'line-through text-gr-500' : 'text-gr-700'}`}>{data?.title}</div>
        {show_date() ? (
          <div className="text-gr-500 text-10">
            {appUtils.convertUTCDateToString(data.startDate)}&nbsp;~&nbsp;
            {appUtils.convertUTCDateToString(data.endDate)}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex-center">
        {/* <div className="flex-center text-gr-700 text-12 w-[44px] h-[20px] bg-gr-50 rounded-2">D-7</div> */}
        <div className="flex-center text-red-800 text-12 w-[44px] h-[20px] bg-red-100 rounded-2">D+3</div>
        {/* Select box */}
        <div>
          <div className="p-4">
            <label className="flex items-center space-x-2">
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
  );
}

export default ProgressCardList;
