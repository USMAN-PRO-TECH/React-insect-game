import React from 'react';
import Game from './components/Game';
import bg from './assets/background/bg.png'
function App() {
  return (
    <div className='bg-main-bg bg-cover bg-center'  style={{ backgroundImage: `url(${bg})` }} >
      <Game />
    </div>
  );
}

export default App;
