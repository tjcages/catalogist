import { useRef, Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import Sparks from "../Rendering/_Sparks";
import Particles from "./_Particles";
const Effects = lazy(() => import("./_Effects"));

const _ = ({ mobile }: { mobile: boolean }) => {
  const mouse = useRef([0, 0]);

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
        {/* <Particles count={mobile ? 2500 : 5000} mouse={mouse} /> */}
        <Sparks
          count={20}
          mouse={mouse}
          colors={[
            "#FA243C",
            "#FA243C",
            "#FB5C74",
            "#FB5C74",
            "1ED760",
            "1ED760",
            "1ED760",
            "1ED760",
          ]}
        />
        {/* <Effects /> */}
      </Suspense>
    </Canvas>
  );
};

export default _;
