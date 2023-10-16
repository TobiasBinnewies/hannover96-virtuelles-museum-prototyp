import React, { useState } from 'react'
import Modal from 'react-modal'
import content from '../utils/section.content'
import ModalTitle from '@/components/utils/ModalTitle'
export default function AR_Modal(props) {
  const [isOpen, setIsOpen] = useState(false)
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
  const myStyle = {
    position: 'relative',
    top: '20%',
    height: '65vh',
    width: '100%',
    border: 'none',
  }

  return (
    <div className={'text-center z-10 mt-[10%]'}>
      <button
        onClick={() => setIsOpen(true)}
        className={'text-2xl text-emerald-500 font-normal'}
      >
        {'In 3D ansehen'}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className={'flex justify-end'}>
          <button
            onClick={() => setIsOpen(false)}
            className={'text-2xl text-emerald-500 font-normal'}
          >
            {content.modalButtonClose}
          </button>
        </div>
        <ModalTitle title={'In 3D ansehen'} />
        <h1 className={'text-black font-sans font-normal'}>
          <iframe style={myStyle} src={props.arlink}></iframe>
        </h1>
      </Modal>
    </div>
  )
}
