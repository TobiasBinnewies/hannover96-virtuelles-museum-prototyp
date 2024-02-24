import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import content from '../utils/section.content'
import ModalTitle from '@/components/utils/ModalTitle'
import SectionTitle from '../utils/SectionTitle'
export default function AR_Modal(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [style, setStyle] = useState({})

  const mediaQuery = window.matchMedia("(min-width: 640px)")

  const [titleSize, setTitleSize] = useState()

  const mobileStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: '1000',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '90%',
      margin: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '80vh',
      // border: '2px solid #000',
      border: 'none',
      borderRadius: '1.5em',
      padding: '1rem',
      paddingTop: '0',
    },
  }

  useEffect(() => {
    if(mediaQuery.matches){
      setStyle(customStyles)
      setTitleSize("4xl")
    }else{
      setStyle(mobileStyle)
      setTitleSize("2xl")
    }
  }, [])

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: '1000',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '50%',
      height: '80%',
      margin: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  const openOnMobile = () => {
    window.open(props.arlink)
  }

  return (
    <div className={'text-center z-10 mt-[5%]'}>
      <button
        onClick={() => {
          if(mediaQuery.matches) {
            setIsOpen(true)
          }else {
            window.open(props.arlink)
          }
        }}
        className={
          'text-2xl text-emerald-500 font-normal light-effect light-effect-color group relative'
        }
      >
        <span className="absolute w-0 h-0.5 light-effect light-effect-background group-hover:w-full transition-all duration-200"></span>
        {'In 3D ansehen'}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={style}
      >
        <div className={'flex justify-end'}>
          <button
            onClick={() => setIsOpen(false)}
            className={'text-2xl text-emerald-500 font-normal'}
          >
            {content.modalButtonClose}
          </button>
        </div>
        <SectionTitle title={'In 3D ansehen'} size={titleSize}/>
        <h1 className={'text-black font-sans font-normal'}>
          <iframe className={"relative top-[20%] h-[65vh] w-[100%] border-none"} src={props.arlink}></iframe>
        </h1>
      </Modal>
    </div>
  )
}
