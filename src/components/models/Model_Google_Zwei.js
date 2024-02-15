import '@google/model-viewer';

export default function Model_Google_Zwei() {

  return (
      <model-viewer className={'relative h-screen'}
        alt="xxx"
        src='/wd.glb' ar shadow-intensity='1' camera-controls
        touch-action='pan-y'></model-viewer>
  )
}