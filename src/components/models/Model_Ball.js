import { Stats, OrbitControls, Circle, Loader, useGLTF } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Ball() {
  const gltf = useLoader(GLTFLoader, '/ball_old.glb')

  return (
    <primitive
      object={gltf.scene}
      /* Zweiter Wert gibt die Höhe des Objektes an der Vertikalen an*/
      position={[0, 0.9, 0]}
      /* Zweiter Wert gibt die Drehung des Objektes an der Vertikalen an*/
      rotation={[0, 0, 0]}
      children-0-castShadow
    />
  )
  useGLTF.preload('/ball_old.glb');
}
export default function Model_Ball() {

  return (
    <div className={'absolute right-0 w-[20%] h-screen bg-opacity-0  z-20'}>
      <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
        {/* AmbientLight und Spotlight notwendig, damit bei allen Objekten die Farben zu sehen sind. Ggf. je Objekt anpassen */}
        <ambientLight intensity={1} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Ball/>
        {/* Mit der Min- und Max-Distance kann der Zoom an das Objekt eingestellt werden. Kleine Werte verringern die Distanz / Erhöhen den Zoom */}
        <OrbitControls target={[0, 1, 0]} minDistance={4} maxDistance={4} enableZoom={false} />
        {/* Einkommentieren, um die Achsen anzuzeigen: <axesHelper args={[5]} />*/}
        {/* Einkommentieren, um die FPS der Seite anzuzeigen <Stats />*/}
      </Canvas>
    </div>
  )
}