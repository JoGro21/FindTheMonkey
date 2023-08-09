import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useRef } from "react";
import * as THREE from "three";

const Spotlight = (props) => {
  const {
    lightColor = "#dce6df",
    position = [2, 2, 2],
    intensity = 0.3,
    maxIntensity = 5,
    target = [0, 0, 0],
    flashing = false,
    showHelper = false,
  } = props;

  const spotlightRef = useRef();
  const [targetIntensity, setTargetIntensity] = useState(intensity);
  const [flashIntensity, setFlashIntensity] = useState(intensity);

  const { clock } = useThree();

  let lastFlashTime = clock.getElapsedTime();

  const dampFactor = 0.05; // Smoothing factor
  const amp = 10.0; // Amplitude for random intensity

  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.position.x = position[0];
      spotlightRef.current.position.y = position[1];
      spotlightRef.current.position.z = position[2];
      spotlightRef.current.target.x = target[0];
      spotlightRef.current.target.y = target[1];
      spotlightRef.current.target.z = target[2];
      spotlightRef.current.color = new THREE.Color(lightColor);
    }
  }, [position, target, spotlightRef, lightColor]);

  useEffect(() => {
    if (spotlightRef.current) {
      spotlightRef.current.intensity = flashIntensity;
    }
  }, [flashIntensity]);

  useFrame(() => {
    if (flashing && clock.getElapsedTime() - lastFlashTime >= 2) {
      const randomNumber = Math.floor(Math.random() * maxIntensity) + 1;
      setTargetIntensity(amp * randomNumber);
      lastFlashTime = clock.getElapsedTime();
    }
    // Damped harmonic oscillation formula for smoothing
    const delta = targetIntensity - flashIntensity;
    const damp = delta * dampFactor;
    setFlashIntensity(flashIntensity + damp);
  });

  return (
    <>
      <directionalLight ref={spotlightRef} castShadow>
        {showHelper && (
          <mesh {...props} ref={spotlightRef}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color={new THREE.Color(lightColor)}
            ></meshStandardMaterial>
          </mesh>
        )}
      </directionalLight>
    </>
  );
};

export default Spotlight;
