import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const modelPath = isMobile
    ? "./desktop_pc/output.glb"
    : "./desktop_pc/optimized.glb";

  const { scene } = useGLTF(modelPath);

  if (!scene) {
    console.error("Model failed to load:", modelPath);
    return null;
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.25 : 0.75}
        position={isMobile ? [0, -1, 0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  if (isMobile) {
    // 📱 Render image on mobile
    return (
      <div style={{ width: "100%", height: "100vh", textAlign: "center" }}>
        <img
  src="/desktop_pc/pc.png"
  alt="Computer Model"
  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
/>

      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={false} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

// Only preload for desktop since mobile doesn't use models
useGLTF.preload("./desktop_pc/optimized.glb");

export default ComputersCanvas;
