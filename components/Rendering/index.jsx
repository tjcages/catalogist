import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import BoxGeometry from "./_BoxGeometry";
import Particles from "./_Particles";

const _ = ({ mobile, theme }) => {
  const mouse = useRef([0, 0]);

  return (
    <Canvas shadows orthographic camera={{ fov: 100, position: [0, 0, 10], zoom: 10 }}>
      {/* <hemisphereLight intensity={0.4} groundColor="white" /> */}
      <directionalLight position={[10, -15, -10]} intensity={0.5} />
      <spotLight
        position={[5, 10, -15]}
        intensity={1}
        angle={0.1}
        penumbra={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.000001}
      />

      <Float
        rotationIntensity={1}
        speed={3}
        position={[2, 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={22}
      >
        <SpotifyIcon />
        <AppleIcon />
      </Float>

      <Particles count={mobile ? 250 : 500} mouse={mouse} theme={theme} />

      <ContactShadows
        resolution={480}
        scale={20}
        position={[0.15, -0.75, 0.1]}
        blur={0.75}
        opacity={0.5}
        far={1.05}
        color="#FB5C74"
      />
      <ContactShadows
        resolution={480}
        scale={20}
        position={[0, -0.75, 0]}
        blur={0.75}
        opacity={0.75}
        far={1.05}
        color="#1ED760"
      />
      <Environment preset="warehouse" />
    </Canvas>
  );
};

function SpotifyIcon(props) {
  const spotifyMap = useLoader(THREE.TextureLoader, "/icons/spotify.png");

  spotifyMap.wrapS = spotifyMap.wrapT = THREE.ClampToEdgeWrapping;
  spotifyMap.repeat.set(1, 1);
  spotifyMap.offset.set(0.5, 0.5);

  return (
    <mesh rotation={[0, Math.PI / 2, 0]} castShadow receiveShadow {...props}>
      <BoxGeometry depth={0.25} />
      <meshStandardMaterial
        color="#1ED760"
        attach="material"
        map={spotifyMap}
      />
    </mesh>
  );
}

function AppleIcon(props) {
  const appleMap = useLoader(THREE.TextureLoader, "/icons/apple-music.png");

  appleMap.wrapS = appleMap.wrapT = THREE.ClampToEdgeWrapping;
  appleMap.repeat.set(1, 1);
  appleMap.offset.set(0.5, 0.5);

  return (
    <mesh
      rotation={[0, Math.PI / 2, 0]}
      position={[-0.3, 0.7, 0.7]}
      castShadow
      receiveShadow
      {...props}
    >
      <BoxGeometry depth={0.25} />
      <meshStandardMaterial
        // color="#FB5C74"
        attach="material"
        map={appleMap}
      />
    </mesh>
  );
}

export default _;
