import { Categories } from '../../../utils/interface';
import CompleteCardList from './CompleteCardList';
import { ReactComponent as PinFilled } from '/src/assets/icons/pin_filled.svg';

function CompleteCard({ data }: { data: Categories }) {
  return (
    <div className="relative bg-white rounded-12 p-20 mb-20">
      <div className="flex justify-between mb-4 py-8 border-b border-gr-200">
        <div className="flex-center">
          <PinFilled />
          <div className="ml-1 text-gr-800 text-15">{data?.name}</div>
        </div>
        <div className="flex-center">
          <div className="text-gr-600 text-12 mr-8">2024.10.01 / 2024.10.10</div>
          {/* <div className="flex-center text-gr-700 text-12 w-[44px] h-[20px] bg-gr-50 rounded-2">D-7</div> */}
          <div className="flex-center text-red-800 text-12 w-[44px] h-[20px] bg-red-100 rounded-2">D+3</div>
        </div>
      </div>
      {data && data.tasks ? (
        data.tasks.map((data, idx: number) => {
          return <CompleteCardList key={idx} data={data} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default CompleteCard;
