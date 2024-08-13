import React from 'react';
import Game from './components/Game';

function App() {
  return (
    <div className='bg-main-bg bg-cover bg-center'  style={{ backgroundImage: `url('./src/assets/background/bg.png')` }} >
      <Game />
    </div>
  );
}

export default App;
