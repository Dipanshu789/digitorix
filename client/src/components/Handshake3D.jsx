import { useEffect, useRef } from "react";
import * as THREE from "three";
import robotHandImg from "../assets/robot-hand.png";
import humanHandImg from "../assets/human-hand.png";
import startupLogoImg from "../assets/startup-logo.png";

export default function Handshake3D() {
  const mountRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, robotHand, humanHand, logo;
    let frameId;
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Scene & Camera
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    // Load Textures asynchronously
    const loader = new THREE.TextureLoader();
    let loaded = 0;
    const textures = {};
    const onTextureLoad = () => {
      loaded++;
      if (loaded === 3) {
        // Materials
        const matRobot = new THREE.MeshBasicMaterial({ map: textures.robot, transparent: true });
        const matHuman = new THREE.MeshBasicMaterial({ map: textures.human, transparent: true });
        const matLogo = new THREE.MeshBasicMaterial({ map: textures.logo, transparent: true });

        // Geometry
        const handW = 2, handH = 2.5;
        const logoW = 1.5, logoH = 1.5;
        const geoHand = new THREE.PlaneGeometry(handW, handH);
        const geoLogo = new THREE.PlaneGeometry(logoW, logoH);

        // Meshes
        robotHand = new THREE.Mesh(geoHand, matRobot);
        humanHand = new THREE.Mesh(geoHand, matHuman);
        logo = new THREE.Mesh(geoLogo, matLogo);

        // Initial positions (off corners)
        robotHand.position.set(-2.5, 2.5, 0.2);
        robotHand.rotation.z = -0.3;
        humanHand.position.set(2.5, -2.5, 0.2);
        humanHand.rotation.z = 0.3;
        logo.position.set(0, 0, 0);

        scene.add(robotHand);
        scene.add(humanHand);
        scene.add(logo);

        // Animation
        animate();
      }
    };

    textures.robot = loader.load(robotHandImg, onTextureLoad);
    textures.human = loader.load(humanHandImg, onTextureLoad);
    textures.logo = loader.load(startupLogoImg, onTextureLoad);

    // Responsive resize
    const handleResize = () => {
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Scroll Animation
    const animate = () => {
      // Calculate scroll progress (0 = not visible, 1 = fully visible)
      const rect = mountRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      let progress = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        progress = Math.min(1, Math.max(0, 1 - (rect.top + rect.height * 0.5) / (windowHeight * 0.7)));
      }

      // Animate hands towards center as progress increases
      if (robotHand && humanHand && logo) {
        robotHand.position.x = -2.5 + 2.5 * progress;
        robotHand.position.y = 2.5 - 2.5 * progress;
        robotHand.rotation.z = -0.3 + 0.25 * progress;

        humanHand.position.x = 2.5 - 2.5 * progress;
        humanHand.position.y = -2.5 + 2.5 * progress;
        humanHand.rotation.z = 0.3 - 0.25 * progress;

        // Optional: scale up logo as hands meet
        logo.scale.set(0.7 + 0.3 * progress, 0.7 + 0.3 * progress, 1);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-100"
      style={{
        height: "45vw",
        maxHeight: 400,
        minHeight: 220,
        margin: "0 auto",
        background: "transparent",
        position: "relative",
      }}
      aria-label="3D Handshake Animation"
    />
  );
}