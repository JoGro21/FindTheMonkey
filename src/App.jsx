import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GameEnvironment from "./components/GameEnvironment/GameEnvironment";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import MessagePanel from "./components/ControlPanel/MessagePanel";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { resetGameStore } from "./store/actions/scores-actions";

const App = () => {
  const dispatch = useDispatch();

  const [modalOn, setModalOn] = useState(false);
  const [reset, setReset] = useState(false);

  const gameActive = useSelector((state) => {
    return state.scores.gameActive;
  });

  const closeModalHandler = () => {
    setModalOn(false);
    dispatch(resetGameStore());
  };

  const resetGameHandler = () => {
    console.log("RESETTING THE GAME");
    setReset((prevState) => !prevState);
    dispatch(resetGameStore());
  };

  useEffect(() => {
    if (!gameActive) {
      setModalOn(true);
    } else {
      setModalOn(false);
    }
  }, [gameActive]);

  return (
    <Fragment>
      <Canvas camera={{ position: [2, 4, 7] }} key={reset} shadows>
        <OrbitControls></OrbitControls>
        <GameEnvironment></GameEnvironment>
      </Canvas>
      <ControlPanel onReset={resetGameHandler}></ControlPanel>
      {modalOn && <MessagePanel onClose={closeModalHandler}></MessagePanel>}
    </Fragment>
  );
};

export default App;
