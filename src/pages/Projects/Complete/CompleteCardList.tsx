function CompleteCardList() {
  return (
    <div className="flex-center justify-between mt-8 pl-8 py-10">
      <div className="truncate w-[132px] text-gr-700 text-12">몇글자까지들어갈까요몇글자까지들어갈까요</div>
      <div className="flex-center">
        <div className="text-gr-600 text-10 mr-8">2024.10.01 / 2024.09.28</div>
        <div className="flex-center text-gr-700 text-12 w-[44px] h-[20px] bg-gr-50 rounded-2">D-7</div>
        {/* <div className="flex-center text-red-800 text-12 w-[44px] h-[20px] bg-red-100 rounded-2">D+3</div> */}
      </div>
    </div>
  );
}

export default CompleteCardList;
