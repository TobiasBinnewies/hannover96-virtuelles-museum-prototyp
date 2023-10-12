export default function Model_Vase() {
  const myStyle = {
    position: 'absolute',
    right: '20%',
    top: '20%',
    height: '60%',
    width: '60%',
    border: 'none',
  }

  return (
    <div className={'relative right-0 w-[20%] h-screen bg-opacity-0  z-20'}>
      <iframe src="https://vr.scanblue.cloud/yx0v8o0acssv3snb2xgdltelx69zsp1u"
              style={myStyle} frameBorder="0" allowvr=""
              allowFullScreen="" mozallowfullscreen="true" webkitallowfullscreen="true" scrolling="no"></iframe>
      <a id="'scanblue-TxQLcgc" className={'modal-link text-black relative'} href="https://ar.scanblue.com/av8tDy">In AR/VR anschauen</a>
    </div>
  )
}