import * as THREE from "three";
import {
  Fragment,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Canvas, ThreeElements, Vector3 } from "@react-three/fiber";
// import { useSpring, animated } from "@react-spring/three";
import { Model } from "./Scene";

import CameraController from "@/components/3D/cameraController/cameraController";
import UIContainer from "@/shared/uiContainer";
import Table from "@/components/3D/table";
import Plate from "@/components/3D/plate";

import styles from "./cakeScene.module.scss";

const Cake = () => {
  const cakeMesh = useRef<THREE.Mesh>(null!);
  const [element, setElement] = useState<THREE.Mesh | null>(null);
  const [rotation, setRotation] = useState<Vector3>([0, 0, 0]);
  const [plateRotation, setPlateRotation] = useState<THREE.Euler>(
    new THREE.Euler(0, 0, 0, "XYZ")
  );

  useEffect(() => {
    const element = cakeMesh.current;
    setElement(element);
  }, []);

  const turnCake = () => {
    if (element) {
      setRotation([0, element.rotation.y + 0.1, 0]);
      setPlateRotation(new THREE.Euler(0, element.rotation.y + 0.2, 0, "XYZ"));
    }
  };

  return (
    <group onClick={() => turnCake()}>
      <Frosting rotation={plateRotation} />
      <Model rotation={rotation} ref={cakeMesh} castShadow receiveShadow />
      <Plate rotation={plateRotation} />
    </group>
  );
};

const Sphere = (props: ThreeElements["mesh"]) => {
  // const mesh = useRef<THREE.Mesh>(null!);
  // const [isInvisible, setIsInvisible] = useState(true);
  // const { scale } = useSpring({ scale: isInvisible ? 0.05 : 0.1 });
  const isInvisible = true;

  return (
    // <animated.mesh
    //   scale={scale}
    //   position={props.position}
    //   ref={mesh}
    //   onClick={() => {
    //     setIsInvisible(!isInvisible);
    //   }}
    // >
    <Fragment>
      <sphereGeometry />
      <meshPhongMaterial
        color="white"
        opacity={isInvisible ? 0 : 1}
        transparent={isInvisible}
      />
    </Fragment>
    // </animated.mesh>
  );
};

interface FrostingProps {
  rotation: THREE.Euler;
}

const Frosting = ({ rotation }: FrostingProps) => {
  const [spherePositions, setSpherePositions] = useState<Vector3[]>([]);

  useLayoutEffect(() => {
    const sphereNum = 35;
    const radius = 1;
    const radianInterval = (2.0 * Math.PI) / sphereNum;
    const wheelCenter = {
      x: 0,
      y: 0,
    };

    const positions = [];
    for (let i = 0; i < sphereNum; i++) {
      const x = wheelCenter.x + Math.cos(radianInterval * i) * radius;
      const y = -0.4;
      const z = wheelCenter.y + Math.sin(radianInterval * i) * radius;

      const pos: Vector3 = [x, y, z];
      positions.push(pos);
    }
    setSpherePositions(positions);
  }, []);

  return (
    <group rotation={rotation}>
      {spherePositions.map((position, index) => {
        return <Sphere key={index} position={position} />;
      })}
    </group>
  );
};

interface CakeSceneProps {
  onClick: () => void;
  isClosed?: boolean;
}

export const CakeScene = ({ onClick, isClosed = false }: CakeSceneProps) => {
  return (
    <div className={styles.cakeScene}>
      <UIContainer onClick={onClick} isClosed={isClosed} />

      <Canvas shadows camera={{ position: [2, 2, 2], fov: 40 }}>
        <Suspense fallback={null}>
          <CameraController />
          <ambientLight intensity={0.1} />
          <directionalLight
            intensity={0.2}
            color={"#e6c35c"}
            position={[10, 20, 10]}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
          />
          <Cake />

          <Table />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CakeScene;
