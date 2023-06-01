'use client'
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RenderTexture,
  PerspectiveCamera,
  Text,
  OrbitControls,
} from "@react-three/drei";

function Cube() {
  const textRef = useRef() as any;
  // useFrame(
  //   (state) =>
  //     (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  // );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        {/* <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 5]}
          />
          <color attach="background" args={["orange"]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Text ref={textRef} fontSize={4} color="#555">
            hello
          </Text>
        </RenderTexture> */}
      </meshStandardMaterial>
    </mesh>
  );
}

const _ = () => {
  return (
    <Canvas
      linear
      dpr={[1, 2]}
      gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
      camera={{ fov: 100, position: [0, 0, 30] }}
      onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={["white", 50, 190]} />
        <pointLight distance={100} intensity={4} color="white" />
        <Cube />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      </Suspense>
    </Canvas>
  );
};

export default _;
