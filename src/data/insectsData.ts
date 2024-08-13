import Beetle from '../assets/insects/Beetle.png';
import Ant from '../assets/insects/Ant.png';
import Wasp from '../assets/insects/Wasp.png';

//types for the insect data
interface Insect {
  imgSrc: string;
  name: string;
}

export const insectsData: Insect[] = [
  {
    imgSrc: Beetle,
    name: 'Beetle',
  },
  {
    imgSrc: Ant,
    name: 'Ant',
  },
  {
    imgSrc: Wasp,
    name: 'Wasp',
  },
];
