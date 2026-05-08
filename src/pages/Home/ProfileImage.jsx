import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";

function Avatar() {
  const { scene } = useGLTF("/avatar.glb");
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      // only animate Y offset, not absolute position (fixes drift bug)
      ref.current.rotation.y += 0.0;
      const base = -2.40;
      ref.current.position.y = base + Math.sin(clock.getElapsedTime() * 0.8) * 0.04;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.6}
      position={[0, -2.40, 0]}
    />
  );
}

function AvatarCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.55, 1.8], fov: 38 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 4, 2]} intensity={1.2} />
      <directionalLight position={[-2, 2, -2]} intensity={0.4} />
      <Suspense fallback={null}>
        <Avatar />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}

function ProfileImage() {
  return (
    // single responsive wrapper — works on all screen sizes
    <div className="flex justify-center items-center w-full">
      {/* <div
        className="
          mt-6 md:mt-16
          w-[240px] h-[300px]
          sm:w-[270px] sm:h-[340px]
          md:w-[300px] md:h-[400px]
          lg:w-[340px] lg:h-[440px]
          relative z-10
        "
      > */}
        <AvatarCanvas />
      {/* </div> */}
    </div>
  );
}

export default ProfileImage;