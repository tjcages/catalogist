import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useStore } from "@/store";

import AppIcon from "./_AppIcon";
import Geo from "./_Geo"
// import Particles from "./_Particles";

const _ = () => {
  const preview = useStore((state) => state.preview);
  const pushPage = useStore((state) => state.pushPage);
  const previewPage = useStore((state) => state.previewPage);

  const textures = useLoader(THREE.TextureLoader, [
    "/icons/apple-music.png",
    "/icons/spotify.png",
  ]);

  textures.forEach((texture) => {
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(1, 1);
    texture.offset.set(0.5, 0.5);
  });

  return (
    <Canvas
      shadows
      orthographic
      camera={{ fov: 100, position: [0, 0, 10], zoom: 10 }}
    >
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

      <AppIcon
        texture={textures[0]}
        hovered={preview == "apple" ? 1 : 0}
        position={[-0.3, 0.7, 0.7]}
        onClick={() => pushPage("apple")}
      />
      <AppIcon
        texture={textures[1]}
        hovered={preview == "spotify" ? 1 : 0}
        color="#1ED760"
        onClick={() => pushPage("spotify")}
      />
      {/* <Geo /> */}
      {/* <Particles count={500} theme={preview} /> */}

      {/* <ContactShadows
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
      /> */}
      <Environment preset="warehouse" />
    </Canvas>
  );
};

export default _;
