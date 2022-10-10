import * as THREE from "three";
//import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Suspense, useLayoutEffect, useRef, useState } from "react";
//import { Canvas, ThreeEvent, Vector3 } from "@react-three/fiber";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { Cylinder } from "@react-three/drei";
//import { Model } from "./Scene";

import CameraController from "@/components/3D/cameraController/cameraController";
import UIContainer from "@/shared/uiContainer";
import Table from "@/components/3D/table";
//import Plate from "@/components/3D/plate";

import ceramic from "@/assets/textures/ceramic.jpg";
import styles from "./crumbCoatScene.module.scss";

// const Cake = () => {
//   const cakeMesh = useRef<THREE.Mesh>(null!);
//   const [element, setElement] = useState<THREE.Mesh | null>(null);
//   const [rotation, setRotation] = useState<Vector3>([0, 0, 0]);
//   const [plateRotation, setPlateRotation] = useState<THREE.Euler>(
//     new THREE.Euler(0, 0, 0, "XYZ")
//   );

//   useEffect(() => {
//     const element = cakeMesh.current;
//     setElement(element);
//   }, []);

//   const turnCake = () => {
//     if (element) {
//       setRotation([0, element.rotation.y + 0.1, 0]);
//       setPlateRotation(new THREE.Euler(0, element.rotation.y + 0.2, 0, "XYZ"));
//     }
//   };

//   return (
//     <group onClick={() => turnCake()}>
//       <Model rotation={rotation} ref={cakeMesh} castShadow receiveShadow />
//       <Plate rotation={plateRotation} />
//     </group>
//   );
// };

interface CrumbCoatSceneProps {
  link: string | null;
  onClick?: () => void;
}

export const CrumbCoatScene = ({ link, onClick }: CrumbCoatSceneProps) => {
  const [allowControls, setAllowControls] = useState(true);
  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef<THREE.CanvasTexture | null>(null!);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = 1024;
    canvas.height = 1024;

    const context = canvas.getContext("2d");
    if (context) {
      context.rect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "red";
      context.fill();
    }
  }, []);

  const handleBrushPointerMove = ({ uv }: ThreeEvent<PointerEvent>) => {
    if (allowControls) {
      return;
    }
    if (canvasRef && uv) {
      const canvas = canvasRef.current;

      const x = uv.x * canvas.width;
      const y = (1 - uv.y) * canvas.height;

      const context = canvas.getContext("2d");
      let img = document.getElementById("image") as HTMLImageElement;
      const canvasPattern = context?.createPattern(img, "repeat");
      if (context) {
        context.beginPath();
        context.arc(x - 2, y - 2, 50, 0, 3 * Math.PI);
        context.createLinearGradient(0, 0, 200, 0);
        context.fillStyle = canvasPattern ? canvasPattern : "red";
        context.fill();
        textureRef.current!.needsUpdate = true;
      }
    }
  };

  return (
    <div className={styles.crumbCoatScene}>
      <img
        id={"image"}
        alt={"cake-canvas"}
        src={ceramic}
        style={{ display: "none" }}
      />
      <UIContainer link={link} onClick={onClick} />

      <Canvas shadows camera={{ position: [2, 2, 2], fov: 40 }}>
        <Suspense fallback={null}>
          {allowControls && <CameraController />}

          <ambientLight intensity={0.1} />
          <directionalLight
            intensity={0.2}
            color={"#e6c35c"}
            position={[10, 20, 10]}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}
          />
          {/* <Cake /> */}

          <cylinderBufferGeometry attach="geometry" args={[1, 16, 12]} />
          <Cylinder
            onPointerDown={() => setAllowControls(false)}
            onPointerUp={() => setAllowControls(true)}
            onPointerMove={(e) => handleBrushPointerMove(e)}
            receiveShadow
            castShadow
            args={[1, 1, 2, 40]}
            position={[0, -0.5, 0]}
          >
            {/* <meshBasicMaterial color="white" />
            <meshPhongMaterial color="red" />
            <meshPhongMaterial color="green" /> */}

            <meshStandardMaterial attach="material" metalness={0} roughness={1}>
              <canvasTexture
                ref={textureRef}
                attach="map"
                image={canvasRef.current}
              />
            </meshStandardMaterial>
          </Cylinder>
          <Table />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CrumbCoatScene;
