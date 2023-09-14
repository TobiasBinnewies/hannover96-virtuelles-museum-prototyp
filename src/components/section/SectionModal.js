import React, { useState } from 'react'
import Modal from 'react-modal'
import content from '../utils/section.content'
import ModalTitle from '@/components/utils/ModalTitle'
import SectionImage from '@/components/utils/SectionImage'
import hannover from '../images/H96.jpeg'
export default function SectionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '50%',
      margin: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  return (
    <div className={'text-center'}>
      <button onClick={() => setIsOpen(true)} className={'text-2xl text-emerald-500 font-normal'}>{content.modalButtonRead}</button>

      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
        <div className={'flex justify-end'}>
          <button onClick={() => setIsOpen(false) } className={'text-2xl text-emerald-500 font-normal'}>{content.modalButtonClose}</button>
        </div>
          <ModalTitle title={content.modalTitle}/>
          <h1 className={'text-black font-sans font-normal'}>{content.text}</h1>
          <SectionImage image={hannover} alt={'Hannover am feiern'} subtitle={'Hannover am feiern!'}/>
      </Modal>

    </div>
  )
}