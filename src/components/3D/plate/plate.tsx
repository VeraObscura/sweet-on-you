import * as THREE from "three";
import { Cylinder, useTexture } from "@react-three/drei";
import ceramic from "assets/textures/ceramic.jpg";

interface PlateProps {
  rotation: THREE.Euler;
}

const Plate = ({ rotation }: PlateProps) => {
  const ceramicTexture = useTexture(ceramic);

  return (
    <Cylinder
      rotation={rotation}
      receiveShadow
      castShadow
      args={[1.3, 1.3, 0.05, 40]}
      position={[0, -0.5, 0]}
    >
      <meshStandardMaterial map={ceramicTexture} color="white" />
    </Cylinder>
  );
};

export default Plate;
