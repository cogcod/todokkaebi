import PlanCard from './PlanCard';

function Plan() {
  return (
    <div>
      {/* <div className="text-center mt-6">
        <div className="text-20 font-semi text-gr-700">계획 중인 프로젝트가 없습니다.</div>
        <p className="mt-10 text-16 text-gr-600">+ 버튼을 눌러 새 프로젝트를 추가해보세요</p>
      </div> */}
      <PlanCard />
      <PlanCard />
      <PlanCard />
      <PlanCard />
    </div>
  );
}

export default Plan;
