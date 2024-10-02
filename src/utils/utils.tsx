import { GaugeBarProps } from './interface';

// 게이지 바
export const GaugeBar: React.FC<GaugeBarProps> = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full h-6 bg-gr-100 rounded-full">
      <div
        className="h-full bg-pm-450 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }} // 비율에 따라 너비 조정
      />
    </div>
  );
};
