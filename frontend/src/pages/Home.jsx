import './Home.css';
import Header from '../components/Header';
const Home = () => {
  return (
    <>
    <Header/>
    <div className="home-container">
      <div className="content">
        <h1 className="title">VHub</h1>
        <p className="description">Drive In, Drive Out: Quality Repairs, Every Time</p>
        
      </div>
    </div>
    </>
  );
};

export default Home;
