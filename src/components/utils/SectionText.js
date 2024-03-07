export default function SectionText(props) {
  return (
    <div className={'text-center pb-3'}>
      <text
        className={
          'text-primary-text text-base font-sans font-normal line-clamp-5 lg:line-clamp-3'
        }
      >
        {props.text}
      </text>
    </div>
  )
}
