// import { useNavigate } from 'react-router-dom';
import Contents from '../Layout/Contents';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';

function Home() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="h-full bg-gr-50">
        <Header />
        <Contents />
        <Navigation />
      </div>
    </>
  );
}
export default Home;
