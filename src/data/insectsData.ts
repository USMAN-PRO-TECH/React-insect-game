import Beetle from '../assets/insects/Beetle.png';
import Ant from '../assets/insects/Ant.png';
import Wasp from '../assets/insects/Wasp.png';

//types for the insect data
interface Insect {
  id:number,
  imgSrc: string;
  name: string;
}

export const insectsData: Insect[] = [
  {
    id:0,
    imgSrc: Beetle,
    name: 'Beetle',
  },
  {
    id:1,
    imgSrc: Ant,
    name: 'Ant',
  },
  {
    id:2,
    imgSrc: Wasp,
    name: 'Wasp',
  },
];
