// import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';

function Home() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="h-full bg-gr-50">
        <Header />
        <div className="h-inner">
          <div className="flex flex-col justify-between h-[13.4375rem] bg-white p-20">
            <div className="text-22 font-semi mb-24 text-black-100">
              깨비님, 오늘도 자기계발에
              <br /> 성공해보세요!
            </div>
            <div>
              <div className="text-16 font-semi text-black-100">2024년 9월 29일</div>
              <div className="flex justify-between items-center mt-12 w-full h-[48px] bg-pm-400 rounded-12">
                <p className="pl-20 text-14 text-pm-700 font-semi">🔥 나의 첫 다짐을 작성해주세요 !</p>
                <div className="flex-center text-center w-[57px] h-[24px] mr-12 bg-pm-500 text-white text-12 font-semi rounded-8">
                  다짐하기
                </div>
              </div>
            </div>
          </div>
          <div className="px-20 pt-24">카드 영역</div>
        </div>
        <Navigation />
      </div>
    </>
  );
}
export default Home;
