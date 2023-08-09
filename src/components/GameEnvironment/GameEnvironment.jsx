import GameFloor from "./GameFloor";
//import AnimatedCoconut from "../GameAssets/AnimatedCoconut";
import { Coconut } from "../GameAssets/Coconut";
import { useState, useEffect } from "react";

const GameEnvironment = (props) => {
  const [coconutsList, setCoconutsList] = useState([]);

  useEffect(() => {
    const list = generateCoconutsList();
    setCoconutsList(list);
  }, []);

  return (
    <>
      <GameFloor floorColor={"#4d7a2b"} />
      {coconutsList.map((c, index) => (
        <Coconut
          scale={0.5}
          position={c.position}
          hasMonkey={c.hasMonkey}
          coconutColor={c.color}
          key={index}
        />
      ))}
    </>
  );
};

const generateCoconutsList = () => {
  const colorList = [
    "#cf5113",
    "#c0c238",
    "#71d453",
    "#2a755a",
    "#2287b3",
    "#7045a8",
  ];
  const positionsList = [
    [0, 1, 0],
    [0, 1, -3],
    [0, 1, 3],
    [-3, 1, -3],
    [-3, 1, 0],
    [-3, 1, 3],
    [3, 1, -3],
    [3, 1, 0],
    [3, 1, 3],
  ];
  const monkeyStatus = createMonkeyPosition();
  const coconutList = [];
  for (let x = 0; x < monkeyStatus.length; x++) {
    const entry = {
      hasMonkey: monkeyStatus[x],
      color: colorList[Math.floor(Math.random() * colorList.length)],
      position: positionsList[x],
    };
    coconutList.push(entry);
  }
  return coconutList;
};

const createMonkeyPosition = () => {
  let list = Array(9).fill(false);
  let randomPos = Math.floor(Math.random() * 9);
  list[randomPos] = true;
  return list;
};

export default GameEnvironment;
