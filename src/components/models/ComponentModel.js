import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'

function NewModel() {
  const { scene } = useGLTF('/wd.glb')
  return <primitive position={[0, 0, 0]} object={scene}/>
}

function ComponentModel() {

  return (
        <div className={'w-[50%] h-screen bg-opacity-0 absolute right-[-10vw]'}>
          <Canvas camera={{ fov: 20, zoom: 0.15, position:[2, 0, 0]}}>
            <ambientLight intensity={1.25} />
            <Suspense fallback={null}>
              <NewModel />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
  )
}

export default ComponentModel