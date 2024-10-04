import { JwtStorageService } from '../services/auth/jwt-storage.service';
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

export const appUtils = {
  /**
   * 로그인한 유저 확인
   * @returns boolean
   */
  isLoggedIn: () => {
    const token = JwtStorageService.getToken();
    return !!token;
  },
  /**
   * UTC 날짜 형식 변환
   * @param utcDateString
   * @returns 2020.04.02
   */
  convertUTCDateToString: (utcDateString: string): string => {
    const date = Date.parse(utcDateString);

    if (isNaN(date)) {
      throw new Error('Invalid date format');
    }

    // Date.parse()가 반환하는 number를 Date 객체로 변환
    const formattedDate = new Date(date);

    const year = formattedDate.getUTCFullYear();
    const month = String(formattedDate.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
    const day = String(formattedDate.getUTCDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  },
};
