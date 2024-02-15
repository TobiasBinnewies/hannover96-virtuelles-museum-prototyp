export default function Model_Computer() {

  return (
    <model-viewer className={'relative h-screen'}
                  alt="xxx"
                  src='/computer.glb' ar shadow-intensity='1' camera-controls
                  touch-action='pan-y'></model-viewer>
  )
}