export default function SectionText(props) {
  return (
    <div className={'text-center pb-3 justify-center items-center flex'}>
      <text
        className={
          'text-primary-text text-base font-sans font-normal line-clamp-5 lg:line-clamp-3 max-w-[80%]'
        }
      >
        {props.text}
      </text>
    </div>
  )
}
