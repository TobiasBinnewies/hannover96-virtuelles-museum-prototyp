export default function SectionTitle({title, size = '6xl'}) {
  return (
    <div className={'text-center'}>
      <h1 className={`text-heading-text text-${size} font-sans font-bold pb-3`}>
        {title}
      </h1>
    </div>
  )
}
