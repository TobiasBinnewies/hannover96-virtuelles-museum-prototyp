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
import { useRouter } from 'next/navigation'

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
    // border: '2px solid #000',
    border: 'none',
    borderRadius: '1.5em',
    padding: '1rem',
    paddingTop: '0',
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

export default function SectionModal({ obj: section, session, images }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isUploadOpen, setIdUploadOpen] = useState(false)

  const modal = (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
    >
      {/* <div className=""> */}
      <div
        className="sticky top-0 bg-white pt-[1rem] pb-[1rem]"
        style={{ zIndex: '999' }}
      >
        <div
          className={'flex justify-between align-bottom'}
          style={{ alignItems: 'self-end' }}
        >
          {getButton(
            () => setIdUploadOpen(true),
            'Upload Image',
            'blue',
            'upload_button',
            !session,
            () => router.push('/signin'),
          )}
          <SectionTitle title={section.title} size="3xl" className="pb-3" />
          {getButton(() => setIsOpen(false), 'Close', 'red', 'close_button')}
        </div>
      </div>
      {/* </div> */}

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
      <SectionImageList
        section={section.date}
        width="100%"
        style={{ zIndex: '-5' }}
        images={images}
      />
    </Modal>
  )

  const uploadModal = (
    <Modal
      isOpen={isUploadOpen}
      onRequestClose={() => setIdUploadOpen(false)}
      style={{
        ...customStyles,
        content: { ...customStyles.content, width: '40%' },
      }}
    >
      <div
        className="sticky top-0 bg-white pt-[1rem] pb-[1rem]"
        style={{ zIndex: '999' }}
      >
        <div
          className={'flex justify-between align-bottom'}
          style={{ alignItems: 'self-end' }}
        >
          <div></div>
          <SectionTitle title={`Bildupload für ${section.date}`} size="3xl" />
          {getButton(
            () => setIdUploadOpen(false),
            'Close',
            'red',
            'close_button',
          )}
        </div>
      </div>
      {/* <div className={'flex justify-end fix'}>
        {getButton(
          () => setIdUploadOpen(false),
          'Close',
          'red',
          'close_button',
        )}
      </div> */}
      <div className='flex justify-center'>
        <UploadSectionImage section={section.date} />
      </div>
    </Modal>
  )

  return (
    <div className={'text-center z-10'}>
      <button
        onClick={() => setIsOpen(true)}
        className={
          'text-2xl text-highlight-text font-normal light-effect light-effect-color group relative'
        }
      >
        <span className="absolute w-0 -bottom-1 h-0.5 light-effect light-effect-background group-hover:w-full transition-all duration-200"></span>
        <u>{content.modalButtonRead}</u>
      </button>
      {modal}
      {uploadModal}
    </div>
  )
}

function getButton(
  handler,
  text,
  color,
  style,
  disabled = false,
  disabledHandler,
) {
  return (
    <button
      className={`flex rounded-lg p-1`}
      style={{
        alignItems: 'center',
        opacity: disabled ? 0.5 : 1,
        backgroundColor: color,
      }}
      onClick={disabled ? disabledHandler : handler}
      disabled={disabled && !disabledHandler}
    >
      <div className={styles[style]} style={{ backgroundColor: color }}>
        <div style={{ backgroundColor: 'white' }}></div>
      </div>
      <p className="text-white font-sans font-normal">{text}</p>
    </button>
  )
}
