function PlanCardList() {
  return (
    <div className="flex-center justify-between mt-8 pl-8 py-10">
      <div className="text-gr-700 text-12">노래방에서 100점 맞기</div>
      <div className="flex-center">
        <div className="text-gr-600 text-10 mr-8">2024.10.01 ~ 2024.10.10</div>
        {/* <div className="flex-center text-gr-700 text-12 w-[44px] h-[20px] bg-gr-50 rounded-2">D-7</div> */}
        <div className="flex-center text-red-800 text-12 w-[44px] h-[20px] bg-red-100 rounded-2">D+3</div>
      </div>
    </div>
  );
}

export default PlanCardList;
