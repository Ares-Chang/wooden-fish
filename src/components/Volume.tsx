export function Volume(props: {
  volume: number
  onUpdateVolume: (val: number) => void
}) {
  return (
    <div w-full>
      <div text-3xl>背景音量</div>
      <div my-20 onClick={e => e.stopPropagation()}>
        <Silder
          value={props.volume}
          onSetValue={e => props.onUpdateVolume(e)}
        />
      </div>
    </div>
  )
}
