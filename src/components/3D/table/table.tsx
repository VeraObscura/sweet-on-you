import * as THREE from "three";
import { RoundedBox, useTexture } from "@react-three/drei";
import gingham from "@/assets/textures/red_gingham.jpg";

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
      key={undefined}
      visible={undefined}
      attach={undefined}
      onUpdate={undefined}
      up={undefined}
      scale={undefined}
      matrix={undefined}
      quaternion={undefined}
      layers={undefined}
      dispose={undefined}
      type={undefined}
      id={undefined}
      uuid={undefined}
      name={undefined}
      parent={undefined}
      modelViewMatrix={undefined}
      normalMatrix={undefined}
      matrixWorld={undefined}
      matrixAutoUpdate={undefined}
      matrixWorldNeedsUpdate={undefined}
      castShadow={undefined}
      frustumCulled={undefined}
      renderOrder={undefined}
      animations={undefined}
      userData={undefined}
      customDepthMaterial={undefined}
      customDistanceMaterial={undefined}
      isObject3D={undefined}
      onBeforeRender={undefined}
      onAfterRender={undefined}
      applyMatrix4={undefined}
      applyQuaternion={undefined}
      setRotationFromAxisAngle={undefined}
      setRotationFromEuler={undefined}
      setRotationFromMatrix={undefined}
      setRotationFromQuaternion={undefined}
      rotateOnAxis={undefined}
      rotateOnWorldAxis={undefined}
      rotateX={undefined}
      rotateY={undefined}
      rotateZ={undefined}
      translateOnAxis={undefined}
      translateX={undefined}
      translateY={undefined}
      translateZ={undefined}
      localToWorld={undefined}
      worldToLocal={undefined}
      lookAt={undefined}
      add={undefined}
      remove={undefined}
      removeFromParent={undefined}
      clear={undefined}
      getObjectById={undefined}
      getObjectByName={undefined}
      getObjectByProperty={undefined}
      getWorldPosition={undefined}
      getWorldQuaternion={undefined}
      getWorldScale={undefined}
      getWorldDirection={undefined}
      raycast={undefined}
      traverse={undefined}
      traverseVisible={undefined}
      traverseAncestors={undefined}
      updateMatrix={undefined}
      updateMatrixWorld={undefined}
      updateWorldMatrix={undefined}
      toJSON={undefined}
      clone={undefined}
      copy={undefined}
      addEventListener={undefined}
      hasEventListener={undefined}
      removeEventListener={undefined}
      dispatchEvent={undefined}
      onClick={undefined}
      onContextMenu={undefined}
      onDoubleClick={undefined}
      onPointerUp={undefined}
      onPointerDown={undefined}
      onPointerOver={undefined}
      onPointerOut={undefined}
      onPointerEnter={undefined}
      onPointerLeave={undefined}
      onPointerMove={undefined}
      onPointerMissed={undefined}
      onPointerCancel={undefined}
      onWheel={undefined}
      material={undefined}
      geometry={undefined}
      morphTargetInfluences={undefined}
      morphTargetDictionary={undefined}
      isMesh={undefined}
      updateMorphTargets={undefined}
    >
      <meshStandardMaterial map={ginghamTexture} color="pink" />
    </RoundedBox>
  );
};

export default Table;
