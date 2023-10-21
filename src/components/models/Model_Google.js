import '@google/model-viewer';

export default function Model_Google() {

  return (
      <model-viewer className={'relative h-screen'}
        alt="xxx"
        src='/Testobjekt.glb' ar shadow-intensity='1' camera-controls
        touch-action='pan-y'></model-viewer>
  )
}