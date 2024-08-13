import Navbar from './components/Navbar'
import Main from './components/Main';
import Context from './context/Context';

const App = () => {

  return (
    <>
      <Context>
        <Navbar />
        <Main />
      </Context>
    </>
  );
};

export default App;
