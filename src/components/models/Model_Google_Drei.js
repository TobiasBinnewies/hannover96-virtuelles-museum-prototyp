import '@google/model-viewer';

export default function Model_Google_Drei() {

  return (
      <model-viewer className={'relative h-screen'}
        alt="xxx"
        src='/iphone.glb' ar shadow-intensity='1' camera-controls
        touch-action='pan-y'></model-viewer>
  )
}