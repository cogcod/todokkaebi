// import { useNavigate } from 'react-router-dom';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';

function Home() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="h-full relative bg-gr-50">
        <Header />
        <Navigation />
      </div>
    </>
  );
}
export default Home;
