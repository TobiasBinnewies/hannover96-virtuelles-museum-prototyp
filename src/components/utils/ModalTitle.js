export default function ModalTitle(props) {
  return (
    <div>
      <h2
        className={'text-heading-text text-3xl font-sans font-extrabold mb-2'}
      >
        {props.title}
      </h2>
    </div>
  )
}
