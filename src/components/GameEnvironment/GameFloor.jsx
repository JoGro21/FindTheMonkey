import { useCursor } from "@react-three/drei";
import { useState } from "react";

const GameFloor = ({ floorColor = "#8e9599", floorSize = 10, ...props }) => {
  const [pointerOnFloor, setPointerOnFloor] = useState(false);

  const togglePointerOnFloor = () => {
    setPointerOnFloor(!pointerOnFloor);
  };

  useCursor(pointerOnFloor);

  return (
    <mesh
      rotation-x={-Math.PI / 2}
      position-y={-0.001}
      onPointerEnter={togglePointerOnFloor}
      onPointerLeave={togglePointerOnFloor}
      receiveShadow
    >
      <planeGeometry args={[floorSize, floorSize]} />
      <meshStandardMaterial color={floorColor} />
    </mesh>
  );
};

export default GameFloor;
