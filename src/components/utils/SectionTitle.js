export default function SectionTitle({title, size = '6xl'}) {
  return (
    <div className={'text-center'}>
      <h1
        className={`text-heading-text text-${size} font-sans font-bold light-effect light-effect-color`}
      >
        {title}
      </h1>
    </div>
  )
}
