import * as THREE from "three";
import { RoundedBox, useTexture } from "@react-three/drei";
import gingham from "assets/textures/red_gingham.jpg";

const Table = () => {
  const ginghamTexture = useTexture(gingham);
  ginghamTexture.wrapS = ginghamTexture.wrapT = THREE.RepeatWrapping;
  ginghamTexture.offset.set(0, 0);
  ginghamTexture.repeat.set(0.2, 0.4);

  return (
    <RoundedBox
      receiveShadow
      radius={0.2}
      smoothness={4}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[1, -1.05, 1]}
      args={[12, 10]}
    >
      <meshStandardMaterial map={ginghamTexture} color="pink" />
    </RoundedBox>
  );
};

export default Table;
