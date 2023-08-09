import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import GameEnvironment from "./components/GameEnvironment/GameEnvironment";

const App = () => {
  return (
    <Canvas camera={{ position: [2, 4, 7] }}>
      <Environment preset="forest" background blur={0.3}></Environment>
      <OrbitControls></OrbitControls>
      <GameEnvironment></GameEnvironment>
    </Canvas>
  );
};

export default App;
