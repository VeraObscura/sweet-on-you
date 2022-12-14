/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Artex_112 (https://sketchfab.com/Artex_112)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/strawberry-cake-863b112d64fc4a01a9eaeccc1c0b3e6f
title: Strawberry Cake
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { forwardRef } from "react";

export declare type ObjectMapCustom = {
  nodes: {
    [name: string]: any;
  };
  materials: {
    [name: string]: THREE.Material;
  };
};

type GLTFResult = GLTF & ObjectMapCustom;

export const Model = forwardRef(function Cake(props: any, forwardRef: any) {
  const { nodes, materials } = useGLTF("/scene.gltf") as GLTFResult;
  return (
    <group ref={forwardRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[1, 0.47, 1]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials["Material.005"]}
            />
          </group>
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials["Material.004"]}
          />
          <group
            position={[0.01, 0.45, -0.83]}
            rotation={[0, 0.01, 0]}
            scale={0.15}
          >
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.material_0}
            />
          </group>
          <group position={[0, 0.66, 0]} scale={[0.03, 0.23, 0.03]}>
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials["Material.007"]}
            />
          </group>
          <group position={[0, 0.96, 0]} scale={0.01}>
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials["Material.008"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/scene.gltf");
