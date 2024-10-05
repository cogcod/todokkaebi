import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './custom.css';

const CustomDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="mb-4">
      <DatePicker
        selected={startDate} // 선택된 시작 날짜
        onChange={(date: Date | null) => setStartDate(date)} // 날짜 변경 핸들러
        dateFormat="yyyy.MM.dd"
        placeholderText="시작 날짜"
        className="text-gr-600 text-10 w-[50px]"
      />
    </div>
  );
};

export default CustomDatePicker;
