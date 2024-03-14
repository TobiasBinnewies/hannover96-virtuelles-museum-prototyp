export default function SectionSubtitle(props) {
  return (
    <div className={'text-center'}>
      <h2 className={'text-secondary-text text-xl md:text-2xl tv:text-6xl font-sans font-bold'}>
        {props.text}
      </h2>
    </div>
  )
}
