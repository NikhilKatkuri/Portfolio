"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

interface AntigravityProps {
  count?: number;
  sphereRadius?: number;
  particleSize?: number;
  color?: string;

  lerpSpeed?: number;

  mouseInfluence?: number;
  jellyStrength?: number;

  wobbleStrength?: number;
  wobbleSpeed?: number;

  pulseSpeed?: number;
  particleVariance?: number;

  depthFactor?: number;

  autoAnimate?: boolean;

  particleShape?: "capsule" | "sphere" | "box" | "tetrahedron";
}

type Particle = {
  baseX: number;
  baseY: number;
  baseZ: number;

  x: number;
  y: number;
  z: number;

  vx: number;
  vy: number;
  vz: number;

  size: number;
  phase: number;
  noise: number;
};

const AntigravityInner: React.FC<AntigravityProps> = ({
  count = 1900,

  sphereRadius = 9,

  particleSize = 0.4,

  color = "#5227FF",

  mouseInfluence = 4,

  jellyStrength = 1.8,

  wobbleStrength = 0.45,

  wobbleSpeed = 1.5,

  pulseSpeed = 2,

  particleVariance = 0.25,

  depthFactor = 1,

  autoAnimate = true,

  particleShape = "capsule",
}) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const { viewport, gl } = useThree();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const smoothMouse = useRef({
    x: 0,
    y: 0,
  });

  const spherePosition = useRef({
    x: 0,
    y: 0,
  });

  const dropImpulse = useRef(0);

  const lastTapTime = useRef(0);

  useEffect(() => {
    const canvas = gl.domElement;

    const handlePointerDown = () => {
      const now = performance.now();

      const elapsed = now - lastTapTime.current;

      if (elapsed > 0 && elapsed < 320) {
        dropImpulse.current = 1;
      }

      lastTapTime.current = now;
    };

    canvas.addEventListener("pointerdown", handlePointerDown);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [gl]);

  const particles = useMemo<Particle[]>(() => {
    const temp: Particle[] = [];

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / Math.max(1, count - 1)) * 2;

      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));

      const theta = goldenAngle * i;

      const surfaceVariation = 0.985 + Math.sin(i * 12.9898) * 0.008;

      const radius = sphereRadius * surfaceVariation;

      const x = Math.cos(theta) * radiusAtY * radius;

      const finalY = y * radius;

      const z = Math.sin(theta) * radiusAtY * radius;

      temp.push({
        baseX: x,
        baseY: finalY,
        baseZ: z,

        x,
        y: finalY,
        z,

        vx: 0,
        vy: 0,
        vz: 0,

        size: 0.94 + Math.sin(i * 7.31) * 0.05,

        phase: (i * goldenAngle) % (Math.PI * 2),

        noise: 0.95 + Math.sin(i * 4.73) * 0.05,
      });
    }

    return temp;
  }, [count, sphereRadius]);

  useFrame((state) => {
    const mesh = meshRef.current;

    if (!mesh) return;

    const time = state.clock.getElapsedTime();

    const pointer = state.pointer;

    dropImpulse.current *= 0.965;

    if (dropImpulse.current < 0.001) {
      dropImpulse.current = 0;
    }

    const targetMouseX = (pointer.x * viewport.width) / 2;

    const targetMouseY = (pointer.y * viewport.height) / 2;

    let desiredMouseX = targetMouseX;

    let desiredMouseY = targetMouseY;

    if (autoAnimate) {
      desiredMouseX += Math.sin(time * 0.45) * viewport.width * 0.06;

      desiredMouseY += Math.cos(time * 0.6) * viewport.height * 0.04;
    }

    smoothMouse.current.x += (desiredMouseX - smoothMouse.current.x) * 0.045;

    smoothMouse.current.y += (desiredMouseY - smoothMouse.current.y) * 0.045;

    mouse.current.x = smoothMouse.current.x;

    mouse.current.y = smoothMouse.current.y;

    spherePosition.current.x +=
      (mouse.current.x * 0.22 - spherePosition.current.x) * 0.035;

    spherePosition.current.y +=
      (mouse.current.y * 0.22 - spherePosition.current.y) * 0.035;

    const mouseX = mouse.current.x;

    const mouseY = mouse.current.y;

    const mouseLength = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

    const normalizedMouseX = mouseLength > 0 ? mouseX / mouseLength : 0;

    const normalizedMouseY = mouseLength > 0 ? mouseY / mouseLength : 0;

    particles.forEach((particle, i) => {
      const length = Math.sqrt(
        particle.baseX ** 2 + particle.baseY ** 2 + particle.baseZ ** 2,
      );

      const nx = particle.baseX / length;

      const ny = particle.baseY / length;

      const nz = particle.baseZ / length;

      const facing = nx * normalizedMouseX + ny * normalizedMouseY;

      const positiveFacing = Math.max(0, facing);

      const deformation = positiveFacing * mouseInfluence * jellyStrength;

      const compression = Math.max(0, -facing) * mouseInfluence * 0.35;

      const wobble =
        Math.sin(time * wobbleSpeed + particle.phase + particle.baseX * 0.35) *
        wobbleStrength *
        particle.noise;

      const wobble2 =
        Math.cos(time * wobbleSpeed * 0.7 + particle.phase) *
        wobbleStrength *
        0.6;

      const breathing =
        Math.sin(time * pulseSpeed + particle.phase) * 0.12 * particleVariance;

      let targetX = particle.baseX;

      let targetY = particle.baseY;

      let targetZ = particle.baseZ;

      targetX += normalizedMouseX * deformation;

      targetY += normalizedMouseY * deformation;

      targetX *= 1 - compression * 0.025;

      targetY *= 1 - compression * 0.025;

      targetX += nx * wobble;

      targetY += ny * wobble;

      targetZ += nz * wobble2;

      targetX *= 1 + breathing;

      targetY *= 1 + breathing;

      targetZ *= 1 + breathing;

      const centerDistance = Math.sqrt(
        particle.baseX ** 2 + particle.baseY ** 2,
      );

      const centerInfluence = Math.max(0, 1 - centerDistance / sphereRadius);

      const dropInfluence = Math.pow(centerInfluence, 2.4);

      const dropStrength = dropImpulse.current * dropInfluence * 20;

      targetZ -= dropStrength;

      const dropSqueeze = 1 - dropInfluence * dropImpulse.current * 0.18;

      targetX *= dropSqueeze;

      targetY *= dropSqueeze;

      const dropWobble =
        Math.sin(time * 8 + particle.phase) *
        dropImpulse.current *
        dropInfluence *
        0.35;

      targetX += dropWobble * nx;

      targetY += dropWobble * ny;

      targetZ +=
        Math.sin(time * 6 + particle.phase) *
        dropImpulse.current *
        dropInfluence *
        0.15;

      targetZ *= depthFactor;

      const dx = targetX - particle.x;

      const dy = targetY - particle.y;

      const dz = targetZ - particle.z;

      particle.vx += dx * 0.018;

      particle.vy += dy * 0.018;

      particle.vz += dz * 0.018;

      particle.vx *= 0.91;

      particle.vy *= 0.91;

      particle.vz *= 0.91;

      particle.x += particle.vx;

      particle.y += particle.vy;

      particle.z += particle.vz;

      dummy.position.set(
        particle.x + spherePosition.current.x,

        particle.y + spherePosition.current.y,

        particle.z,
      );

      const velocityLength = Math.sqrt(
        particle.vx ** 2 + particle.vy ** 2 + particle.vz ** 2,
      );

      if (velocityLength > 0.001) {
        dummy.lookAt(
          particle.x + particle.vx * 5 + spherePosition.current.x,

          particle.y + particle.vy * 5 + spherePosition.current.y,

          particle.z + particle.vz * 5,
        );

        dummy.rotateX(Math.PI / 2);
      }

      const pulse =
        0.85 +
        Math.sin(time * pulseSpeed + particle.phase) * 0.15 * particleVariance;

      const finalSize = particleSize * particle.size * pulse;

      dummy.scale.set(finalSize, finalSize, finalSize);

      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {particleShape === "capsule" && (
        <capsuleGeometry args={[0.12, 0.45, 4, 8]} />
      )}

      {particleShape === "sphere" && <sphereGeometry args={[0.2, 12, 12]} />}

      {particleShape === "box" && <boxGeometry args={[0.3, 0.3, 0.3]} />}

      {particleShape === "tetrahedron" && <tetrahedronGeometry args={[0.3]} />}

      <meshBasicMaterial color={color} transparent opacity={0.85} />
    </instancedMesh>
  );
};

const Antigravity: React.FC<AntigravityProps> = (props) => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 50],
        fov: 25,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <AntigravityInner {...props} />
    </Canvas>
  );
};

export const LayeredAntigravity = () => {
  return (
    <Suspense fallback={null}>
      <Antigravity
        count={800}
        sphereRadius={9}
        particleSize={0.32}
        color="#5227FF"
        mouseInfluence={3.5}
        jellyStrength={2}
        wobbleStrength={0.5}
        wobbleSpeed={1.4}
        lerpSpeed={0.08}
        pulseSpeed={2}
        particleVariance={0.3}
        depthFactor={1}
        autoAnimate={true}
        particleShape="capsule"
      />
    </Suspense>
  );
};

export default LayeredAntigravity;
