import React, { createContext, useContext, useState, ReactNode } from "react";
import { insectsData } from "../data/insectsData";

// Define types for the context values
interface Insect {
  id: number;
  type: string;
  imgSrc: string;
}

interface Position {
  x: number;
  y: number;
}

interface MyContextType {
  insects: Insect[];
  addInsect: (type: string) => void;
  handleDrag: (x: number, y: number) => void;
  currentInsectPosition: Position | null;
  handleInsectEat: (id: number) => void;
  moveEye: (eye: HTMLElement, insectPosition: Position) => void;
}

// Create the context with the type
const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyStateProps {
  children: ReactNode;
}

export default function Context({ children }: MyStateProps) {
  const [insects, setInsects] = useState<Insect[]>([]);
  const [currentInsectPosition, setCurrentInsectPosition] = useState<Position | null>(null);

  const addInsect = (type: string) => {
    const src = insectsData.find((singleInsect: { name: string; }) => singleInsect.name === type);
    if (src) {
      setInsects([...insects, {
        type,
        id: Date.now(),
        imgSrc: src.imgSrc
      }]);
    }
  };

  const handleInsectEat = (id: number) => {
    setInsects(insects.filter((insect) => insect.id !== id));
  };

  const handleDrag = (x: number, y: number) => {
    setCurrentInsectPosition({ x, y });
  };

  const moveEye = (eye: HTMLElement, insectPosition: Position) => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeX = eyeRect.left + eyeRect.width / 2;
    const eyeY = eyeRect.top + eyeRect.height / 2;
    const angle = Math.atan2(
      insectPosition.y - eyeY,
      insectPosition.x - eyeX
    );
    const distance = Math.min(
      15,
      Math.sqrt(
        (insectPosition.x - eyeX) ** 2 + (insectPosition.y - eyeY) ** 2
      )
    );
    eye.style.transform = `translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;
  };

  return (
    <MyContext.Provider
      value={{
        insects,
        addInsect,
        handleDrag,
        currentInsectPosition,
        handleInsectEat,
        moveEye,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyState provider");
  }
  return context;
}
