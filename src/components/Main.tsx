import React from 'react';
import { Box, Container } from '@mui/material';
import InsectButton from './InsectButton';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { insectsData } from '../data/insectsData';
import Owl from './Owl';
import Insect from './Insect';
import bg from '../assets/background/bg.png'
import { useMyContext } from '../context/Context';

// types for the insect data
interface InsectData {
  id: number;
  type: string;
  imgSrc: string;
  name: string;
}

const Main: React.FC = () => {
  const { insects } = useMyContext();

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        sx={{
          paddingTop: '100px',
          width: '100vw',
          height: '100vh',
          backgroundImage:
            `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
      >
        <Container>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
            {insectsData.map((insect: InsectData) => (
              <InsectButton key={insect.id} imgSrc={insect.imgSrc} name={insect.name} />
            ))}
          </Box>
          <Owl />
          {insects.map((insect: InsectData) => (
            <Insect key={insect.id} id={insect.id} type={insect.type} imgSrc={insect.imgSrc} />
          ))}
        </Container>
      </Box>
    </DndProvider>
  );
};

export default Main;
