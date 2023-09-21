import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

function NewModel() {
  const { scene } = useGLTF('/computer.glb');
  return <primitive position={[0, 0, 0]} object={scene}/>
}

function ComponentModel() {

  return (
        <div className={' absolute right-0 w-[20%] h-screen bg-opacity-0  z-20'}>
          <Canvas camera={{ fov: 20, zoom: 0.15, position:[2, 0, 0]}}>
            <ambientLight intensity={1.25} />
            <Suspense fallback={null}>
              <NewModel />
            </Suspense>
            <OrbitControls minDistance={1} maxDistance={8} enableZoom={false}/>
          </Canvas>
        </div>
  )
}

export default ComponentModel