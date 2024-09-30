function Home() {
  const onMoveMyPage = () => {
    window.location.href = '/mypage';
  };
  return (
    <>
      <h1>Home</h1>
      <h1 onClick={onMoveMyPage}>MyPage</h1>
    </>
  );
}
export default Home;
