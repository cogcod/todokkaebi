import show_date from '../../../modules/show_date';
import { Tasks } from '../../../utils/interface';
import { appUtils } from '../../../utils/utils';

function PlanCardList({ data }: { data: Tasks }) {
  return (
    <div className="flex-center justify-between mt-8 pl-8 py-10">
      <div className="text-gr-700 text-12">{data.title}</div>
      <div className="flex-center">
        {show_date() && data.startDate && data.endDate ? (
          <div className="text-gr-600 text-10 mr-8">
            {appUtils.convertUTCDateToString(data.startDate)}&nbsp;~&nbsp;
            {appUtils.convertUTCDateToString(data.endDate)}
          </div>
        ) : (
          <></>
        )}
        {/* <div className="flex-center text-gr-700 text-12 w-[44px] h-[20px] bg-gr-50 rounded-2">D-7</div> */}
        {/* <div className="flex-center text-red-800 text-12 w-[44px] h-[20px] bg-red-100 rounded-2">D+3</div> */}
      </div>
    </div>
  );
}

export default PlanCardList;
