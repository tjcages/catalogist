import { useState, useEffect } from "react";
import { Float } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

import BoxGeometry from "./_BoxGeometry";

const _ = ({ texture, hovered, color, position, onClick }) => {
  const [isHovering, setHovering] = useState(hovered);
  const [{ spring }] = useSpring(
    {
      spring: isHovering,
      config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
    },
    [isHovering]
  );
  const scale = spring.to([0, 1], [1, 1.1]);

  useEffect(() => {
    setHovering(hovered);
  }, [hovered]);

  return (
    <Float
      rotationIntensity={1}
      speed={3}
      position={[5, 5, 0]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={22}
      onPointerOver={() => setHovering(1)}
      onPointerOut={() => setHovering(0)}
      onClick={onClick}
    >
      <a.mesh
        rotation={[0, Math.PI / 2, 0]}
        castShadow
        receiveShadow
        scale={scale}
        position={position}
      >
        <BoxGeometry depth={0.25} />
        <a.meshStandardMaterial color={color} attach="material" map={texture} />
      </a.mesh>
    </Float>
  );
};

export default _;
