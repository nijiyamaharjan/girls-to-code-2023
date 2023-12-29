import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import SideNav from './SideNav';

const App = () => {
  return (
    <div>
      <Header title="HEADER" />
      <div className='content-container'>
        <SideNav title="SIDE NAV" />
        <MainContent title="MAIN CONTENT" />
      </div>
      <Footer title="FOOTER" />
    </div>
  );
};

export default App;
