import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

function NewModel() {
  const { scene } = useGLTF('/wd.glb');
  return <primitive position={[0, 0, 0]} object={scene}/>
}

function Model_Wd() {

  return (
        <div className={'absolute right-0 top-[10vh] w-[20%] h-screen bg-opacity-0  z-20'}>
          <Canvas camera={{ fov: 20, zoom: 0.15, position:[2, 0, 0]}}>
            <ambientLight intensity={1.25} />
            <Suspense fallback={null}>
              <NewModel />
            </Suspense>
            <OrbitControls minDistance={2} maxDistance={8} enableZoom={false}/>
          </Canvas>
        </div>
  )
}

export default Model_Wd