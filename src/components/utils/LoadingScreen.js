import { useProgress } from '@react-three/drei'

export default function LoadingScreen() {
  const { progress } = useProgress()

  return (
    <div className={'absolute top-0 left-0 w-screen h-screen bg-primary-bg'}>
      <h1 className={'text-primary-text text-6xl absolute top-0'}>
        {progress}
      </h1>
    </div>
  )
}
