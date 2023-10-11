import React, { useState } from 'react'
import Modal from 'react-modal'
import content from '../utils/section.content'
import ModalTitle from '@/components/utils/ModalTitle'
import SectionImage from '@/components/utils/SectionImage'
export default function SectionModal(props) {
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
      margin: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  const section = props.obj

  return (
    <div className={'text-center z-10'}>
      <button
        onClick={() => setIsOpen(true)}
        className={'text-2xl text-emerald-500 font-normal'}
      >
        {content.modalButtonRead}
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
        <ModalTitle title={section.title} />
        <h1 className={'text-black font-sans font-normal'}>
          {section.content}
        </h1>
        {section.images.map((image, idx) => <SectionImage
          key={idx}
          image={image}
          // alt={section.modalAlt}
          subtitle={section.date}
        />)}
      </Modal>
    </div>
  )
}
