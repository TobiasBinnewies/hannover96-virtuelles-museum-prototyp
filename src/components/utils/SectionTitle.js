export default function SectionTitle({title, size = "6xl", padding = '0'}) {
  return (
    <div className={'text-center'}>
      <h1
        className={`text-heading-text text-${size} font-sans font-bold light-effect light-effect-color`}
        style={{padding}}
      >
        {title}
      </h1>
    </div>
  )
}
