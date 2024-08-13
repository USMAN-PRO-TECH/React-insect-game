import React from 'react';

const Loader: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      textAlign: 'center' 
    }}>
      <img 
        src={'https://cdn.dribbble.com/users/1082816/screenshots/2964780/media/c6a1719a3e5f18338963c44e7c0e3817.gif'} 
        alt="Loading..." 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
    </div>
  );
};

export default Loader;
