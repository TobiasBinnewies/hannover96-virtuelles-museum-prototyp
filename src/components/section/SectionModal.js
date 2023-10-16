import React, { useState } from 'react'
import Modal from 'react-modal'
import content from '../utils/section.content'
import ModalTitle from '@/components/utils/ModalTitle'
import SectionImage from '@/components/utils/SectionImage'
import SectionTitle from '../utils/SectionTitle'
import styles from './SectionModel.module.css'
import SectionImageList from '../images/SectionImageList'
import UploadSectionImage from '../images/UploadSectionImage'
import { useSession } from '@/services/frontend/session'

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
    maxHeight: '80vh',
  },
}

const buttonStyle = {
  width: '2rem',
  height: '2rem',
  'border-radius': '25%',
  border: 'none !important',
  margin: '0 !important',
  'background-color': 'red',
}

const buttonDivStyle = {
  'background-color': 'blue',
  'mask-image': 'url("xmark.svg")',
  'mask-repeat': 'no-repeat',
  'mask-position': 'center',
  width: '100%',
  height: '100%',
}

export default function SectionModal({obj: section, session}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isUploadOpen, setIdUploadOpen] = useState(false)

  const modal = (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
    >
      <div className={'flex justify-between'}>
        {session ? getButton(() => setIdUploadOpen(true), 'upload_button') : <div/>}
        {getButton(() => setIsOpen(false), 'close_button')}
      </div>
      <SectionTitle title={section.title} size="3xl" />
      <h1 className={'text-primary-text font-sans font-normal'}>
        {section.content}
      </h1>
      {section.images.map((image, idx) => (
        <SectionImage
          key={idx}
          image={image}
          // alt={section.modalAlt}
          subtitle={section.date}
        />
      ))}
      <SectionImageList section={section.date} width='100%' />
    </Modal>
  )

  const uploadModal = (
    <Modal
      isOpen={isUploadOpen}
      onRequestClose={() => setIdUploadOpen(false)}
      style={{...customStyles, content: {...customStyles.content, width: '30%'}}}
    >
      <div className={'flex justify-end'}>
        {getButton(() => setIdUploadOpen(false), 'close_button')}
      </div>
      <UploadSectionImage section={section.date} />
    </Modal>
  )

  return (
    <div className={'text-center z-10'}>
      <button
        onClick={() => setIsOpen(true)}
        className={'text-2xl text-highlight-text font-normal'}
      >
        <u>{content.modalButtonRead}</u>
      </button>
      {modal}
      {uploadModal}
    </div>
  )
}

function getButton(handler, style) {
  return (
    <button onClick={handler} className={styles[style]}>
      <div></div>
    </button>
  )
}
