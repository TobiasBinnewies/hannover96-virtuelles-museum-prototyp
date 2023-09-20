export default function SectionTitle(props){
  return (
    <div className={'text-center'}>
      <h1 className={'text-emerald-500 text-6xl font-sans font-bold'}>{props.text}</h1>
    </div>
  )
}