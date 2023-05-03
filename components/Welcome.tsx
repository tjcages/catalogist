import { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Environment,
  RenderTexture,
  Text,
  PerspectiveCamera,
} from "@react-three/drei";

const LINE_1 = "Starter Kit";
const LINE_2 = "Hello World";
const LINE_3 = "React & NextJS";
const LINE_4 = "Three Fiber & Lamina";
const SIZE = 12;

export default function _() {
  return (
    <Canvas>
      <PerspectiveCamera position={[0, 0, 50]} makeDefault />
      <Suspense>
        <Typography />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
}

const Typography = () => {
  const { width, height } = useThree((state) => state.viewport);
  const vw = (size: any) => (width * size) / 100;
  const vh = (size: any) => (height * size) / 100;

  return (
    <mesh>
      <planeBufferGeometry args={[width, height, 1]} />
      <meshBasicMaterial toneMapped={false}>
        <RenderTexture attach="map" sourceFile={undefined}>
          <color attach="background" args={["hsl(0,0%,0%)"]} />
          <Text
            font="/fonts/Sohne/Sohne-Buch.otf"
            fontSize={vw(SIZE / 6)}
            position={[0, vh(12), 0]}
          >
            {LINE_1}
          </Text>
          <Text
            font="/fonts/Basement/BasementGrotesque.otf"
            fontSize={vw(SIZE)}
            position={[0, 0, 0]}
          >
            {LINE_2}
          </Text>
          <Text
            font="/fonts/Sohne/Sohne-Buch.otf"
            fontSize={vw(SIZE / 6)}
            position={[-vw(SIZE * 2.7), -vh(7), 0]}
            textAlign="left"
          >
            {LINE_3}
          </Text>
          <Text
            font="/fonts/Sohne/Sohne-Buch.otf"
            fontSize={vw(SIZE / 6)}
            position={[vw(SIZE * 2.475), -vh(7), 0]}
            textAlign="right"
          >
            {LINE_4}
          </Text>
        </RenderTexture>
      </meshBasicMaterial>
    </mesh>
  );
};
