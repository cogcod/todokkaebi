import { Route, Routes } from 'react-router-dom';
import AuthCallback from './pages/Login/AuthCallback';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import MyPage from './pages/MyPage/MyPage';
import Projects from './pages/Projects/Projects';
import PopUpSetting from './pages/Common/PopUpSetting';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kakao/callback" element={<AuthCallback />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* TODO: 팝업창 이동 */}
      <PopUpSetting />
    </>
  );
}

export default App;
