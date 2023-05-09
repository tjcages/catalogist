import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, MeshDistortMaterial, Shadow } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const shadow = useRef();
  const { nodes } = useGLTF("/geo.min.glb", true);
  useFrame(({ clock }) => {
    const t = (1 + Math.sin(clock.getElapsedTime() * 1.5)) / 2;
    group.current.position.y = t / 3;
    shadow.current.scale.y = shadow.current.scale.z = 1 + t;
    shadow.current.scale.x = (1 + t) * 1.25;
    group.current.rotation.x = group.current.rotation.z += 0.005;
    // group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.mouse[0] / 2, 0.05)
    // group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, state.mouse[1] / 4, 0.03)
  });
  return (
    <group {...props} dispose={null}>
      <group ref={group}>
        <mesh geometry={nodes.geo.geometry} castShadow receiveShadow>
          <MeshDistortMaterial
            color="#ffffff"
            flatShading
            roughness={1}
            metalness={0.5}
            factor={15}
            speed={5}
          />
        </mesh>
        <mesh geometry={nodes.geo.geometry}>
          <meshBasicMaterial color="red" wireframe />
        </mesh>
      </group>
      <Shadow
        ref={shadow}
        opacity={0.3}
        rotation-x={-Math.PI / 2}
        position={[0, -1.51, 0]}
      />
    </group>
  );
}
