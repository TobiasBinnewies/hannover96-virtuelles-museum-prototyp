export default function SectionText(props) {
  return (
    <div className={'text-center'}>
      <text className={'text-primary-text text-base font-sans font-normal'}>
        {props.text}
      </text>
    </div>
  )
}
