import { Route, Routes } from 'react-router-dom';

import AuthCallback from './pages/Home/AuthCallback';
import Login from './pages/Home/Login';
import Home from './pages/Home/Home';
import MyPage from './pages/MyPage/MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/kakao/callback" element={<AuthCallback />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
